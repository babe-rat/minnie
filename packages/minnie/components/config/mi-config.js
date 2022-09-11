import { MI_PRIMARY_COLOR } from './ham-constant'

/**
 * config.request [Function] 请求库
 * config.primaryColor [String] 主题色
 */
let config = {
    primaryColor: MI_PRIMARY_COLOR,
}

function setConfig(options = {}) {
    if (Object.prototype.toString.call(options) === '[object Object]') {
        config = { ...config, ...options }
    }
}

function getConfig(key) {
    return key ? config[key] : config
}

export default { setConfig, getConfig }
