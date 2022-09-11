<template>
    <view class="mi-page__main">
        <!-- 状态栏区域，占位使用 -->
        <view class="status_bar" :style="{ height: `${statusBarHeight}px` }"></view>
        <!-- 导航栏区域 -->
        <slot name="navbar"></slot>
        <!-- 内容区域 -->
        <view :class="['mi-page__content', { mt44: hasNavBar }]">
            <slot></slot>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            // 状态栏高度
            statusBarHeight: 0,
            // 是否有导航栏
            hasNavBar: false,
        }
    },
    created() {
        // 手机状态栏高度
        this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
    },
    mounted() {
        // 是否存在导航栏
        this.hasNavBar = !!this.$scopedSlots.navbar
    },
}
</script>

<style>
page {
    height: 100%;
}
</style>

<style scoped lang="scss">
.mi-page {
    &__main {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    &__content {
        flex: 1;
        overflow: hidden;
    }
}
.status_bar {
    width: 100%;
}
.mt44 {
    margin-top: 44px;
}
</style>
