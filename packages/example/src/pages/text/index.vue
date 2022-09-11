<template>
    <demo-section>
        <demo-block title="基础使用">
            <mi-text text="我用十年青春,赴你最后之约"></mi-text>
        </demo-block>
        <demo-block title="日期格式化">
            <mi-text mode="date" text="1612959739"></mi-text>
            <mi-text mode="date" text="1661823683776" format="YYYY-MM-DD HH:mm:ss"></mi-text>
        </demo-block>
        <demo-block title="显示金额">
            <mi-text
                mode="price"
                color="#B40C21"
                text="1314520.00"
                priceIconSize="12"
                size="16"
            ></mi-text>
        </demo-block>
        <demo-block title="排序">
            <mi-text mode="sorter" text="价格" @click="handleClick"></mi-text>
        </demo-block>
        <demo-block title="预览文件">
            <mi-text mode="preview" text="PDF" url="https://example.com/somefile.pdf"></mi-text>
        </demo-block>
    </demo-section>
</template>

<script>
export default {
    methods: {
        handleClick(sorter) {
            console.log(sorter)
        },
    },
}
</script>
