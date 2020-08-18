import React,{Component} from  "react";
import {FaAlignRight} from 'react-icons/fa';
import {Link} from "react-scroll";
// import React, { Component } from 'react';
// import {Link } from "react-scroll";
 class Navbar extends Component {

    state = {
        isOpen: false
      };
      handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
      };
    render() {
        return (
            <div>
                 <nav className="navbar">
                   <div className="container">
                        <div className="navbar-center">
                            <div className="navbar-header">
                            <h1 className="header"><Link to="/">Reload</Link></h1>
                                <button
                                type="button"
                                className="navbar-btn"
                                onClick={this.handleToggle}
                                >
                                <FaAlignRight className="navbar-icon" />
                                </button>
                            </div>
                            <ul   className={this.state.isOpen ? "navbar-links show-navbar" : "navbar-links"}>
                                <li>
                                    <Link to="home" spy={true} smooth={true} duration={300}>Home</Link>
                                </li>
                                <li>
                                    <Link  to="about" spy={true} smooth={true} duration={300}>About</Link>
                                </li>
                                <li>
                                    <Link to="services" spy={true} smooth={true} duration={300}>services</Link>
                                </li>
                                <li>
                                    <Link  to="instructors" spy={true} smooth={true} duration={300}>instructors</Link>
                                </li>
                                <li>
                                    <Link  to="courses" spy={true} smooth={true} duration={300}>courses</Link>
                                </li>
                                <li>
                                    <Link  to="contact" spy={true} smooth={true} duration={300}>Contact</Link>
                                </li>
                            </ul>
                         </div>
                   </div>
                 </nav>
            </div>
        );
    }
}

export default Navbar;