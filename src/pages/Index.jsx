import React, {Fragment, useEffect,} from "react";
import '../assets/css/main.css'
import Logo from '../assets/images/LOGOW.png'
import BlackProduct from '../assets/images/koufiyablack.jpeg'
import RedProduct from '../assets/images/koufiyared.jpeg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic1 from '../assets/images/pic1.png'
import pic2 from '../assets/images/pic2.png'
import pic3 from '../assets/images/pic3.png'
import pic4 from '../assets/images/pic4.png'
import pic5 from '../assets/images/pic5.png'
import pic6 from '../assets/images/pic6.png'
import pic7 from '../assets/images/pic7.png'
import pic8 from '../assets/images/pic8.png'
import pic9 from '../assets/images/pic9.png'

function Index(){
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the duration for each slide
  };
          return (
            
            <Fragment>

                <section className="background-image" >
                    <div style={{opacity:"90%" }} className="welcome-section welcome-rectangle" >
                      
                    <div style={{paddingTop:'200px',paddingLeft:'600px',width:'50%'}}>
                        <h1 style={{ fontFamily:'Helvetica, sans-serif',fontSize:'40px',textDecoration: 'none' ,letterSpacing:'20px'}}>WELCOME   TO</h1>
                      <div className="welcome-logo" > 
                        <img src={Logo} alt="KOUFIYA" style={{height:'200px', opacity:'100%' }} />
                      </div>
                    </div>
                    <div >
                      <div className="welcomemessage-rectangle" >
                        <p style={{color: "white",fontSize: "19px",fontFamily:'Helvetica, sans-serif',marginTop:'-11px'}} className="welcome-message">
                        WELCOME TO KOUFIYA – WHERE STYLE MEETS SOLIDARITY. OUR COLLECTION PAYS TRIBUTE TO PALESTINIAN HERITAGE. EACH PIECE ECHOES A UNIQUE NARRATIVE, WEAVING TRADITION AND ELEGANCE. EMBRACE A SYMBOL OF UNITY AND SUPPORT. WELCOME TO KOUFIYA, WHERE FASHION IS A STATEMENT AND EVERY THREAD TELLS A STORY.                        </p>
                      </div>
                    </div>
                    
                  </div>
                </section>
                
                <section style={{backgroundColor:"white" , height:'240px', backgroundSize: '100%',backgroundPosition:"relative"}}>
                <div className="welcome-logo" > 
                        <img src={Logo} alt="KOUFIYA" style={{height:'200px', opacity:'100%' }} />
                </div>
                </section>
                <section style={{backgroundColor:"#404040", height:'600px', backgroundSize: '100%',backgroundPosition:"relative"}}>
                <div>
                    <div style={{paddingLeft:'188px ',paddingRight:'188px',paddingTop:'70px ',paddingBottom:'0px',textAlign:'justify',color:'white',opacity:'70%',lineHeight:"30px"}}>
                      <div>
                        <h1 style={{fontFamily:'sans-serif',fontSize:'40px',fontWeight:'bold'}}>ABOUT US</h1>
                      </div>
                      <div>
                      <h3 style={{fontFamily:'sans-serif',fontSize:'18px',fontWeight:'normal'}}>
                      WELCOME TO KOUFIYA – A CULTURAL HAVEN WHERE TRADITION AND FASHION HARMONIZE. OUR JOURNEY BEGAN WITH A PASSION TO CELEBRATE AND PRESERVE PALESTINIAN HERITAGE THROUGH THE ARTISTRY OF KOUFIYAS. KOUFIYA ISN'T JUST AN ACCESSORY; IT'S A SYMBOL OF RESILIENCE, ECHOING STORIES OF GENERATIONS PAST. AT KOUFIYA, WE'RE MORE THAN CURATORS OF STYLE; WE'RE STORYTELLERS. OUR COMMITMENT EXTENDS BEYOND THREADS; IT'S A COMMITMENT TO EMPOWERING ARTISANS, FOSTERING CULTURAL PRIDE, AND STANDING IN SOLIDARITY WITH THE PALESTINIAN CAUSE. EVERY KOUFIYA IN OUR COLLECTION IS A TESTAMENT TO CRAFTSMANSHIP, BEARING THE SOUL OF PALESTINIAN HERITAGE. WE INVITE YOU TO EXPLORE OUR CURATED SELECTION, EACH PIECE REFLECTING THE TIMELESS ELEGANCE OF TRADITION. JOIN US IN THIS JOURNEY WHERE CULTURE IS CELEBRATED, STORIES ARE WOVEN, AND FASHION BECOMES A STATEMENT. WELCOME TO KOUFIYA – WHERE EVERY PIECE TELLS A STORY, AND EVERY STORY IS AN ODE TO OUR RICH CULTURAL TAPESTRY.</h3> 
                      </div>
                      
                    </div>
                  </div>
                </section>

                <section style={{backgroundColor:"black", height:'600px', backgroundSize: '100%',backgroundPosition:"relative" ,textAlign: 'right',
                                 direction: 'rtl', fontFamily:'Reem Kufi'}} className="droid-arabic-kufi">
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '120px', fontSize:'30px' ,color:'white',textAlign:'justify'}}>
                    <div style={{ flex: '1', padding: '70px'}}>
                      <h3>
                        أجمل عشق أن تعشقَ وطناً&nbsp;وأجمل وطن فلسطينِ
                      </h3>
                    </div>
                    <div style={{ flex: '1', padding: '70px' }}>
                      <h3>
                         على هذه الأرضِ ما يَسْتَحِقُّ الحياة.
                      </h3>
                    </div>
                    <div style={{ flex: '1', padding: '70px' }}>
                      <h3>
                        سلامٌ لارض خُلقت للسلام وما رأت يوماً سلاماً
                      </h3>
                    </div>
                  </div>
                </section>

                <section style={{backgroundColor:"#E6E6E6", height:'700px', backgroundSize: '100%',backgroundPosition:"relative"}}>
                    <div style={{paddingTop:'50px',paddingLeft:'188px'}}>
                      <h1 style={{fontFamily:'sans-serif',fontSize:'40px',fontWeight:'bold', color:'#4F4F4F'}}>
                        PRODUCTS
                      </h1>
                    </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '290px', paddingTop:'30px'}}>
                    <div style={{flex:'1'}}>
                      <img src={BlackProduct} alt="" style={{borderRadius:'10px',height:'250px'}}/>
                      <h3 style={{fontFamily:'sans-serif',fontSize:'20px', color:'#4F4F4F',paddingLeft:'50px',paddingTop:'20px',fontWeight:'normal'}}>Black - KOUFIYA</h3>
                      <button style={{marginLeft:'70px',marginTop:'20px', backgroundColor:'transparent',color: "#4F4F4F" ,padding:'14px 40px',borderRadius: '2px',  border: '4px solid #4F4F4F' ,textAlign: 'center',textDecoration: 'none',display: 'inline-block',fontSize: '16px',}}>BUY</button>
                    </div>
                    <div style={{flex:'1'}}>
                      <img src={RedProduct} alt="" style={{borderRadius:'10px',height:'250px'}}/>
                      <h3 style={{fontFamily:'sans-serif',fontSize:'20px', color:'#4F4F4F',paddingLeft:'62px',paddingTop:'20px',fontWeight:'normal'}}>Red - KOUFIYA</h3>
                      <button style={{marginLeft:'70px',marginTop:'20px',backgroundColor:'transparent',color: "#4F4F4F" ,padding:'14px 40px',borderRadius: '2px',  border: '4px solid #4F4F4F' ,textAlign: 'center',textDecoration: 'none',display: 'inline-block',fontSize: '16px',}}>BUY</button>
                    </div>
                  </div>
                </section>

                <section style={{backgroundColor:"#3F3F3F", height:'440px', backgroundSize: '100%',backgroundPosition:"relative"}}>
                <Slider {...settings}>
                  <div>
                    <img src={pic1} alt="Slide 1" />
                  </div>
                  <div>
                    <img src={pic2} alt="Slide 2" />
                  </div>
                  <div>
                    <img src={pic3} alt="Slide 3" />
                  </div>
                  <div>
                    <img src={pic4} alt="Slide 3" />
                  </div>
                  <div>
                    <img src={pic5} alt="Slide 3" />
                  </div>
                  <div>
                    <img src={pic6} alt="Slide 3" />
                  </div>
                  <div>
                    <img src={pic7} alt="Slide 3" />
                  </div>
                  <div>
                    <img src={pic8} alt="Slide 3" />
                  </div>
                  <div>
                    <img src={pic9} alt="Slide 3" />
                  </div>

              </Slider>
                </section>

                <section style={{backgroundColor:"white" , height:'240px', backgroundSize: '100%',backgroundPosition:"relative"}}>
                </section>

                <section style={{backgroundColor:"black" , height:'400px', backgroundSize: '100%',backgroundPosition:"relative"}}>
                </section>

                <section style={{backgroundColor:"#404040" , height:'240px', backgroundSize: '100%',backgroundPosition:"relative"}}>
                </section>
                
            </Fragment>
            
          );
        }



export default Index;
