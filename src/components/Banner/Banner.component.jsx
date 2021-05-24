import React from 'react';
import './Banner.style.css';

const Banner = () => {
    return (
        <section className='banner' id="banner">
            <div className="wrapper">
                <div className="banner__content">
                    <h2> i<span>'</span>m <br/>Aniket <br/>Shrirao <span>.</span></h2>
                    <span>web developer & Ethical Hacker </span>
                    <a href="../../assets/data/AniketShrirao.pdf" title="Download CV" className="resume" download="Aniket_Resume">download cv</a>
                </div>
            </div>            
        </section>
    )
}

export default Banner
