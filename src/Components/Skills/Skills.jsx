import React from "react";
import "./Skills.css";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <br />
            <h2 className="section__title">Professional Edges</h2>

            <div className="skills__container container grid">
                <div className="skills__content glass">
                    <h3 className="skills__title">Frontend Development</h3>

                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">HTML5</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">CSS3</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Javascript/Typescript</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Bootstrap/MUI</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">NextJS</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills__content glass">
                    <h3 className="skills__title">Backend Development</h3>

                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Node JS</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">MySQL/PostgreSQL</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name"> Express.js</h3>
                                    <span className="skills__level">Advance</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">MongoDB</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Solidity</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills__content glass">
                    <h3 className="skills__title">DevOps(Cloud)</h3>

                    <div className="skills__box ">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">AWS Services</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">AWS CLI</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Linux environment</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">DynamoDB</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
