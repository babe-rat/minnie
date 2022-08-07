<template>
    <view class="minnie-doc-demo-block">
        <view class="minnie-doc-demo-block__title">{{ title }}</view>
        <slot></slot>
    </view>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="scss">
.minnie-doc-demo-block {
    &__title {
        padding-top: 20px;
        margin: 0;
        padding: 16px 0 16px;
        color: rgba(69, 90, 100, 0.6);
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }
}
</style>
