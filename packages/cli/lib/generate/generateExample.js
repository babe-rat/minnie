const { mkdirSync, writeFileSync, readJSONSync, writeJSONSync } = require('fs-extra')
const { resolve } = require('path')
const mergeWith = require('lodash.mergewith')
const execa = require('execa')
const {
    COMPONENTS_EXAMPLE_PAGES_DIR,
    COMPONENTS_EXAMPLE_PAGES_JSON,
    COMPONENTS_EXAMPLE_PAGES_OVERVIEW_SETTING,
} = require('../shared/constant')

function customizer(objValue, srcValue) {
    if (Array.isArray(objValue)) {
        return objValue.concat(srcValue)
    }
}

const generateExample = ({ name, componentName, desc, componentFullName }) => {
    const PAGE_DIR = resolve(COMPONENTS_EXAMPLE_PAGES_DIR, name)
    mkdirSync(PAGE_DIR)
    writeFileSync(
        resolve(PAGE_DIR, 'index.vue'),
        `<template>
        <demo-section>
            <demo-block title="基础使用">
                <${componentFullName}>测试</${componentFullName}>
            </demo-block>
        </demo-section>
    </template>`,
    )
    const pagesJson = readJSONSync(COMPONENTS_EXAMPLE_PAGES_JSON, { throws: false })
    const mergedPagesJson = mergeWith(
        pagesJson,
        {
            pages: [
                {
                    path: `pages/${name}/index`,
                    style: {
                        navigationBarTitleText: `${componentName} ${desc}`,
                    },
                },
            ],
        },
        customizer,
    )
    writeJSONSync(COMPONENTS_EXAMPLE_PAGES_JSON, mergedPagesJson)

    writeFileSync(
        COMPONENTS_EXAMPLE_PAGES_OVERVIEW_SETTING,
        `const routes = [
    ${mergedPagesJson.pages
        .filter((item) => item.path !== 'pages/overview/index')
        .map(
            (page) => `{
        name: '${page.style.navigationBarTitleText}',
        path: '${page.path}'
    }`,
        )}
]
export default routes
`,
    )
    execa('pnpm', [
        'prettier',
        '--write',
        COMPONENTS_EXAMPLE_PAGES_JSON,
        COMPONENTS_EXAMPLE_PAGES_OVERVIEW_SETTING,
        resolve(PAGE_DIR, 'index.vue'),
    ])
}

module.exports = generateExample
