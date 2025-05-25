import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Scroll, ScrollControls, useHelper   } from '@react-three/drei'
import { DirectionalLightHelper, Group, RectAreaLight } from 'three'
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';

import HeroHTML from './HeroHTML';
import About from './About'
import {RectLight} from './RectLight';
import {Torus} from './Torus'

function Hero() {

    useEffect(() => {
    RectAreaLightUniformsLib.init();
    }, []);

  return (
    <>
        <Canvas camera={{position : [0, 5, -20]}}>


            <ScrollControls pages={10} damping={0} style={{ scrollbarWidth: 'none' }}>
                <Scroll>
                    <Torus></Torus>
                    <RectLight></RectLight>
                </Scroll>
                <Scroll html>
                    <div id="scroll-container">
                        <div className="scroll-wrapper">
                            <HeroHTML></HeroHTML>
                            <About></About>
                        </div>
                    </div>
                </Scroll>
            </ScrollControls>


            {/* <gridHelper args={[100, 50]} /> */}
            <ambientLight intensity={0.4} />
            <OrbitControls enableZoom={false}></OrbitControls>
        </Canvas>
    </>
  )
}

export default Hero
