import React, { Component } from 'react';

// import { Link } from 'react-router-dom';

import about from "../images/about.jpeg";

import inst1 from "../images/instruct1.png";
import inst2 from "../images/instruct2.png";
import inst3 from "../images/instruct3.png";
import {FaFacebookF ,FaTwitter ,FaLinkedinIn} from "react-icons/fa";
import {GiWaveCrest ,GiFireSpellCast,GiFireSilhouette} from "react-icons/gi";
import {GrCheckboxSelected} from "react-icons/gr";
import {Link} from "react-scroll";
import ScrollUpButton from "react-scroll-up-button";
// import FeauterdRooms from "../components/FeauterdRooms.js";
import {FaCreativeCommonsSa, FaAlignRight} from "react-icons/fa";
var cnt = 0;
class Home extends Component{

  state = {
    open: false,
    services :[
      {
        
        icon : <GiFireSilhouette className="icon"/>,
        title: "Creative Design",
        info : "Capitalize on low hanging fruit to identify a ballpark added activity to beta test"
      },
      {
        
        icon : <GiWaveCrest className="icon"/>,
        title: "Creative Design",
        info : "Capitalize on low hanging fruit to identify a ballpark added activity to beta test"
      },
      {
        
        icon : <GiFireSpellCast className="icon"/>,
        title: "Creative Design",
        info : "Capitalize on low hanging fruit to identify a ballpark added activity to beta test"
      }
      
    ],
    instructors:[
      {
        name : "Aya Amr",
        titleJob :"Front End ",
        img : inst1,
        facebook: <FaFacebookF /> ,
        twitter :<FaTwitter/>,
        linkedin: <FaLinkedinIn/>
      },
      {
        name : "Omar mostafa",
        titleJob :"Full Stack",
        img : inst2,
        facebook: <FaFacebookF /> ,
        twitter :<FaTwitter/>,
        linkedin: <FaLinkedinIn/>
      },
      {
        name : "Ahmed Salih",
        titleJob :"Back End ",
        img : inst3,
        facebook: <FaFacebookF /> ,
        twitter :<FaTwitter/>,
        linkedin: <FaLinkedinIn/> 
      }
    ],
    courses :[
     {
       
       title_course :"Front End", 
       skill1 : "Html",
       skill2 : "Css",
       skill3 : "Bootstrap",
       skill4 : "Javascript"
     },
     {
      title_course :"Back End", 
      skill1 : "Html",
      skill2 : "Css",
      skill3 : "Php",
      skill4 : "Javascript",
      skill5 : "MySql"
    },
    {
      title_course :"Full Stack", 
      skill1 : "Html",
      skill2 : "Css",
      skill3 : "Bootstrap",
      skill4 : "Javascript",
      skill5 : "Php",
      skill6 : "Javascript",
      skill7 : "MySql"
    }
    ],
    contects :[
        {
          icon : <FaAlignRight />,
          part1 : "8 Delaware Lane",
          part2 : "Greensboro, NC 27405"
        },
        {
          icon : <FaAlignRight/>,
          part1 : "+(380) 123 47 8137",
          part2 : "+(380) 543 12 3456"
        },
        {
          icon : <FaAlignRight/>,
          part1 : "abdo@gmail.com",
          part2 : "dcdc@yahoo.com"
        }
    ]

  };

   togglebox = ()=> {
  return(
    this.setState ({open : !this.state.open}));
  console.log(this.state.open);
  }
  render(){
    return (
      <>
             <div className="home" name="home">
               {/* <div className="box-left1"></div> */}
               {/* <div className="box-left2"></div> */}
             <div className="container">
              <div className="row">
                 <div className="col-md-12 mx-auto">
                        <div className="content-left">
                        <h2 className="info-company">Reload Academy Programming </h2>
                        <button className="enroll"><a href="#">Enroll Now</a></button>
                        </div>
                 </div>
               
              </div>

             </div>
           
            </div>
<br></br>
            <div className="about" name="about"> 
             <div className="container">
               <h2 className="text-center title-about">About</h2>
              <div className="row">
                 <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="about-left">
                        {/* <div className="img"> */}
                          <img src={about} alt="home photo" className="img-about"/> 
                            <div className="overlay-about1"></div>
                            <div className="overlay-about2"></div>
                          {/* </div> */}
                        </div>
                 </div>
                 <div className="col-xl-8 col-lg-8 col-md-12 ">
                        <div className="about-reight">
                        <h2>Realod Academy - 30 Years of Experience</h2>
                        <p>We build frameworks that respect your time and money, so we bring Corpus, a premium corporate WordPress theme Accelerated web applications to render you videos faster(AWA) Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias ullam eligendi delectus laudantium saepe commodi amet temporibus iusto reiciendis.</p>
                        {/* <button className="enroll"><a href="#">Enroll Now</a></button> */}
                        </div>
                 </div>
              </div>

             </div>
            
            </div>

            
            <div className="services" name="services"> 
             <div className="container">
               <h1 className="text-center">Services</h1>
              <div className="row">
                 {this.state.services.map((item,index) => {
                   return(
                    <div key={index} className="col-xl-4 col-lg-6 col-md-12 mx-auto  col-sm-12 ">
                        <div className="service">
                               {item.icon}
                              <h1 className="title-service">{item.title}</h1>
                              <p>{item.info}</p>
                        </div>
                    </div>
                   )
                 })}
                
              </div>

             </div>
            
            </div>

            <div className="instructors" name="instructors"> 
             <div className="container">
               <h1 className="text-center">Instructors</h1>
              <div className="row">
                 {this.state.instructors.map((item,index) => {
                   return(
                    <div key={index} className="col-xl-4 col-lg-6 col-md-12 mx-auto  col-sm-12  ">
                        <div className="instruct">
                               <img src={item.img} alt="test photo " className="img-instruct"/>
                               <div className="overlay-img"></div>
                              <h3>{item.name}</h3>
                              <h5>{item.titleJob}</h5><br></br>
                              <span className="icon-instructor">{item.facebook}</span>
                              <span className="icon-instructor">{item.twitter}</span>
                              <span className="icon-instructor">{item.linkedin}</span>
                        </div>
                    </div>
                   )
                 })}
                
              </div>

             </div>
            
            </div>

            <section className="cours" name="courses"> 
             <div className="container">
               <h1 className="text-center">Courses</h1>
              <div className="row">
                 {this.state.courses.map((item,index) => {
                   return(
                    <div key={index} className="col-xl-4 col-lg-6 col-md-12 mx-auto  col-sm-12">
                        <div className={item.title_course} >
                             <h2> {item.title_course}</h2>
                              <h1>{item.name}</h1>
                              <p><GrCheckboxSelected className="icon-skill"/>{item.skill1}</p>
                              <p><GrCheckboxSelected className="icon-skill"/> {item.skill2}</p>
                              <p> <GrCheckboxSelected className="icon-skill"/>{item.skill3}</p>
                              <p><GrCheckboxSelected className="icon-skill"/>{item.skill4}</p>
                              { index >= 1 ?  <p> <GrCheckboxSelected className="icon-skill"/>{item.skill5} </p> : " " }
                              { index >= 2 ?  <p> <GrCheckboxSelected className="icon-skill"/>{item.skill6} </p> && <p> <GrCheckboxSelected className="icon-skill"/> {item.skill7} </p> : " " }
                              <button className="subscrib"><a href="#">Enroll Now</a></button>
                              
                        </div>
                    </div>
                   )
                 })}
                
              </div>

             </div>
            
            </section>
            <div className="contact"> 
             <div className="container">
               <h2 className="text-center">Contact Me</h2>
              <div className="row">
                  <div  className="col-lg-6 col-md-12 mx-auto col-sm-12 ">
                     <form>
                     <input type="text" placeholder="Name"/><br></br>
                     <input type="email" placeholder="Email" /><br></br>
                     <input type="phone" placeholder="Phone"/><br></br>
                     <textarea placeholder="Message"></textarea><br></br>
                     <button type="submit">Send</button>
                     </form>
                    </div>
                   
              </div>
             </div>
            </div>



            <footer className="footer text-center"> 
             <div className="container">
              
              <div className="row">
                  <div  className="col-lg-12 col-md-12 mx-auto col-sm-12 ">
                   Copy &copy; Rights By <a href="abdalahabdelghafar.netlify.com  " target="_blank">Abdallah</a> 2020.
                  </div>
                   
              </div>
             </div>
            </footer>
            
            <ScrollUpButton ContainerClassName="MyOverRideClass" TransitionClassName="MyOverRideTransitionedClass" className="scroll-top"/>

          </>
    )
  }
}

export default Home;