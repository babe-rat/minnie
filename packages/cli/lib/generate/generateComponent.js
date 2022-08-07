const { mkdirSync, writeFileSync } = require('fs-extra')
const { resolve } = require('path')

const generateComponent = (dest, { componentFullName }) => {
    mkdirSync(dest)
    writeFileSync(
        resolve(dest, `${componentFullName}.vue`),
        `<template>
    <view></view>
</template>
`,
    )
}

module.exports = generateComponent
