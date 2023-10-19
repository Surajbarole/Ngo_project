// import React from 'react'
// import { useState, useEffect } from 'react';
// function About() {
//   const images = [
//   'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//   'https://images.unsplash.com/photo-1505533321630-975218a5f66f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//   'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//   'https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//   'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//   'https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
// ];

// const [currentIndex, setCurrentIndex] = useState(0);

// const slideRight = () => {
//   setCurrentIndex((currentIndex + 1) % images.length);
// };
// useEffect(() => {
//   const interval = setInterval(slideRight, 2000);

//   return () => {
//     clearInterval(interval);
//   };
// }, [slideRight]);


// return (
//   <>

//  <div  className="image-slider">
//   <img style={{
//   width:"100%",
//  height:"84vh",
//  }} src={images[currentIndex]} alt="Slider" />
// </div>


// </>
// )
// };

// export default About
import Contact from "./Contact"
import { FcNext } from "react-icons/fc"
import { FcPrevious } from "react-icons/fc"
import React, { useState } from 'react';
import '../components/About.css';
import images1 from "../images/1.jpg"
import images2 from "../images/2.jpg"
import images3 from "../images/3.jpg"
import images4 from "../images/4.jpg"
import images5 from "../images/5.jpg"
import images6 from "../images/6.jpg"
import images7 from "../images/7.jpg"
import images8 from "../images/8.jpg"
import images9 from "../images/9.jpg"
import images10 from "../images/10.jpg"
import about1 from "../images/about1.jpg"
import about2 from "../images/about2.jpg"
import about3 from "../images/about3.jpg"
import qoutesimg from "../images/qoutesupper.png"

const App = () => {
    const images = [
        images1,
        images2,
        images3,
        images4,
        images5,
        images6,
        images7,
        images8,
        images9,
        images10,
    ]
    const [currentIndex, setCurrentIndex] = React.useState(0);

    function showpreviousImage() {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);

    }
    function shownextImage() {
        setCurrentIndex((currentIndex + 1) % images.length);
    }


    return (
<>
        <div className="container">
            {/* <h1 className="title">Slideshow</h1> */}
            <div className="slideshow">
                <button className="prev-button" onClick={showpreviousImage}><FcPrevious /></button>
                <img className="image" src={images[currentIndex]} alt="Slideshow" />
                <button className="next-button" onClick={shownextImage}><FcNext /></button>
            </div>


            <diV>
                <h1 className=" about-btn">About Us</h1>
                <p className="paragrap">
                NAMAN is a Non-Governmental volunteer organization registered under the Society Registration Act 1973, in 2014, working with tireless dedication in the area of Health, Livelihood, Environment and, Community development.
                     The organization is working in collaboration with the government and 
                    corporate in three states of India. They are working continuously in 2 districts of Madhya Pradesh.
                </p>

                <h1 className="head">Mission</h1>
                <p className="para" id="paramission">
                    <img src={about1} />
                    To foster integrated community development program through multi-disciplinary programs and people's participation.
                    To improve the health status of women through sustainable health facilities and better health care, sanitation, and environment, through self-help community action and involvement in the local civic system.
                    To uplift the Socioeconomic conditions of low-income families through the establishment of permanent Centers for training, assisting women and girls in income-generating activities, through vocational training.
                    {/* <img src={qoutesimg}/> */}
                </p>

                <h1 className="head">Vision</h1>
                <p className="para">
                    <img src={about2} alt="" />
                    To empower the communities towards sustaining the development process leading to their total well-being.
                </p>
                <h1 className="head">Goal</h1>
                <p className="para">
                    <img src={about3} alt="" />
                    To ensure the participation of the poor and marginalized in sustainable development Processes through the collective decision making and facilitating the emergence of democratic leadership and institutions among people and innovative means that’s helped the nation to be the great economic power of the world.
                </p>

                <div className="team-img">
                    <img className="teampic" src={images1}/>
                    <h3 className="team">NAMAN Samajik Lok Kalyan</h3>
                </div>

            </diV>
          
        </div>
      {/* <Contact/> */}
      {/* <div class="copyright">
        <p>© Copyright 2023 NAMAN Samajik Lok Kalyan</p>
    </div> */}
 </>
    );
};


export default App;
