const { writeFileSync } = require('fs-extra')

const generateDoc = (dest, { componentFullName, componentName, desc }) => {
    writeFileSync(
        dest,
        `---
nav:
    title: 组件
---

# ${componentName} ${desc}

${desc}

## 平台差异说明

| H5  | 小程序 |
| --- | ------ |
| √   | √      |

## 代码演示

### 基本使用

\`\`\`html
<${componentFullName}></${componentFullName}>
\`\`\`

## API

### 属性

| 属性名  | 说明                 | 类型    | 默认值 | 可选值       |
| ------- | -------------------- | ------- | ------ | ------------ |
|  |  |  |    |         |

### 事件

| 事件名 | 说明         | 参数 |
| ------ | ------------ | ---- |
|   |  |    |
    `,
    )
}

module.exports = generateDoc
