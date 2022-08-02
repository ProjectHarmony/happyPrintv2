import React from 'react'

export default function ProjectDetailsBreadCrumb() {
    return (
        <>
            {/* <!-- breadcrumb section start --> */}
            <section className="breadcrumb-section pt-180 pb-180 bg_img" style={{"background":"url(/images/projectdetails/CIMB/cimb2.png)","backgroundRepeat":"no-repeat","backgroundSize":"100%","objectFit":'cover'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 d-flex pr-0">
                            <div className="breadcrumb-text">
                                <h2 className="breadcrumb-text__title">
                            CIMB
                                </h2>
                                {/* <ul className="breadcrumb-text__nav">
                                    <li><a href="index.html">Home</a></li>
                                    <li>-</li>
                                    <li>project details</li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumb section end -->    */}
        </>
    )
}
