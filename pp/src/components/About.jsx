import React from 'react'

function About() {
  return (
    <div className='html-wrapper about-outer-wrapper'>


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
        <div className="card content">
          Hello! I'm a software engineer who loves to learn and create visuals to people. <br />
          My first web developing experience was in 2023, where I learned the basics of HTML, CSS and Javascript.
          And then at 2024, I started my journey of Next.js, React.js, Github and Three.js. Also, I was active in a developer community by participating a meet-up where I watched other devloper's presentation of thier career and had feed backs with other experienced developers   . 
        </div>
      </div>

      {/* Video */}
      <video loop autoPlay muted src="/video.mp4" className='' id="about-video"></video>

    </div>
  )
}

export default About
