const { resolve } = require('path')
const execa = require('execa')
const inquirer = require('inquirer')
const semver = require('semver')
const ora = require('ora')
const { writeFileSync } = require('fs-extra')
const { MINNIE_DIR } = require('../shared/constant')
const logger = require('../shared/logger')
const changelog = require('./changelog')

const releaseTypes = ['patch', 'minor', 'major', 'prepatch', 'preminor', 'premajor']

async function isWorktreeEmpty() {
    const ret = await execa('git', ['status', '--porcelain'])
    return !ret.stdout
}

async function getReleaseType() {
    const name = 'Please select release type'
    const ret = await inquirer.prompt([
        {
            name,
            type: 'list',
            choices: releaseTypes,
        },
    ])

    return ret[name]
}

// 确认版本号
async function confirmVersion(currentVersion, expectVersion) {
    const name = 'Version confirm'
    const ret = await inquirer.prompt([
        {
            name,
            type: 'confirm',
            message: `Packages version ${currentVersion} -> ${expectVersion}:`,
        },
    ])

    return ret[name]
}

function updateVersion(version) {
    const file = resolve(MINNIE_DIR, 'package.json')
    const config = require(file)
    config.version = version
    writeFileSync(file, JSON.stringify(config, null, 2))
    execa('pnpm', ['prettier', '--write', file])
}

async function publish(preRelease) {
    const s = ora().start('Publishing packages')
    const args = ['publish', '--no-git-checks', '--filter', '@baberat/minnie']

    preRelease && args.push('--tag', 'alpha')
    const ret = await execa('pnpm', args)
    if (ret.stderr && ret.stderr.includes('npm ERR!')) {
        throw new Error('\n' + ret.stderr)
    } else {
        s.succeed('Publish packages successfully')
        ret.stdout && logger.info(ret.stdout)
    }
}

async function pushGit(version, remote = 'origin') {
    const s = ora().start('Pushing to remote git repository')
    await execa('git', ['add', '.'])
    await execa('git', ['commit', '-m', `chore: v${version}`])
    await execa('git', ['tag', version])
    await execa('git', ['push', remote, version])
    const ret = await execa('git', ['push'])
    s.succeed('Push remote repository successfully')

    ret.stdout && logger.info(ret.stdout)
}

async function release(cmd) {
    const currentVersion = require(resolve(MINNIE_DIR, 'package.json')).version

    if (!currentVersion) {
        logger.error('Your package is missing the version field')
        return
    }

    // 检测是否存在未提交的代码
    if (!(await isWorktreeEmpty())) {
        logger.error('Git worktree is not empty, please commit changed')
        return
    }

    const type = await getReleaseType()
    const isPreRelease = type.startsWith('pre')
    const expectVersion = semver.inc(currentVersion, type, 'alpha')

    if (!(await confirmVersion(currentVersion, expectVersion))) {
        return
    }

    updateVersion(expectVersion)

    await publish(isPreRelease)

    if (!isPreRelease) {
        await changelog()
        await pushGit(expectVersion, cmd.remote)
    }
}

module.exports = release
