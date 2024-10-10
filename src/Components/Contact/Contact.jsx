import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <br />
            <h3 className="section__title">Contact Me</h3>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title contact__title-info">Get in Touch</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className='bx bx-mail-send contact__card-icon'></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">ps3threee@gmail.com</span>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ps3threee@gmail.com" rel="noreferrer" target="_blank" className="contact__button">
                                Write : <i className='bx bx-right-arrow contact__button-icon'></i>
                            </a>

                        </div>

                        <div className="contact__card">
                            <i className='bx bxl-whatsapp contact__card-icon'></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+91 8758264068</span>

                            <a href="https://api.whatsapp.com/send?phone=+918758264068&text=Hey there!" rel="noreferrer" target="_blank"
                                className="contact__button">
                                Contact <i className='bx bx-right-arrow contact__button-icon'></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className='bx bxl-linkedin contact__card-icon'></i>
                            <h3 className="contact__card-title">Connect</h3>
                            <span className="contact__card-data">ps3coder</span>

                            <a href="https://www.linkedin.com/in/pankaj-sharma-925b2b250/" target="_blank" rel="noreferrer" className="contact__button">
                                LinkedIN <i className='bx bx-right-arrow contact__button-icon'></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title contact__title-form">Write Me your Message</h3>

                    <form action="" className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Name</label>
                            <input type="text" placeholder="Enter name" className="contact__form-input" />
                        </div>

                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Mail</label>
                            <input type="text" placeholder="Enter email" className="contact__form-input" />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="" className="contact__form-tag">Message</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Write your Message"
                                className="contact__form-input"></textarea>
                        </div>

                        <button className="button">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
