import React from 'react'
import Layout1 from '../layouts/Layout1'
import GiveawayDetailsArea from '../components/Services/Giveaway/GiveawayDetailsArea'

import GiveawayDetailsBreadCrumb from '../components/Services/Giveaway/GiveawayDetailsBreadCrumb'

export default function ServiceDetails() {
    return (
        <>
            <Layout1>
                <GiveawayDetailsBreadCrumb />
                <GiveawayDetailsArea />
            </Layout1>
        </>
    )
}
