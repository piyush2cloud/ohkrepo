import React from "react";
import logo from "../../Assets/logo.svg";

import "./header-nav.scss";

const HeaderNav = () => {
  return (
    <nav>
      <ul className="main-nav">
        <li>
          <a href="#"><img src={logo}></img></a>
        </li>
        <li>
          <a href="#">CINEMA</a>
        </li>
        <li>
          <a href="#">FREE</a>
        </li>
        <li>
          <a href="#">SUBSCRIPTION</a>
        </li>
        <li>
        <div className="wrap">
          <div className="search">
          <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
          <button type="submit" className="searchButton">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </button>
        </div>
      </div>
        </li>
        <li className="ayuda">
        <a href="#">AYUDA Y DISPOSITIVOS</a>
        
         <a href="#">ENTRAR</a>

           <a href="#" className="register">Registrarse</a>

          </li>
      </ul>
     
    </nav>
  );
};

export default HeaderNav;