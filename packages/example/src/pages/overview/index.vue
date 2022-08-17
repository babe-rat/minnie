<template>
    <view class="content">
        <view class="logo">
            <h1 class="minnie-home__title">
                <image class="minnie-home__image" src="/static/logo.png" />
                <text class="minnie-home__text">Minnie</text>
            </h1>
            <h2 class="minnie-home__desc">基于 uView 封装的 uni-app 组件库</h2>
        </view>
        <view
            class="minnie-home-nav"
            v-for="route in routes"
            :key="route.path"
            @click="navigateTo(route.path)"
        >
            <view class="">{{ route.name }}</view>
            <u-icon name="arrow-right" size="12"></u-icon>
        </view>
    </view>
</template>

<script>
import routes from './routes'

export default {
    data() {
        return {
            routes,
            title: 'Hello',
        }
    },
    onLoad() {},
    methods: {
        navigateTo(path) {
            uni.navigateTo({
                url: `/${path}`,
            })
        },
    },
}
</script>

<style lang="scss">
.content {
    padding: 16px 8px;
}
.logo {
    padding-top: 8px;
}
.minnie-home {
    &__title,
    &__desc {
        font-weight: 400;
        line-height: 1;
        user-select: none;
    }
    &__image {
        display: inline-block;
        vertical-align: middle;
        height: 18px;
        width: 18px;
    }
    &__title {
        padding: 8px 8px 0 8px;
        display: flex;
        align-items: center;
        font-size: 18px;
        margin-bottom: 16px;
    }
    &__text {
        margin-left: 8px;
    }
    &__desc {
        padding: 0 8px;
        color: #888;
        font-size: 12px;
        margin-bottom: 24px;
    }
    &-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        color: #555;
        font-size: 14px;
    }
}
</style>
