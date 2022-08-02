import React from 'react'
import Layout1 from '../layouts/Layout1'
import TexttileDetailsBreadCrumb from '../components/Services/Textile/TexttileDetailsBreadCrumb'

import TexttileDetailsArea from '../components/Services/Textile/TexttileDetailsArea'

export default function ServiceDetails() {
    return (
        <>
            <Layout1>
                <TexttileDetailsBreadCrumb />
                <TexttileDetailsArea />
            </Layout1>
        </>
    )
}
