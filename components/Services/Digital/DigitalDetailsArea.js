/* eslint-disable */
import React from 'react'
import { Container, Card, Row, Text, Col, Spacer, Image } from "@nextui-org/react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { ReactPhotoCollage } from "react-photo-collage";
export default function AdvertisingDetailsArea() {
    const settingInvite = {
        width: '100%',
        height: ['150px', '270px'],
        layout: [1, 4],
        photos: [
      
          { source: "/images/services/invitations/invite1.jpg" },
          { source: "/images/services/invitations/invite2.jpg" },
          { source: "/images/services/invitations/invite3.jpg" },
          { source: "/images/services/invitations/invite4.jpg" },
       
          
        ],
        showNumOfRemainingPhotos: true
      };

      const settingBC = {
        width: '100%',
        height: ['150px', '270px'],
        layout: [1, 4],
        photos: [
      
          { source: "/images/services/businesscard/bc1.jpg" },
          { source: "/images/services/businesscard/bc2.jpg" },
          { source: "/images/services/businesscard/bc3.jpg" },
          { source: "/images/services/businesscard/bc4.jpg" },
       
          
        ],
        showNumOfRemainingPhotos: true
      };

      const settingID = {
        width: '100%',
        height: ['150px', '270px'],
        layout: [1, 4],
        photos: [
      
          { source: "/images/services/id/id1.jpg" },
          { source: "/images/services/id/id2.jpg" },
          { source: "/images/services/id/id3.jpg" },
          { source: "/images/services/id/id4.jpg"},
       
          
        ],
        showNumOfRemainingPhotos: true
      };

      const settingLanyard = {
        width: '100%',
        height: ['150px', '270px'],
        layout: [1, 4],
        photos: [
      
          { source: "/images/services/lanyards/lanyards1.jpg" },
          { source: "/images/services/lanyards/lanyards2.jpg" },
          { source: "/images/services/lanyards/lanyards3.jpg" },
         
       
          
        ],
        showNumOfRemainingPhotos: true
      };
      const settingRibbon = {
        width: '100%',
        height: ['150px', '270px'],
        layout: [1, 4],
        photos: [
      
          { source: "/images/services/ribbon/ribbon1.jpg" },
          { source: "/images/services/ribbon/ribbon2.jpg"  },
          { source: "/images/services/ribbon/ribbon3.jpg"  },
         
       
          
        ],
        showNumOfRemainingPhotos: true
      };

      const settingDoorhang = {
        width: '100%',
        height: ['150px', '270px'],
        layout: [1, 4],
        photos: [
      
          { source: "/images/services/doorhang/doorhang1.jpg" },
          { source: "/images/services/doorhang/doorhang2.jpg"  },
          { source: "/images/services/doorhang/doorhang3.jpg"  },
         
       
          
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
                         Invitations
                            </Text>
                            <Image src="/images/subservices/digital/invitations.jpg" alt="blog image"  width={300}
                        height={400} />
                            </Card.Body>
                        </Card>
                     
                        </FrontSide>
                        <BackSide
                        style={{
                            backgroundColor: '#0072f5',borderRadius:'25px'
                          }}>
                                 <ReactPhotoCollage {...settingInvite} />
                    {/* <Text h6 size={25} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                    What's more important than letting your guests know they're at the right venue, or where they???re seated? An eye-catching sign or seat plan is really important.
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
                            Business Card
                            </Text>
                            <Image src="/images/subservices/digital/bcard.png" alt="blog image"  width={300}
                        height={400} />
                            </Card.Body>
                        </Card>
                     
                     
                        </FrontSide>
                        <BackSide
                        style={{  backgroundColor: '#f5a524',borderRadius:'25px'}}>
                                                 <ReactPhotoCollage {...settingBC} />
                        {/* <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                        Various finishing options to choose from to make your business card stand out.
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
                        backgroundColor: '#37b546',borderRadius:'25px'
                        }}
                        >
                        <Card css={{ $$cardColor: '$colors$#37b546' }}>
                        <Card.Body style={{textAlign:"center"}}>
                        <Text h6 size={30} color="white" css={{ m: 0 }}>
                        PVC ID
                        </Text>
                        <Image src="/images/subservices/digital/pvc.png" alt="blog image"  width={300}
                        height={400} />
                        </Card.Body>
                        </Card>


                        </FrontSide>
                        <BackSide
                        style={{  backgroundColor: '#37b546',borderRadius:'25px'}}>
                              <ReactPhotoCollage {...settingID} />
                     {/* <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                    Bring your printed ID is as easy as 1-2-3.
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
                       Lanyards
                            </Text>
                            <Image src="/images/subservices/digital/lanyard.png" alt="blog image"  width={300}
                            height={400} />
                            </Card.Body>
                            </Card>


                            </FrontSide>
                            <BackSide
                            style={{  backgroundColor: '#fd4a36',borderRadius:'25px'}}>
                                  <ReactPhotoCollage {...settingLanyard} />
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
                       Ribbons
                            </Text>
                            <Image src="/images/subservices/digital/ribbon.jpg" alt="blog image"  width={300}
                            height={400} />
                            </Card.Body>
                            </Card>


                            </FrontSide>
                            <BackSide
                            style={{  backgroundColor: '#89b7e2',borderRadius:'25px'}}>
                                      <ReactPhotoCollage {...settingRibbon} />
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
                            Door Hangs
                            </Text>
                            <Image src="/images/subservices/digital/doorhangs.png" alt="blog image"  width={300}
                            height={400} />
                            </Card.Body>
                            </Card>


                            </FrontSide>
                            <BackSide
                            style={{  backgroundColor: '#8B4513',borderRadius:'25px'}}>
                                     <ReactPhotoCollage {...settingDoorhang} />
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
