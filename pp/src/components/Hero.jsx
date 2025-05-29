//  Module Imports
import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Scroll, ScrollControls, useScroll   } from '@react-three/drei'
import { DirectionalLightHelper, Group, RectAreaLight } from 'three'
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';


//  HTML Components
import HeroHTML from './HeroHTML';
import About from './About'
import Projects from './Projects';


// R3F Components
import {RectLight} from './RectLight';
import {Torus} from './Torus'

function Hero() {
    const scroll = useScroll();

    // Read current scroll offset (0 to 1)
    // useFrame(() => {
    //     console.log(scroll.offset); // 0 = top, 1 = bottom
    // });
    const projectRef = useRef();

    const handleScroll = () => {
        projectRef.current.scrollIntoView({ behavior : 'smooth' })
    }

    useEffect(() => {
    RectAreaLightUniformsLib.init();
    }, []);

  return (
    <>
        <Canvas camera={{position : [0, 0, -20]}}>


            <ScrollControls style={{scrollbarWidth : 'none'}} spages={4} damping={0} >
                <Scroll>
                    <Torus></Torus>
                    <RectLight></RectLight>
                </Scroll>
                <Scroll html>
                    <div id="scroll-container">
                        <div className="scroll-wrapper">
                            <HeroHTML handleScroll={handleScroll}></HeroHTML>
                            <Projects projectRef={projectRef}></Projects>
                            {/* <About></About> */}
                        </div>
                    </div>
                </Scroll>
            </ScrollControls>


            {/* <gridHelper args={[100, 50]} /> */}
            <OrbitControls enableZoom={false}></OrbitControls>
            <ambientLight intensity={0.4} />
        </Canvas>
    </>
  )
}

export default Hero
