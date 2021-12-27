import React from 'react';
import './Contact.css';
import ProgressiveImage from './components/ProgressiveImage';
import cloudy from "./images/flat_cloudy.jpg";
import cloudyBlur from "./images/flat_cloudy_blur.jpg";
import tree from "./images/flat_darkness_tree.jpg";
import treeBlur from "./images/flat_darkness_tree_blur.jpg";
import evening from "./images/flat_evening.jpg";
import eveningBlur from "./images/flat_evening_blur.jpg";


function Contact() {
  window.localStorage.setItem('appPage', JSON.stringify('contact'));
  const images = [
    {
      src: cloudy,
      placeholder: cloudyBlur,
      alt: "Cloudy Day"
    },
    {
      src: tree,
      placeholder: treeBlur,
      alt: "Darkness Tree"
    },
    {
      src: evening,
      placeholder: eveningBlur,
      alt: "Evening Sky"
    }
  ]
  return (
    <div className="app">
      <header className="app-header">
        <h1>Contact Page</h1>
        <div className="wrapper">
          {
            images.map((item, i) => (
              <ProgressiveImage
                key={i}
                src={item.src}
                placeholder={item.placeholder}
                alt={item.alt}
              />
            ))
          }
        </div>
      </header>
    </div>
  )
}

export default Contact;