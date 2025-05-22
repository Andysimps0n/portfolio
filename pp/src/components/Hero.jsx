import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Scroll, ScrollControls, useHelper   } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'
import HeroHTML from './HeroHTML';

function Sphere() {
    const sphereRef = useRef();
    useFrame(()=>{
        if (sphereRef.current) {
            sphereRef.current.rotation.y += 0.005
            // sphereRef.current.rotation.x += 0.005
        }
    })

    return (
        <mesh ref={sphereRef}>
            <sphereGeometry args={[15, 32, 32]}></sphereGeometry>
            <meshPhongMaterial  color="grey"></meshPhongMaterial>
        </mesh>
    )
}

function Light() {
    const lightRef = useRef();
    useHelper(lightRef, DirectionalLightHelper, 5, 'red')
    return <directionalLight intensity={2} ref={lightRef} position={[0, 40, -1]} color="white"></directionalLight>

}


function Hero() {
  return (
    <>
        <Canvas camera={{position : [30,30,30]}}>


            <ScrollControls style={{ scrollbarWidth: 'none' }}>
                <Scroll>
                    <Sphere></Sphere>
                </Scroll>
                <Scroll html>
                    <HeroHTML></HeroHTML>
                </Scroll>

            </ScrollControls>





            <ambientLight intensity={0.25} />
            <Light></Light> 
            <OrbitControls enableZoom={true}></OrbitControls>
        </Canvas>
    </>
  )
}

export default Hero
