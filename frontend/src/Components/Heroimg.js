import"./Heroimgstyle.css";
import React from 'react';
import writersimg from "../assets/writersimg.jpg"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return <div className="hero">
        <div className="mask">
         <img className="writersimg"
         src={writersimg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI ,I'M A WRITER</p>
            <h2 id="name"> <b>ANJALIANGEL</b></h2>
            <div>
                <Link to="/Quotes" className="btn"> Quotes </Link>
                <Link to="/Contact" className="btn btn-light"> Contact </Link>

            </div>
        </div>

    </div>
  
}

export default Heroimg;