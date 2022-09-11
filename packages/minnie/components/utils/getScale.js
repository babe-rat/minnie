export default function getScale(val) {
    if (!val || isNaN(Number(val))) {
        return val
    }
    return `${val}px`
}
