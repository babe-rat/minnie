---
group:
    title: 开发指南
    order: 1
nav:
    title: 组件
order: 1
---

# 快速上手

## 介绍

基于 [uView@2.x](https://www.uviewui.com/components/intro.html) 封装的 uni-app 组件库。

## 安装

![nodejs](https://img.shields.io/badge/nodejs-%3E%3D%2016.0.0-brightgreen)

<Alert type="warning">
注意：nodejs 版本不可大于且等于 17！
</Alert>

推荐使用 `yarn` 安装

```shell
yarn add @baberat/minnie -S
```

## 配置

<Alert type="warning">
使用 @baberat/minnie 前需保证项目中已经安装并配置好 uView。
</Alert>

uView 推荐使用 [npm 方式安装](https://www.uviewui.com/components/install.html#npm%E6%96%B9%E5%BC%8F)，[配置文档](https://www.uviewui.com/components/npmSetting.html)地址。

```shell
yarn add uview-ui@2.0.31 -S
```

1. 引入 uView 主 JS 库

在项目 `src` 目录中的 `main.js` 中，引入并使用 uView 的 JS 库，注意这两行要放在 `import Vue` 之后。

```js
// main.js
import uView from 'uview-ui'
Vue.use(uView)
```

2. 在引入 `uView` 的全局 `SCSS` 主题文件

在项目 `src` 目录的 `uni.scss` 中引入此文件。

```js
/* uni.scss */
@import 'uview-ui/theme.scss';
```

3. 引入 uView 基础样式

```html
<style lang="scss">
    /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
    @import 'uview-ui/index.scss';
</style>
```

4. 配置 easycom 组件模式

此配置需要在项目 `src` 目录的 `pages.json` 中进行。

<Alert type="info">
<li>1. uni-app为了调试性能的原因，修改easycom规则不会实时生效，配置完后，您需要重启HX或者重新编译项目才能正常使用uView的功能。</li>
<li>2. 请确保您的 pages.json 中只有一个 easycom 字段，否则请自行合并多个引入规则。 </li>
</Alert>

```json
// pages.json
{
    "easycom": {
        "^mi-(.*)": "@baberat/minnie/components/mi-$1/mi-$1.vue",
        "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
    },

    // 此为本身已有的内容
    "pages": [
        // ......
    ]
}
```

## 使用

配置 easycom 组件模式后在项目中直接使用。

```html
<template>
    <mi-swiper></mi-swiper>
</template>
```
