import React from 'react'

function Projects() {
  return (
    <div className='html-wrapper project-wrapper'>
      <div className="project-header">
        <div className="project-text1">Projects</div>
        <div className="project-text2">Things I worked with</div>
      </div>

        <div className="project-grid">
            <div>
                <div className="project-picture-container" id="project-pic1"></div>
                <div className="project-grid-text">
                    Reminiscence of The Reformation
                </div>
            </div>
            <div>
                <div className="project-picture-container"></div>
                <div className="project-grid-text"></div>
            </div>
            <div>
                <div className="project-picture-container"></div>
                <div className="project-grid-text"></div>
            </div>
            <div>
                <div className="project-picture-container"></div>
                <div className="project-grid-text"></div>
            </div>
            <div>
                <div className="project-picture-container"></div>
                <div className="project-grid-text"></div>
            </div>
        </div>

    </div>
  )
}

export default Projects
