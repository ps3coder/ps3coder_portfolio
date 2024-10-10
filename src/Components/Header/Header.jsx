import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <header className="header" id="header">
            <nav className="nav">
                <a href="#logo" className="nav__logo">ps3coder</a>
                <div className="nav__menu ">
                    <ul className="nav__list ">
                        <li className="nav__item ">
                            <a href="#home" className="nav__link">
                                <i className="bx bx-home"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="bx bx-book"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#work" className="nav__link">
                                <i className="bx bx-briefcase-alt-2"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="bx bx-message-square-dots"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header