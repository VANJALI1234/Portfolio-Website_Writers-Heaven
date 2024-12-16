// src/pages/Quotes.js
import React from 'react';
//import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
//import Heroimg2 from '../Components/Heroimg2';
//import Cards from '../Components/Cards';
import './AboutStyles.css'; // Ensure this file exists for styling
import authorPhoto from '../assets/author-photo.jpg'; // Adjust the path as needed

const About = () => {
  return (
    <div>
      <div className="author-section">
        <img src={authorPhoto} alt="Author" className="author-photo" />
        <div className="author-text">
          <h2 className='about'>About Me</h2>
          <p>
          Hi! I'm Anjali, a passionate writer and photographer. I completed my graduation in 2024 from Rajiv Gandhi University of Knowledge Technology, where I nurtured my love for storytelling and creativity. Over the years, I have developed a deep interest in both writing and photography, as I believe these art forms are powerful tools to capture emotions, moments, and ideas in their most authentic form.

Writing for me is more than just an expression; it’s a way of life. Whether it’s crafting short stories, weaving together poetic lines, or penning down reflective thoughts, I am constantly inspired by the world around me. My photography complements my writing, as I love to tell stories not just with words but also through the lens, capturing the beauty of life, nature, and human emotions.

I created this platform to share my work, connect with fellow writers and creative minds, and continue to grow as an artist. I believe that every story holds a unique power, and I hope to contribute my own voice to the world of literature and art.

When I'm not writing or behind the camera, you can find me exploring new ideas, traveling, or indulging in meaningful conversations that spark creativity. Thank you for stopping by, and I look forward to sharing my journey with you.

          </p>
          <p>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
