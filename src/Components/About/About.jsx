import React from "react";
import "./About.css";
import image from '../../assets/img/one.jpg';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <div className="about__container container grid">
                <div className="home__social">
                    <a
                        href="https://www.linkedin.com/in/pankaj-sharma-925b2b250/"
                        target="_blank"
                        className="home__social-link"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/ps3coder"
                        target="_blank"
                        className="home__social-link"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-github"></i>
                    </a>
                    <a
                        href="https://twitter.com/ps3coder"
                        target="_blank"
                        className="home__social-link"
                        rel="noopener noreferrer"
                    >
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>

                <img src={image} alt="" className="about__img" />

                <div className="about__data ">
                    <p className="about__description glass">
                        Innovative Computer Engineering student with hands-on experience in full-stack development, Web3 technologies, and cloud computing. I have a proven track record of delivering impactful solutions in high-stakes environments through creative problem-solving and technical expertise.
                    </p>
                    <p className="about__description glass">
                        From building decentralized applications using React and blockchain to mastering AWS services, I bring both technical expertise and a creative approach to problem-solving.
                    </p>
                    <p className="about__description glass">
                        In addition to my technical skills, I’ve honed leadership and teamwork abilities by participating in college events as both a volunteer and leader. Competing at the state level in chess and being a two-time National-level Kabaddi team member has sharpened my strategic thinking and discipline.
                    </p>
                    <p className="about__description glass">
                        I've also contributed to community service through NCC and SPC, strengthening my commitment to teamwork. With over 25 medals in college sports, including 6 trophies as a captain, I’ve learned to lead teams and face challenges head-on, maintaining a strong focus on results.
                    </p>

                </div>
                <a href="#contact" className="button about__button-contact">
                    Contact Me
                </a>
            </div>
        </section>
    );
};

export default About;
