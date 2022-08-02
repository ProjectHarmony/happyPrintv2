/* eslint-disable */
import React from 'react'
import Link from 'next/link'
export default function HomeOneFeature() {
    return (
        <>
            {/* <!-- feature section start --> */}
            <section className="feature-area pt-120">
                <div className="container">
                    
                    <div className="row justify-content-center" >
                        <div className="col-xl-8 text-center">
                            <div className="section-header mb-50">
                                <h4 className="sub-heading mb-25">
                                    <span><img src="/images/shape/heading-shape-1.png" className="mr-5" alt="" /></span>
                                    Company Feature
                                    <span><img src="/images/shape/heading-shape-2.png" className="ml-5" alt="" /></span>
                                </h4>
                                {/* <h2 className="section-title">Services</h2> */}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-none-30">
                    <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                    <Link href="/advertising">
                    <div className="feature-item" style={{cursor:'pointer',backgroundColor:'#37B546',borderRadius:'20px'}}>
                                <div className="feature-item__icon feature-item__icon--1" style={{backgroundColor:'white'}}>
                                    <img src="/images/icons/ads.png" alt="" />
                                </div>
                                <div className="feature-item__content">
                                    <h4 className="feature-item__title" style={{color:'white'}}>Advertising / Fabrication</h4>
                                    <p style={{color:'white'}}>We serve to install signages within your building or stores.</p>
                                </div>
                            </div>
                            </Link>
                        
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                        <Link href="/graphics">
                        <div className="feature-item" style={{cursor:'pointer',backgroundColor:'#81b4e4',borderRadius:'20px'}}>
                        <div className="feature-item__icon feature-item__icon--1" style={{backgroundColor:'white'}}>
                                <img src="/images/icons/graphics.png" alt="" />
                                </div>
                                <div className="feature-item__content">
                                    <h4 className="feature-item__title" style={{color:'white'}}>Graphic Design</h4>
                                    <p style={{color:'white'}}>Cater to create visual content for your optimal user experience.</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                        <Link href="/personal">
                        <div className="feature-item" style={{cursor:'pointer',backgroundColor:'#f27474',borderRadius:'20px'}}>
                        <div className="feature-item__icon feature-item__icon--1" style={{backgroundColor:'white'}}>
                                <img src="/images/icons/c-4.png" alt="" />
                                </div>
                                <div className="feature-item__content">
                                    <h4 className="feature-item__title" style={{color:'white'}}>Personalize</h4>
                                    <p style={{color:'white'}}> Turn your custom design printing service turn your ideas into reality,</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                       
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                        <Link href="/digital">
                        <div className="feature-item" style={{cursor:'pointer',backgroundColor:'#FFB400',borderRadius:'20px'}}>
                        <div className="feature-item__icon feature-item__icon--1" style={{backgroundColor:'white'}}>
                                <img src="/images/icons/branding.png" alt="" />
                                </div>
                                <div className="feature-item__content">
                                    <h4 className="feature-item__title" style={{color:'white'}}>Digital Printing</h4>
                                    <p style={{color:'white'}}>Digital service that can make your brand stand out and recongnizable to customers</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                        <Link href="/largeformat">
                        <div className="feature-item" style={{cursor:'pointer',backgroundColor:'#63d1e7',borderRadius:'20px'}}>
                        <div className="feature-item__icon feature-item__icon--1" style={{backgroundColor:'white'}}>
                                    <img src="/images/icons/largeformat.png" alt="" />
                                </div>
                                <div className="feature-item__content">
                                    <h4 className="feature-item__title" style={{color:'white'}}>Large Format Printing</h4>
                                    <p style={{color:'white'}}>Allows you to print wide format printing such as posters, banners, store displays.</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                        <Link href="/offset">
                        <div className="feature-item" style={{cursor:'pointer',backgroundColor:'#e4be62',borderRadius:'20px'}}>
                        <div className="feature-item__icon feature-item__icon--1" style={{backgroundColor:'white'}}>
                                <img src="/images/icons/texttile.png" alt="" />
                                </div>
                                <div className="feature-item__content">
                                    <h4 className="feature-item__title" style={{color:'white'}}>Offset Printing</h4>
                                    <p style={{color:'white'}}>Have an ideal printing process that meets your requirements for your your large volume of projects.</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                        <Link href="/giveaway">
                        <div className="feature-item" style={{cursor:'pointer',backgroundColor:'#ef5b4b',borderRadius:'20px'}}>
                        <div className="feature-item__icon feature-item__icon--1" style={{backgroundColor:'white'}}>
                                <img src="/images/icons/giveaway.png" alt="" />
                                </div>
                                <div className="feature-item__content">
                                    <h4 className="feature-item__title" style={{color:'white'}}>Corporate Giveaways</h4>
                                    <p style={{color:'white'}}>Scale your corporate gifting programs for your employees, clients and partners.</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                        <Link href="/texttile">
                        <div className="feature-item" style={{cursor:'pointer',backgroundColor:'#57c164',borderRadius:'20px'}}>
                        <div className="feature-item__icon feature-item__icon--1" style={{backgroundColor:'white'}}>
                                <img src="/images/icons/offset.png" alt="" />
                                </div>
                                <div className="feature-item__content">
                                    <h4 className="feature-item__title" style={{color:'white'}}>Textile Printing</h4>
                                    <p style={{color:'white'}}>Apply color on your fabric for your required pattern and design, widely used for the printing and packaging industry</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- feature section end -->   */}
        </>
    )
}
