export function showToast(options) {
    uni.showToast(options)
}

export default {
    text(title) {
        showToast({ title, icon: 'none' })
    },

    success({ title, success }) {
        showToast({ icon: 'success', mask: true, title, success })
    },
}
