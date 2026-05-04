import React from 'react'

function Projects({projectRef}) {

  const projectData = [
    {
      title: "Reminiscence of The Reformation",
      desc: "3D representation of people who contributed the Reformation",
      url: "https://statue4.vercel.app/",
      imgId: "project-pic1"
    },
    {
      title: "Flame Test",
      desc: "3D display of flames of chemical, revealing the flame color an element",
      url: "https://flame-color-of-elements-using-three-js.vercel.app/",
      imgId: "project-pic2"
    },
    {
      title: "Drowsiness Detection",
      desc: "Alarm combined with timer that awakes sleepy users",
      url: "https://mediapipe1.vercel.app/",
      imgId: "project-pic3"
    },
    {
      title: "Cylindical Coordinate Visualizer",
      desc: "3D graph of Cylindical / Spherical coordinates using Three.js",
      url: "https://3d-graph-1ubh.vercel.app/",
      imgId: "project-pic4"
    },
    {
      title: "Machine Learning on website",
      desc: "Use of Tensorflow.js to visualize error graph on hyperparameters",
      url: "https://ml-web-nine.vercel.app/",
      imgId: "project-pic5"
    },
  ];



  return (
    <div className='html-wrapper project-wrapper'>
      <div className="project-header">
        <div className="project-text1">Projects</div>
        <div className="project-text2">Things I worked with</div>
      </div>


        <div ref={projectRef} className="project-grid">
          {
            projectData.map((element, i)=>{
              return (
              <div key={i} onClick={() => window.open(element.url, '_blank')}>
                  <div className="project-picture-container" id={element.imgId}></div>
                  <div className="project-grid-text-wrapper">
                    <div className="text3">{element.title}</div>
                    <div className="text4">{element.desc}</div>
                  </div>
              </div>
  
              )
            })
          }
              {/* <div onClick={() => window.open('https://statue4.vercel.app/', '_blank')}>
                  <div className="project-picture-container" id="project-pic1"></div>
                  <div className="project-grid-text-wrapper">
                    <div className="text3">Reminiscence of The Reformation</div>
                    <div className="text4">3D representation of people who contributed the Reformation</div>
                  </div>
              </div>


            <div onClick={() => window.open('https://flame-color-of-elements-using-three-js.vercel.app/', '_blank')}>
                <div className="project-picture-container" id="project-pic2"></div>
                <div className="project-grid-text-wrapper">
                  <div className="text3">Flame Test</div>
                  <div className="text4">3D display of flames of chemical, revealing the flame color an element</div>
                </div>
            </div>


            <div onClick={() => window.open('https://mediapipe1.vercel.app/', '_blank')}>
                <div className="project-picture-container" id="project-pic3"></div>
                <div className="project-grid-text-wrapper">
                  <div className="text3">Drowsiness Detection </div>
                  <div className="text4">Alarm combined with timer that awakes sleepy users</div>
                </div>
            </div>

            <div onClick={() => window.open('https://3d-graph-1ubh.vercel.app/', '_blank')}>
                <div className="project-picture-container" id="project-pic4"></div>
                <div className="project-grid-text-wrapper">
                  <div className="text3">Cylindical Coordinate Visualizer </div>
                  <div className="text4">3D graph of Cylindical / Spherical coordinates using Three.js</div>
                </div>
            </div> */}

            
            {/* <div onClick={() => window.open('https://samkim-arc.vercel.app/', '_blank')}>
                <div className="project-picture-container" id="project-pic3"></div>
                <div className="project-grid-text-wrapper">
                  <div className="text3">Portfolio of my brother</div>
                  <div className="text4">I have contributed in making the website, where I made the layouts and structures</div>
                </div>
            </div> */}

            {/* 
            <div onClick={() => window.open('https://mbti-andysimps0ns-projects.vercel.app/', '_blank')}>
                <div className="project-picture-container" id="project-pic4"></div>
                <div className="project-grid-text-wrapper">
                  <div className="text3">Maslow's hiearchy of needs</div>
                  <div className="text4">Testing Maslow's hiearchy of needs with basic questions</div>
                </div>
            </div> */}


        </div>

    </div>
  )
}

export default Projects
