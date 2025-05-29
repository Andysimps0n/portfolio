//  Module Imports
import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Scroll, ScrollControls, useHelper, useScroll   } from '@react-three/drei'
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

    
    function ScrollLogger() {
        const scroll = useScroll();
        let functionSwitch = true

        useFrame(() => {
            let scrollRounded = Math.ceil(scroll.offset * 100) / 100
            console.log(scrollRounded); // 0 = top, 1 = bottom

            if (scrollRounded >= 0.4 && functionSwitch) {
                scroll.el.scrollTo({
                top: scroll.el.scrollHeight * 0.2,
                behavior: 'smooth',});
                functionSwitch = false
            }
        });

        return null
    }
    const projectRef = useRef();


    useEffect(() => {
    RectAreaLightUniformsLib.init();
    }, []);

  return (
        <Canvas camera={{position : [0, 0, -20]}}>
            <ScrollControls style={{scrollbarWidth : "none"}} pages={5} damping={0} >
                <Scroll>
                    <ScrollLogger></ScrollLogger>
                    <Torus></Torus>
                    <RectLight></RectLight>
                </Scroll>
                <Scroll html>
                    <div id="scroll-container">
                        <div className="scroll-wrapper">
                            <HeroHTML></HeroHTML>
                            <Projects></Projects>
                            {/* <About></About> */}
                        </div>
                    </div>
                </Scroll>
            </ScrollControls>


            {/* <gridHelper args={[100, 50]} /> */}
            <OrbitControls enableZoom={false}></OrbitControls>
            <ambientLight intensity={0.4} />
        </Canvas>
  )
}

export default Hero
