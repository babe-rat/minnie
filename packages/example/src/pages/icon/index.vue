<template>
    <demo-section>
        <demo-block title="基础使用">
            <mi-icon name="menu-up" />
            <mi-icon name="menu-up" size="24" />
            <mi-icon name="menu-up" size="24" color="#cb6586" />
        </demo-block>
        <demo-block title="图标列表（点击复制）">
            <u-grid class="icons" @click="handleClick">
                <u-grid-item class="icon" v-for="icon in icons" :key="icon">
                    <mi-icon :name="icon" :size="24"></mi-icon>
                    <text class="grid-text">{{ icon }}</text>
                </u-grid-item>
            </u-grid>
        </demo-block>
    </demo-section>
</template>

<script>
import icons from '@baberat/minnie-icons'

export default {
    data() {
        return {
            icons,
        }
    },

    methods: {
        handleClick(index) {
            const name = this.icons[index]
            const componentEle = `<mi-icon name="${name}"/>`
            uni.setClipboardData({
                data: componentEle,
                showToast: false,
                success() {
                    uni.showToast({ title: `${componentEle} copied`, icon: 'none' })
                },
            })
        },
    },
}
</script>

<style lang="scss">
.icons {
    color: #555;
    .icon {
        padding: 10px 0;
    }
}
.grid-text {
    width: 100%;
    font-size: 3.2vw;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
}
</style>
