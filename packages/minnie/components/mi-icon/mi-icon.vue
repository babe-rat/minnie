<template>
    <text
        :class="['mi-icon', 'mi-icon--set', `mi-icon-${name}`]"
        :style="iconStyle"
        @click="handleClick"
    ></text>
</template>

<script>
import props from './props'
import getScale from '../utils/getScale'

/**
 * mi-icon
 * 图标
 */
export default {
    mixins: [props],

    computed: {
        iconStyle() {
            const { size, color } = this
            return {
                'font-size': getScale(size),
                color,
            }
        },
    },

    methods: {
        handleClick() {
            this.$emit('click')
        },
    },
}
</script>

<style lang="scss">
@import '@baberat/minnie-icons/dist/css/minnie-icons.css';

.mi-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: inherit;
    vertical-align: bottom;
}
</style>
s
