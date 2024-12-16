import React from 'react';
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/Heroimg2";
import Form from "../Components/Form";
import './contactstyles.css';




const Contact = () => {
  return (
    <div>
      <HeroImg2  text="Hey ,Lets have  a chat and contact me if you have any doubts"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact;