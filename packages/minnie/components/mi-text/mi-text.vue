<template>
    <view
        :class="[
            'mi-text',
            { 'items-end': mode === MODE.price, 'mi-text-preview': mode === MODE.preview },
        ]"
        @click="handleClick"
    >
        <!-- 金额图标 -->
        <text v-if="mode === MODE.price" class="mi-text__price" :style="priceStyle">￥</text>
        <text class="mi-text__value" :style="textStyle" mode="price">{{ value }}</text>
        <!-- 排序 -->
        <view class="mi-text__sorter" v-if="mode === MODE.sorter">
            <!-- 上升 -->
            <mi-icon
                v-if="!sorter || sorter === SortDirections.ascend"
                class="mi-text__sorter--up"
                name="menu-up"
                :size="sorterIconSize"
                :color="sorter === SortDirections.ascend ? sorterIconActiveColor : sorterIconColor"
            ></mi-icon>
            <!-- 下降 -->
            <mi-icon
                v-if="!sorter || sorter === SortDirections.descend"
                class="mi-text__sorter--down"
                name="menu-down"
                :size="sorterIconSize"
                :color="sorter === SortDirections.descend ? sorterIconActiveColor : sorterIconColor"
            ></mi-icon>
        </view>
    </view>
</template>

<script>
import dayjs from 'dayjs'
import props from './props'
import isString from '../utils/isString'
import getScale from '../utils/getScale'
import toast from '../utils/toast'
import priceFormat from '../utils/priceFormat'
import { MI_PRIMARY_COLOR } from '../config/mi-constant'
import { MODE, defaultDateFormat, SortDirections, defaultColor } from './constant'

/**
 * mi-text
 * 文本
 */
export default {
    mixins: [props],

    data() {
        return {
            MODE,
            SortDirections,
            sorter: undefined,
        }
    },

    computed: {
        value() {
            const { mode, text } = this
            if (mode === MODE.date) {
                return this.getDateByFormat(text)
            }
            if (mode === MODE.price) {
                return priceFormat(text, 2)
            }
            return this.text
        },

        innerMode() {
            const { mode } = this
            return mode === MODE.date ? undefined : mode
        },

        textStyle() {
            const { mode, color, size, bold, wordWrap } = this
            return {
                'font-weight': bold ? 'bold' : 'normal',
                'font-size': getScale(size),
                'flex-wrap': wordWrap,
                color: color === defaultColor && mode === MODE.preview ? MI_PRIMARY_COLOR : color,
            }
        },

        priceStyle() {
            const { textStyle, priceIconSize } = this
            return {
                ...textStyle,
                'font-size': getScale(priceIconSize),
            }
        },
    },

    methods: {
        getDateByFormat(text) {
            const { format } = this
            if (!format || isString(format)) {
                const isSecond = text.length === 10
                const fn = isSecond ? dayjs.unix : dayjs
                return fn(Number(text)).format(format || defaultDateFormat)
            }
            return text
        },

        handleClick() {
            const { mode, sorter, url } = this
            let res
            if (mode === MODE.sorter) {
                const strategies = {
                    undefined: SortDirections.ascend,
                    [SortDirections.ascend]: SortDirections.descend,
                    [SortDirections.descend]: undefined,
                }
                this.sorter = strategies[sorter]
                res = this.sorter
            }
            if (mode === MODE.preview) {
                this.preview(url)
                return
            }
            this.$emit('click', res)
        },

        preview(url) {
            if (!url) {
                return
            }
            uni.showLoading({
                title: '加载中',
                mask: true,
            })
            uni.downloadFile({
                url,
                success(res) {
                    uni.openDocument({
                        filePath: res.tempFilePath,
                        fail() {
                            toast.text('预览失败')
                        },
                        complete() {
                            uni.hideLoading()
                        },
                    })
                },
                fail() {
                    uni.hideLoading()
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../theme.scss';
.mi-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    flex: 1;
    width: 100%;
    line-height: $minnie-line-height;
    &__value {
        font-size: 14px;
        display: flex;
        flex-direction: row;
        color: #606266;
        flex-wrap: wrap;
        text-overflow: ellipsis;
        align-items: center;
    }
    &__price {
        font-size: 14px;
        color: #606266;
    }
    &__sorter {
        display: flex;
        flex-direction: column;
        margin-left: 2px;
    }
}
.mi-text__sorter--up + .mi-text__sorter--down {
    margin-top: -0.7em;
}
.items-end {
    align-items: flex-end;
}
.ascend {
}
</style>
