import React from 'react'
import { useScroll } from '@react-three/drei';


function HeroHTML() {

      const scroll = useScroll();

      function handleScroll(target) {
        scroll.el.scrollTo({
        top: scroll.el.scrollHeight * target,
        behavior: 'smooth',
        });
    }

  return (
          <>
            <div className="header">
                <div className="header-text">Andy kim</div>
                <div className="header-text">Contents</div>
            </div>
            <div className="hero-upper-wrapper">
              <h1 className="hero-title">
                <span className="hero-title-line hero-title-accent">Curiosity Driven,</span>
                <span className="hero-title-line hero-title-accent">Creativity Fueled</span>
              </h1>
            </div>

            <div className="content">
              <div className="blur-box">
                <div className="blur-box-title">Contents</div>
                <div className="blur-box-items">
                  <div className="blur-link" onClick={() => handleScroll(0.225)}>projects</div>
                  <div className="blur-item">About</div>
                </div>
              </div>
            </div>

            <div className="content right-content">
              <div className="blur-box blur-box-right">
                <div className="blur-box-title">Contact</div>
                <div className="blur-box-items">
                  <div className="blur-link" onClick={() => window.open('https://github.com/Andysimps0n', '_blank')}>Github</div>
                  <div className="blur-item">@rlabmscks0714</div>
                  <div className="blur-item">010-5604-0854</div>
                  <div className="blur-item">rladmscks0714@gmail.com</div>
                </div>
              </div>
            </div>
          </>

  )
}

export default HeroHTML
