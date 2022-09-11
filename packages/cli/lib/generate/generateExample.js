const { mkdirSync, writeFileSync, readJSONSync, writeJSONSync } = require('fs-extra')
const { resolve } = require('path')
const mergeWith = require('lodash.mergewith')
const groupBy = require('lodash.groupby')
const sortBy = require('lodash.sortby')
const execa = require('execa')
const {
    COMPONENTS_EXAMPLE_PAGES_DIR,
    COMPONENTS_EXAMPLE_PAGES_JSON,
    COMPONENTS_EXAMPLE_PAGES_OVERVIEW_SETTING,
    componentGroup,
} = require('../shared/constant')

function customizer(objValue, srcValue) {
    if (Array.isArray(objValue)) {
        return objValue.concat(srcValue)
    }
}

const generateExample = ({ name, componentName, desc, componentFullName, group }) => {
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
                    group,
                    style: {
                        navigationBarTitleText: `${componentName} ${desc}`,
                    },
                },
            ],
        },
        customizer,
    )
    writeJSONSync(COMPONENTS_EXAMPLE_PAGES_JSON, mergedPagesJson)

    const groupedPages = groupBy(
        mergedPagesJson.pages.filter(
            (item) => !['pages/overview/index', 'pages/convert-props/index'].includes(item.path),
        ),
        'group',
    )
    const pages = componentGroup.reduce((result, value) => {
        if (groupedPages[value]) {
            return result.concat(sortBy(groupedPages[value], 'style.navigationBarTitleText'))
        }
        return result
    }, [])

    writeFileSync(
        COMPONENTS_EXAMPLE_PAGES_OVERVIEW_SETTING,
        `const routes = [
    ${pages.map(
        (page) => `{
        name: '${page.style.navigationBarTitleText}',
        path: '${page.path}',
        group: '${page.group}',
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
