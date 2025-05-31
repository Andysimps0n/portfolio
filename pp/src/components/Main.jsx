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


    useEffect(() => {
    RectAreaLightUniformsLib.init();
    }, []);

  return (
        <Canvas camera={{position : [0, 0, -20]}}>
            <ScrollControls style={{scrollbarWidth : "none"}} pages={5} damping={0} >

                <Scroll>
                    <Torus></Torus>
                    <RectLight></RectLight>
                </Scroll>
                <Scroll html>
                    <div id="scroll-container">
                        <div className="scroll-wrapper">
                            <HeroHTML></HeroHTML>
                            <About></About>
                            <Projects></Projects>
                        </div>
                    </div>
                </Scroll>
            </ScrollControls>


            {/* <gridHelper position={[0, -20, 0]} args={[400, 30]} /> */}
            <OrbitControls enableZoom={false}></OrbitControls>
            <ambientLight intensity={0.4} />
        </Canvas>
  )
}

export default Hero
