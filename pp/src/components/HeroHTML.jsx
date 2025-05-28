import React from 'react'

function HeroHTML() {
  return (
          <>
            {/* header */}
            <div className="header">
                <div className="header-text">Andy kim</div>
                <div className="header-text">Contents</div>
            </div>
            {/* upper content */}
            <div className="hero-upper-wrapper">
              {/* Desire to create, <br></br>
              Dedicated to find */}
              Curiocity Driven, <br/>
              Creativity Fueled
            </div>


            {/* content1 - Left */}
            <div className="content">
              <div className="blur">
                <div>Contents</div>
                <div>projects</div>
                <div>About</div>
                <div>Interests</div>
                <div>Contents</div>
              </div>
            </div>

            {/* content2 - Right */}
            <div className="content right-content" style={{textAlign : 'right'}}>
              <div className="blur">
                    <div>Github</div>
                    <div>Instargram</div>
                    <div>010-1234-1234</div>
                    <div>LinkedIn</div>
              </div>
            </div>
          </>

  )
}

export default HeroHTML
