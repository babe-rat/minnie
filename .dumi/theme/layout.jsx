import React, { useEffect, useState } from 'react'
import Layout from '@minnie/dumi-theme/src/layout'
import Device from '../components/Device'
import '../style/layout.less'

const { NODE_ENV } = process.env
let mobileOrigin = ''
if (NODE_ENV === 'development') {
    mobileOrigin = 'http://localhost:8080'
} else {
    mobileOrigin = '/minnie/mobile'
}
// 首页
const HOME = '/components/quickstart'
const filter = [HOME]

export default ({ children, ...props }) => {
    const [path, setPath] = useState('')
    const { pathname } = props.location

    useEffect(() => {
        if (pathname === '/') {
            props.history.replace(HOME)
        }
    }, [])

    useEffect(() => {
        let path = ''
        if (pathname.includes('/components/') && !filter.includes(pathname)) {
            const components = pathname.replace('/components/', '')
            path = `/#/pages/${components}/index`
        }
        setPath(path)
    }, [pathname])

    return (
        <Layout {...props}>
            <div className="__dumi-default-mobile-content">
                <article>{children}</article>
                <Device
                    className="__dumi-default-mobile-content-device"
                    url={`${mobileOrigin}${path}`}
                />
            </div>
        </Layout>
    )
}
