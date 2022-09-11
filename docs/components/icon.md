---
group:
    title: 基础组件
    order: 2
nav:
    title: 组件
---

# Icon 图标

基于字体的图标库。

## 平台差异说明

| H5  | 小程序 |
| --- | ------ |
| √   | √      |

## 代码演示

### 基本使用

```html
<mi-icon name="menu-up" />
<mi-icon name="menu-up" size="24" />
<mi-icon name="menu-up" size="24" color="#cb6586" />
```

## API

### 属性

| 属性名 | 说明     | 类型                 | 默认值    | 可选值 |
| ------ | -------- | -------------------- | --------- | ------ |
| name   | 图标名称 | String               | -         | -      |
| color  | 图标颜色 | String               | 'inherit' | -      |
| size   | 图标大小 | String &#124; Number | 20        | -      |

### 事件

| 事件名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| click  | 点击触发事件 | -    |
