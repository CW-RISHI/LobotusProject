import React, { Fragment } from "react";

import headerBackgroundImage from "../PsdImages/headerBackgroundImage.png";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <div className="container1">
        <nav className="navbar">
          <ul>
            <li><a href="#">CONTACT US</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">HOME</a></li>
          </ul>
        </nav>
        <section className="sec1">
            <div className="sec1-container">
                <h1>YOGA CLASS</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem repellat mollitia non dolore modi nihil, quidem a voluptates fuga eligendi!</p>
                <button>Join Us</button>
            </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Header;
