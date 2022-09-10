const ora = require('ora')
const conventionalChangelog = require('conventional-changelog')
const { createWriteStream } = require('fs-extra')
const path = require('path')
const execa = require('execa')
const { CWD, MINNIE_DIR } = require('../shared/constant')

function changelog({ releaseCount = 0, file = 'CHANGELOG.md' } = {}) {
    const s = ora().start(`Generating changelog`)

    return new Promise((resolve) => {
        conventionalChangelog({
            preset: 'angular',
            releaseCount,
            pkg: {
                path: path.join(MINNIE_DIR, 'package.json'),
            },
        })
            .pipe(createWriteStream(path.resolve(CWD, file)))
            .on('close', () => {
                s.succeed(`Changelog generated success!`)
                execa('pnpm', ['prettier', '--write', path.resolve(CWD, file)])
                resolve()
            })
    })
}

module.exports = changelog
