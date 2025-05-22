import React from 'react'

function HeroHTML() {
  return (
    <div id="hero-scroll-container">
        <div className="hero-scroll-wrapper">
            <div className="header">
                <div className="header-text">Andy kim</div>
                <div className="header-text">Contents</div>
            </div>
            <div className="content">
              <div>Contents</div>
              <div>About</div>
              <div>projects</div>
              <div>Interests</div>
              <div>Contents</div>
            </div>
            <div className="content" style={{textAlign : 'right'}}>
              <div>Github</div>
              <div>Instargram</div>
              <div>010-1234-1234</div>
              <div>LinkedIn</div>
            </div>
        </div>
    </div>
  )
}

export default HeroHTML
