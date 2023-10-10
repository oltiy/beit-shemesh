import './style.css'
import React from "react";
import { Link } from "react-router-dom"; 

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="title">בית שאן מתנדבים למען הקהילה</h1>
      <div className="buttons">
        <Link to="/page1">
          <button className="button">אני רוצה להתנדב</button>
        </Link>
        <Link to="/page2">
          <button className="button">אשמח לעזרה</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
