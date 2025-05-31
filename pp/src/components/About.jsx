import React from 'react'

function About() {
  return (
    <div className='html-wrapper about-outer-wrapper border'>


      {/* Card Component */}
      <div className="card">
        <div className="header">
          <div className="profile-picture border"></div>
          <div className="profile-text-wrapper">
            <div className="name">Andy Kim</div>
            <div className="subtext">Software Engineer</div>
            <div className="subtext">Woncheon Hana Christian Academy</div>
          </div>
        </div>
        <div className="card content border">
          I'm a software engineer who loves to learn and create visuals to people. <br />
        </div>
      </div>

      {/* Video */}
      <div className='border' id="about-video"></div>
    </div>
  )
}

export default About
