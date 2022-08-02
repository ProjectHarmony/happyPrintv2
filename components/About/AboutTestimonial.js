/* eslint-disable */
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

export default function AboutTestimonial() {
    return (
        <>
            {/* <!-- testimonial area start --> */}
            <div className="testimonial-area testimonial-area__2 testimonial-area__3 pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="testimonial__3 owl-carousel text-center position-relative">
                                <Swiper
                                    spaceBetween={2}
                                    slidesPerView={1}
                                    autoplaydisableoninteraction={"false"}
                                    loop={true}
                                    className="custom-class"
                                    navigation={{
                                        prevEl: ".custom-prev",
                                        nextEl: ".custom-next",
                                    }}
                                    // scrollbar={{ draggable: true }}
                                >

                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70">
                                                <img src="/images/icons/t-quote-2.png" alt="" />
                                            </div>
                                            <div className="testimonial__2--content testimonial__2--content--2">
                                                <p>
                                            Total solution in bringing out the Brilliance of Life ... We, at HappyPrint, got you covered.</p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="/images/employees/Mam Juwela2.jpg" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Juwella Ann A. Samaco</h4>
                                                    <span className="designation">CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="owl-nav">
                                    <div className="owl-prev custom-prev"><i className="fal fa-long-arrow-left"></i></div>
                                    <div className="owl-next custom-next"><i className="fal fa-long-arrow-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- testimonial area end -->    */}
        </>
    )
}
