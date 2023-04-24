import React from "react";
import "./index.css";
import ContactForm from "../Form"
import Header from "../Header"
import Footer from "../Footer";

const data=[
  {
    id:1,
    head:"Introduction to React JS",
    description:"React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.React is a tool for building UI components",
    imageUrl:"https://res.cloudinary.com/sai-muali/image/upload/v1682325665/react-icon_ej6rlq.png"
  },
  {
    id:2,
    head:"Why React JS is popular?",
    description:"Reusable Components One of the main benefits of using React JS is its potential to reuse components. It saves time for developers as they don't have to write various codes for the same features. Furthermore, if any changes are made in any particular part, it will not affect other parts of the application",
    imageUrl:"https://res.cloudinary.com/sai-muali/image/upload/v1682325665/react-icon_ej6rlq.png"
  },
  {
    id:3,
    head:"Getting Started with React JS",
    description:"React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started",
    imageUrl:"https://res.cloudinary.com/sai-muali/image/upload/v1682325665/react-icon_ej6rlq.png"
  },
  {
    id:4,
    head:"React JS Best Practices",
    description:"10 React Best Practices You Need to Follow In 2023",
    imageUrl:"https://res.cloudinary.com/sai-muali/image/upload/v1682325665/react-icon_ej6rlq.png"
  },
]

function Home() {
  return (
    <>
      <Header/>
      <div className="bg-container">
      <div className="MainSection">
        
          {data.map(eachSection=>(
          <ul className="SubSection">
            <li className="Content" key={eachSection.id}>
              <h2>{eachSection.head}</h2>
              <p className="des">{eachSection.description}</p>
            </li>
            <img src={eachSection.imageUrl} width={200} height={200} className="image" alt="Image" />
          </ul>
          ))}
      </div>
        <ContactForm/>
        </div>
        <Footer/>
    </>
  );
}

export default Home;
