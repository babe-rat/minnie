<template>
    <demo-section>
        <demo-block title="基础使用">
            <mi-swiper :list="list1">测试</mi-swiper>
        </demo-block>
    </demo-section>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            list1: [
                'https://cdn.uviewui.com/uview/swiper/swiper1.png',
                'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                'https://cdn.uviewui.com/uview/swiper/swiper3.png',
            ],
        }
    },
    methods: {},
}
</script>
