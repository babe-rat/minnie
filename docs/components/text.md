---
group:
    title: 基础组件
    order: 2
nav:
    title: 组件
---

# Text 文本

无特别需求时推荐使用 [u-text](https://www.uviewui.com/components/text.html)，需额外对一些文本格式进行处理时可使用该组件。

## 平台差异说明

| H5  | 小程序 |
| --- | ------ |
| √   | √      |

## 代码演示

### 基本使用

```html
<mi-text>我用十年青春,赴你最后之约</mi-text>
```

### 日期格式化

```html
<mi-text mode="date" text="1612959739"></mi-text>
<mi-text mode="date" text="1661823683776" format="YYYY-MM-DD HH:mm:ss"></mi-text>
```

### 显示金额

```html
<mi-text mode="price" color="#B40C21" text="1314520.00" priceIconSize="12" size="16"></mi-text>
```

### 排序

```html
<mi-text mode="sorter" text="价格" @click="handleClick(sorter)"></mi-text>
```

### 文件预览

底层使用[uni.openDocument(OBJECT)](https://uniapp.dcloud.net.cn/api/file/file.html#opendocument)打开文档查看，**微信小程序发布后需配置白名单，否则无法查看。**

```html
<mi-text mode="preview" text="PDF" url="https://example.com/somefile.pdf"></mi-text>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :-- | :-- | :-- | :-- | :-- |
| text | 显示的值 | String &#124; Number | - | - |
| mode | 文本处理的匹配模式 text-普通文本，price-价格，date-日期，sorter-排序 | String | - |  |
| format | 格式化规则 | String &#124; Function | - | - |
| bold | 是否粗体，默认 normal | Boolean | false | true |
| color | 文本颜色 | String | #303133 | - |
| size | 字体大小 | String &#124; Number | 15 | - |
| wordWrap | 文字换行 | String | normal | break-word/anywhere |
| priceIconSize | 金额图标大小 | String &#124; Number | 15 | - |
| sorterIconSize | mode=sorter 下，排序图标大小 | String &#124; Number | 15 | - |
| sorterIconColor | mode=sorter 下，排序图标颜色 | String | #bfbfbf | - |
| sorterIconActiveColor | mode=sorter 下，排序图标选中颜色 | String | #0244ac | - |
| url | mode=preview 下，文件路径地址 | String | - | - |

### 事件

| 事件名 | 说明         | 回调参数 |
| :----- | :----------- | :------- |
| click  | 点击触发事件 | sorter   |
