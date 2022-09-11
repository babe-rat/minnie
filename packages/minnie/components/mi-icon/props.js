export default {
    props: {
        // 图标名称
        name: {
            type: String,
            default: undefined,
        },
        // 图标颜色
        color: {
            type: String,
            default: 'inherit',
        },
        // 图标大小
        size: {
            type: [String, Number],
            default: '20px',
        },
    },
}
