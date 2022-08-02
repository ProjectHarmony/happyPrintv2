/* eslint-disable */
import React from 'react'
import { Container, Card, Row, Text, Col, Spacer, Image } from "@nextui-org/react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { ReactPhotoCollage } from "react-photo-collage";
export default function GiveawayDetailsArea() {
    const settingUmbrella = {
        width: '100%',
        height: ['150px', '270px'],
        layout: [1, 4],
        photos: [
      
          { source: "/images/services/umbrella/umbrella1.jpg" },
          { source: "/images/services/umbrella/umbrella2.jpg" },
          { source: "/images/services/umbrella/umbrella3.jpg" },
    
       
          
        ],
        showNumOfRemainingPhotos: true
      };

      const settingMugs = {
        width: '100%',
        height: ['150px', '270px'],
        layout: [1, 4],
        photos: [
      
          { source: "/images/services/mugs/mugs1.jpg" },
          { source: "/images/services/mugs/mugs2.jpg" },
          { source: "/images/services/mugs/mugs3.jpg" },
       
       
          
        ],
        showNumOfRemainingPhotos: true
      };

      const settingBaller = {
        width: '100%',
        height: ['150px', '270px'],
        layout: [1, 4],
        photos: [
      
          { source: "/images/services/baller/baller1.jpg" },
          { source: "/images/services/baller/baller2.jpg" },
          { source: "/images/services/baller/baller3.jpg" },

       
          
        ],
        showNumOfRemainingPhotos: true
      };

      const settingEcobag = {
        width: '100%',
        height: ['150px', '270px'],
        layout: [1, 4],
        photos: [
      
          { source: "/images/services/ecobag/ecobag1.jpg" },
          { source: "/images/services/ecobag/ecobag2.jpg" },
          { source: "/images/services/ecobag/ecobag3.jpg" },

       
          
        ],
        showNumOfRemainingPhotos: true
      };

      const settingPlanner = {
        width: '100%',
        height: ['150px', '270px'],
        layout: [1, 4],
        photos: [
      
          { source: "/images/services/planner/planner1.jpg" },
          { source: "/images/services/planner/planner2.jpg" },
          { source: "/images/services/planner/planner3.jpg" },

       
          
        ],
        showNumOfRemainingPhotos: true
      };

      const settingKeychain = {
        width: '100%',
        height: ['150px', '270px'],
        layout: [1, 4],
        photos: [
      
          { source: "/images/services/keychain/keychain1.jpg" },
          { source: "/images/services/keychain/keychain2.jpg" },
          { source: "/images/services/keychain/keychain3.jpg" },

       
          
        ],
        showNumOfRemainingPhotos: true
      };
    return (
        <>
            {/* <!-- details content start --> */}
            <div className="details-content-area pt-125 pb-125">
                <div className="container">
                    <div className="row">

                  
                    <div className="cat" style={{  textAlign: 'center', marginBottom:'50px'}}>
                                        <h1 >Happy Print Products</h1>
                                    </div>
                                   
                        <div className="col-xl-4">
                        <Flippy
                        flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                        >
                        <FrontSide
                          style={{
                            backgroundColor: '#0072f5',borderRadius:'25px'
                          }}
                        >
                          <Card css={{ $$cardColor: '$colors$primary' }}>
                            <Card.Body style={{textAlign:"center"}}>
                            <Text h6 size={30} color="white" css={{ m: 0 }}>
                            Umbrella
                            </Text>
                            <Image src="/images/subservices/giveaway/umbrella.jpg" alt="blog image"  width={300}
                        height={400} />
                            </Card.Body>
                        </Card>
                     
                        </FrontSide>
                        <BackSide
                        style={{
                            backgroundColor: '#0072f5',borderRadius:'25px'
                          }}>
                                   <ReactPhotoCollage {...settingUmbrella} />
                      {/* <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                      Stand out from the crowd with a logo that fits your brand personality.
                                                    </Text> */}
                        </BackSide>
                    </Flippy>
                     
                    
                        </div>
                        <div className="col-xl-4">

                                <Flippy
                        flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                        >
                        <FrontSide
                          style={{
                            backgroundColor: '#f5a524',borderRadius:'25px'
                          }}
                        >
                           <Card css={{ $$cardColor: '$colors$warning' }}>
                            <Card.Body style={{textAlign:"center"}}>
                            <Text h6 size={30} color="white" css={{ m: 0 }}>
                            Mugs
                            </Text>
                            <Image src="/images/subservices/giveaway/mugs1.jpg" alt="blog image"  width={300}
                        height={400} />
                            </Card.Body>
                        </Card>
                     
                     
                        </FrontSide>
                        <BackSide
                        style={{  backgroundColor: '#f5a524',borderRadius:'25px'}}>

                        <ReactPhotoCollage {...settingMugs} />
                        {/* <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                        You can highlight your brand with your special letterhead that includes your business information.
                                                    </Text> */}
                        </BackSide>
                    </Flippy>
                   
                    
                        </div>


                        <div className="col-xl-4">

                        <Flippy
                        flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                        >
                        <FrontSide
                        style={{
                        backgroundColor: '#dc3545',borderRadius:'25px'
                        }}
                        >
                        <Card css={{ $$cardColor: '$colors$#dc3545' }}>
                        <Card.Body style={{textAlign:"center"}}>
                        <Text h6 size={30} color="white" css={{ m: 0 }}>
                       Ballers
                        </Text>
                        <Image src="/images/subservices/giveaway/baller1.jpg" alt="blog image"  width={300}
                        height={400} />
                        </Card.Body>
                        </Card>


                        </FrontSide>
                        <BackSide
                        style={{  backgroundColor: '#dc3545',borderRadius:'25px'}}>
                              <ReactPhotoCollage {...settingBaller} />
                          {/* <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                          Special photo collage with the bonus to be able to see a picture when you look at it from some distance.
                                                    </Text> */}
                        </BackSide>
                        </Flippy>


                        </div>
                     

                        <div className="col-xl-4" style={{marginTop:'40px'}}>

                                <Flippy
                                flipOnHover={true} // default false
                                flipOnClick={true} // default false
                                flipDirection="horizontal" // horizontal or vertical
                                // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                // if you pass isFlipped prop component will be controlled component.
                                // and other props, which will go to div
                                // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                                >
                                <FrontSide
                                style={{
                                backgroundColor: '#fd4a36',borderRadius:'25px'
                                }}
                                >
                                <Card css={{ $$cardColor: '$colors$#fd4a36' }}>
                                <Card.Body style={{textAlign:"center"}}>
                                <Text h6 size={30} color="white" css={{ m: 0 }}>
                                Eco bag
                                </Text>
                                <Image src="/images/subservices/giveaway/ecobag.jpg" alt="blog image"  width={300}
                                height={400} />
                                </Card.Body>
                                </Card>


                                </FrontSide>
                                <BackSide
                                style={{  backgroundColor: '#fd4a36',borderRadius:'25px'}}>
                                    <ReactPhotoCollage {...settingEcobag} />
                                {/* <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                                Ensures you that your custom made requests of your lanyards will be delivered to you at the right quality, always at the right time.
                                                        </Text> */}
                                </BackSide>
                                </Flippy>


                                </div>

                                <div className="col-xl-4" style={{marginTop:'40px'}}>

                                <Flippy
                                flipOnHover={true} // default false
                                flipOnClick={true} // default false
                                flipDirection="horizontal" // horizontal or vertical
                                // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                // if you pass isFlipped prop component will be controlled component.
                                // and other props, which will go to div
                                // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                                >
                                <FrontSide
                                style={{
                                backgroundColor: '#89b7e2',borderRadius:'25px'
                                }}
                                >
                                <Card css={{ $$cardColor: '$colors$#89b7e2' }}>
                                <Card.Body style={{textAlign:"center"}}>
                                <Text h6 size={30} color="white" css={{ m: 0 }}>
                                Planner
                                </Text>
                                <Image src="/images/subservices/giveaway/planner.jpg" alt="blog image"  width={300}
                                height={400} />
                                </Card.Body>
                                </Card>


                                </FrontSide>
                                <BackSide
                                style={{  backgroundColor: '#89b7e2',borderRadius:'25px'}}>
                                        <ReactPhotoCollage {...settingPlanner} />
                                {/* <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                                Elevate your events/activity with the elegant personalize ribbons.
                                                        </Text> */}
                                </BackSide>
                                </Flippy>


                                </div>

                                <div className="col-xl-4" style={{marginTop:'40px'}}>

                                <Flippy
                                flipOnHover={true} // default false
                                flipOnClick={true} // default false
                                flipDirection="horizontal" // horizontal or vertical
                                // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                // if you pass isFlipped prop component will be controlled component.
                                // and other props, which will go to div
                                // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                                >
                                <FrontSide
                                style={{
                                backgroundColor: '#8B4513',borderRadius:'25px'
                                }}
                                >
                                <Card css={{ $$cardColor: '$colors$#8B4513' }}>
                                <Card.Body style={{textAlign:"center"}}>
                                <Text h6 size={30} color="white" css={{ m: 0 }}>
                                Keychains
                                </Text>
                                <Image src="/images/subservices/giveaway/keychain.jpg" alt="blog image"  width={300}
                                height={400} />
                                </Card.Body>
                                </Card>


                                </FrontSide>
                                <BackSide
                                style={{  backgroundColor: '#8B4513',borderRadius:'25px'}}>
                                        <ReactPhotoCollage {...settingKeychain} />
                                {/* <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                                Door hangers are full of untapped marketing potential. 
                                                        </Text> */}
                                </BackSide>
                                </Flippy>


                                </div>
                    </div>
                    {/* <div className="row mt-40">
                        <div className="col-xl-12">
                            <div className="details-content details-content__project">
                                <h2 className="details-content__title mb-20">Project Description</h2>
                                <p>Maecenas nise vestibulum parturient habitasse. Aliquam pellentesque fermentum. Sodales luctus
                                    venenatis dis curae
                                    senectus montes tortor morbi cubilia congue. Mus imperdiet turpis in augue placerat maecenas
                                    natoque sollicitudin at
                                    quam adipiscing integer dis ads se purus sollicitudin dapibus et vivamus pharetra sit
                                    integer dictum in dise natoque a
                                    mus quis in. Facilisis inceptos nec, potenti nostra aenean lacinia varius semper ant nullam
                                    nulla primis placerat
                                    facilisis. Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna
                                    potenti cum vestibulum cras.
                                    Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque
                                    cras posuere tempor facilisi
                                    habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum
                                    fringilla facilisi volutpat fusce
                                    pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla
                                    venenatis, cursus fermentum
                                    netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra
                                    curabitur nisi vel sollicitudin
                                    dictum natoque ante aenean elementum curae malesuada ullamcorper. vivamus nonummy nisl
                                    posuere rutrum</p>
                                <div className="content mt-20">
                                    <p>Duis porttitor sem sit ullamcorper massa lorem platea ultricies sollicitudin. Habitant
                                        cubilia varius platea nam lorem
                                        cum aenean sociosqu and per bibendum Arcu accumsan eleifend. Ipsum nam condimentum
                                        lobortis eu morbi a quis ipsum est
                                        bibendum mine vulputate hymenaeos taciti odio nullam ligula ultrices tristique viverra
                                        laoreet sapien curae;.
                                        Sollicitudin etiam elit torquent. Purus nascetur dis augue non iaculis ullamcorper lacus
                                        met quam commodo hendrerit
                                        lobortis vel. Sagittis felis iaculis mauris luctus</p>
                                    <h2 className="details-content__title mt-30 mb-35">Working Process</h2>
                                </div>
                                <div className="row mt-none-30">
                                    <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                                        <div className="wp-box">
                                            <div className="wp-box__icon wp-box__icon--1 mb-25">
                                                <img src="/images/icons/w-p-1.png" alt=""/>
                                            </div>
                                            <div className="wp-box__content">
                                                <h4 className="wp-box__title wp-box__title--2">Booking Online</h4>
                                                <p>God They moving an firmament seed over herb gathering multis ply morning
                                                    fruitful</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                                        <div className="wp-box">
                                            <div className="wp-box__icon wp-box__icon--2 mb-25">
                                                <img src="/images/icons/w-p-2.png" alt=""/>
                                            </div>
                                            <div className="wp-box__content">
                                                <h4 className="wp-box__title wp-box__title--2">Received Work</h4>
                                                <p>God They moving an firmament seed over herb gathering multis ply morning
                                                    fruitful</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                                        <div className="wp-box">
                                            <div className="wp-box__icon wp-box__icon--3 mb-25">
                                                <img src="/images/icons/w-p-3.png" alt=""/>
                                            </div>
                                            <div className="wp-box__content">
                                                <h4 className="wp-box__title wp-box__title--2">Satisfied Design</h4>
                                                <p>God They moving an firmament seed over herb gathering multis ply morning
                                                    fruitful</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                                        <div className="wp-box">
                                            <div className="wp-box__icon wp-box__icon--4 mb-25">
                                                <img src="/images/icons/w-p-4.png" alt=""/>
                                            </div>
                                            <div className="wp-box__content">
                                                <h4 className="wp-box__title wp-box__title--2">Start Printing</h4>
                                                <p>God They moving an firmament seed over herb gathering multis ply morning
                                                    fruitful</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-10">
                                    <div className="col-xl-6 col-lg-6 col-md-6 d-flex mt-30">
                                        <div className="project-item">
                                            <div className="project-item__thumb project-item__thumb--big">
                                                <img src="/images/project/p-13.jpeg" alt=""/>
                                            </div>
                                            <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                                <a href="project-details.html" className="project-item__link">
                                                    <i className="far fa-arrow-right"></i>
                                                </a>
                                                <div className="project-item__content">
                                                    <h5 className="project-item__subtitle"><span></span> Book Print</h5>
                                                    <h4 className="project-item__title">Megazine Cover</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 d-flex mt-30">
                                        <div className="project-item">
                                            <div className="project-item__thumb project-item__thumb--big">
                                                <img src="/images/project/p-14.jpeg" alt=""/>
                                            </div>
                                            <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                                <a href="project-details.html" className="project-item__link">
                                                    <i className="far fa-arrow-right"></i>
                                                </a>
                                                <div className="project-item__content">
                                                    <h5 className="project-item__subtitle"><span></span> Book Print</h5>
                                                    <h4 className="project-item__title">Megazine Cover</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 d-flex mt-30">
                                        <div className="project-item">
                                            <div className="project-item__thumb project-item__thumb--big">
                                                <img src="/images/project/p-15.jpeg" alt=""/>
                                            </div>
                                            <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                                <a href="project-details.html" className="project-item__link">
                                                    <i className="far fa-arrow-right"></i>
                                                </a>
                                                <div className="project-item__content">
                                                    <h5 className="project-item__subtitle"><span></span> Book Print</h5>
                                                    <h4 className="project-item__title">Megazine Cover</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 d-flex mt-30">
                                        <div className="project-item">
                                            <div className="project-item__thumb project-item__thumb--big">
                                                <img src="/images/project/p-16.jpeg" alt=""/>
                                            </div>
                                            <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                                <a href="project-details.html" className="project-item__link">
                                                    <i className="far fa-arrow-right"></i>
                                                </a>
                                                <div className="project-item__content">
                                                    <h5 className="project-item__subtitle"><span></span> Book Print</h5>
                                                    <h4 className="project-item__title">Megazine Cover</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <!-- details content end -->    */}
        </>
    )
}
