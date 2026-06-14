import React from 'react'

function About() {
  return (
    <div className="html-wrapper about-section">
      <div className="about-header">
        <div className="about-title">About</div>
      </div>

      <div className="about-card">
        <div className="about-profile">
          <div className="about-avatar border" />
          <div className="about-name">Andy Kim</div>
          <div className="about-role">Software Engineer</div>
        </div>

        <div className="about-body">
          <p className="about-bio">
            Hello! I'm a software engineer who loves to learn and build interactive visuals on the web.
            I work with React and Three.js to turn ideas into 3D experiences, and I enjoy growing through side projects and developer communities.
          </p>
          {/* <div className="about-tags">
            <span>React</span>
            <span>Three.js</span>
            <span>Next.js</span>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default About
