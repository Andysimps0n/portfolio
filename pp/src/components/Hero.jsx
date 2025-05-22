import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Scroll, ScrollControls, useHelper   } from '@react-three/drei'
import { DirectionalLightHelper, Group, RectAreaLight } from 'three'
import HeroHTML from './HeroHTML';


import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';


function RectLight() {
    
    const lightRef = useRef()
    useHelper(lightRef, RectAreaLightHelper)
    useEffect(()=>{
        RectAreaLightUniformsLib.init();
        // if(lightRef.current){
        //     lightRef.current.lookAt(-10,0,0)
        // }
    },[])

  return (
    <rectAreaLight
      ref={lightRef}
      intensity={5}
      color="orange"
      width={4}
      height={10}
      position={[10, 0, 5]}
      lookAt={[0, 0, 0]} // you can use a dummy object to face the light
    />
  )
}


function Torus() {
    const torusRef = useRef();
    useFrame(()=>{
        if (torusRef.current) {
            torusRef.current.rotation.y += 0.005
        }
    })

    return (
        <mesh position={[-10, 0, 0]} ref={torusRef}>
            <torusKnotGeometry args={[3, 1, 100, 100]}></torusKnotGeometry>
            <meshStandardMaterial metalness={0.9} roughness={0.01} color="white"></meshStandardMaterial>
        </mesh>
    )
}

function Light() {

    const redRef = useRef()
    const blueRef = useRef()
    const greenRef = useRef()

    useHelper(blueRef, DirectionalLightHelper, 5, 'red')
    useHelper(redRef, DirectionalLightHelper, 5, 'red')
    useHelper(greenRef, DirectionalLightHelper, 5, 'red')
    return (
        <>
        
            <directionalLight intensity={10} ref={redRef} target-position={[-10, 0, 0]}  position={[-15, 0, 15]} color="#0xff0000"></directionalLight>
            <directionalLight intensity={10} ref={blueRef} target-position={[-10, 0, 0]}  position={[-15, 0, -15]} color="#0x00ff00"></directionalLight>
            <directionalLight intensity={10} ref={greenRef} target-position={[-10, 0, 0]}  position={[-15, 15, -10]} color="0x0000ff"></directionalLight>
        </>
    )


}


function Hero() {
  return (
    <>
        <Canvas camera={{position : [0, 5, -20]}}>


            <ScrollControls pages={3} damping={0} style={{ scrollbarWidth: 'none' }}>
                <Scroll>
                    <Torus></Torus>
                </Scroll>
                <Scroll html>
                    <HeroHTML></HeroHTML>
                </Scroll>
            </ScrollControls>


            <RectLight/>
            {/* <gridHelper args={[100, 50]} /> */}
            <ambientLight intensity={0.7} />
            <Light></Light> 
            <OrbitControls enableZoom={false}></OrbitControls>
        </Canvas>
    </>
  )
}

export default Hero
