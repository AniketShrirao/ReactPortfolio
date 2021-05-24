import React from 'react';
import { Link  as OptionLink } from 'react-router-dom';
import logoSrc from '../../assets/images/Logo.png';
import './Header.style.css';

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <h1>
                    <OptionLink to="/" title="Logo">
                        <img src={logoSrc} alt="Aps"/>
                    </OptionLink>
                </h1>
                <nav>
					<div className="hamburger">
						<span>bar</span>
						<span>bar</span>
						<span>bar</span>
                    </div>       
                    <ul className="navbar">
                        <li className="active">
                            <OptionLink to="#banner" title="Home" className="home-section">home</OptionLink>
                        </li>
                        <li>
                            <OptionLink to="#profession" title="Professional" className="professional-section">Skills</OptionLink>
                        </li>
                        <li>
                            <OptionLink to="#portfolio" title="Portfolio" className="portfolio-section"> Work portfolio</OptionLink>
                        </li>
                        <li>
                            <OptionLink to="#experience" title="Experience" className="experience-section">experience</OptionLink>
                        </li>
                        <li>
                            <OptionLink to="#contact" title="Contact" className="contact-section">contact</OptionLink>
                        </li>
                        <li>
                            <OptionLink to="#FIXME" title="Ellipsis" className="ellipsis">ellipsis</OptionLink>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li>
                            <OptionLink to="https://www.facebook.com/aniket.shrirao.50/" target="_blank" className="facebook" title="Facebook" rel="nofollow noreferrer">facebook</OptionLink>
                        </li>
                        <li>
                            <OptionLink to="https://www.instagram.com/09_aniket_03/" target="_blank" className="instagram" title="Instagram" rel="nofollow noreferrer">instagram</OptionLink>
                        </li>
                        <li>
                            <OptionLink to="https://www.linkedin.com/in/AniketShrirao/" target="_blank" className="linked-in" title="linked in" rel="nofollow noreferrer">linked in</OptionLink>
                        </li>
                    </ul>
                </nav>                                            
            </div>
        </header>
    )
}

export default Header
