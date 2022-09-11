const { resolve } = require('path')

const CWD = process.cwd()

const COMPONENTS_DOC_DIR = resolve(CWD, 'docs', 'components')
const MINNIE_PACKAGES_DIR = resolve(CWD, 'packages')
const MINNIE_DIR = resolve(MINNIE_PACKAGES_DIR, 'minnie')
const COMPONENTS_DIR = resolve(MINNIE_DIR, 'components')
const COMPONENTS_EXAMPLE_DIR = resolve(MINNIE_PACKAGES_DIR, 'example', 'src')
const COMPONENTS_EXAMPLE_PAGES_JSON = resolve(COMPONENTS_EXAMPLE_DIR, 'pages.json')
const COMPONENTS_EXAMPLE_PAGES_DIR = resolve(COMPONENTS_EXAMPLE_DIR, 'pages')
const COMPONENTS_EXAMPLE_PAGES_OVERVIEW_SETTING = resolve(
    COMPONENTS_EXAMPLE_PAGES_DIR,
    'overview',
    'routes.js',
)

const COMPONENT_PREFIX = 'mi'

const componentGroup = [
    '基础组件',
    '表单组件',
    '数据组件',
    '反馈组件',
    '布局组件',
    '导航组件',
    '其它组件',
]

module.exports = {
    CWD,
    COMPONENTS_DOC_DIR,
    MINNIE_DIR,
    COMPONENTS_DIR,
    COMPONENTS_EXAMPLE_PAGES_JSON,
    COMPONENTS_EXAMPLE_PAGES_DIR,
    COMPONENTS_EXAMPLE_PAGES_OVERVIEW_SETTING,
    COMPONENT_PREFIX,
    componentGroup,
    MINNIE_PACKAGES_DIR,
}
