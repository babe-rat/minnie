import { defaultColor } from './constant'

export default {
    props: {
        // 显示的值
        text: {
            type: [String, Number],
            default: undefined,
        },
        // 文本处理的匹配模式
        // text-普通文本，price-价格，date-日期，sorter-排序
        mode: {
            type: String,
            default: 'text',
        },
        // 格式化规则
        format: {
            type: [String, Function],
            default: undefined,
        },
        // 文本颜色
        color: {
            type: String,
            default: defaultColor,
        },
        // 字体大小
        size: {
            type: [String, Number],
            default: '15px',
        },
        // 是否粗体，默认normal
        bold: {
            type: Boolean,
            default: false,
        },
        // 文字换行
        wordWrap: {
            type: String,
            default: 'normal',
        },
        // 金额图标大小
        priceIconSize: {
            type: [String, Number],
            default: '15px',
        },
        // 排序图标大小
        sorterIconSize: {
            type: [String, Number],
            default: '16',
        },
        // 排序图标颜色
        sorterIconColor: {
            type: String,
            default: '#bfbfbf',
        },
        // 排序图标选中颜色
        sorterIconActiveColor: {
            type: String,
            default: '#0244ac',
        },
        // 文件地址，网络路径
        url: {
            type: String,
            default: undefined,
        },
    },
}
