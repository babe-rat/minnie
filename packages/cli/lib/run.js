const { resolve } = require('path')
const inquirer = require('inquirer')
const lowerFirst = require('lodash.lowerfirst')
const upperFirst = require('lodash.upperfirst')
const camelCase = require('lodash.camelcase')
const { COMPONENTS_DOC_DIR, COMPONENTS_DIR, COMPONENT_PREFIX } = require('./shared/constant')
const logger = require('./shared/logger')
const generateComponent = require('./generate/generateComponent')
const generateDoc = require('./generate/generateDoc')
const generateExample = require('./generate/generateExample')

function run(name) {
    inquirer
        .prompt([
            {
                name: 'desc',
                message: '组件说明',
                type: 'input',
                validate(answer) {
                    return answer ? true : '必填项'
                },
            },
        ])
        .then((answers) => {
            const { desc } = answers
            name = lowerFirst(name)
            // 组件全名
            const componentFullName = `${COMPONENT_PREFIX}-${name}`
            const componentName = upperFirst(camelCase(name))
            const option = { name, desc, componentFullName, componentName }
            try {
                // 生成 doc 文档
                generateDoc(resolve(COMPONENTS_DOC_DIR, `${name}.md`), option)
                // 生成组件模板
                generateComponent(resolve(COMPONENTS_DIR, componentFullName), option)
                // 生成 uni-app example
                generateExample(option)
                logger.success('Component generated successfully!')
            } catch (e) {
                logger.error(e)
            }
        })
}

module.exports = run
