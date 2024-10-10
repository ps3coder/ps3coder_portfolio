import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    <span className="home__greeting">Hello, I'm</span>
                    <h1 className="home__name">Pankaj Sharma</h1>
                    <h3 className="home__education">MERN Stack Developer | NodeJS Developer | Web3 Developer <br /> Cloud Engineer</h3>

                    <div className="home__button">
                        <a href="https://drive.google.com/file/d/15ou3NqvpAlImyME2RGtvml4mQHemEFnu/view?usp=sharing" className="button" target="_blank" rel="noopener noreferrer">Download Resume</a>
                        <a href="#about" className="button">
                            About
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
