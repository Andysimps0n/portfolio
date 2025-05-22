
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';
import { useHelper } from '@react-three/drei';
import { useRef,useEffect } from 'react';



export function RectLight() {
    
    const lightRef = useRef()

    useHelper(lightRef, RectAreaLightHelper)


  return (

    <>
        {/* red */}
        <rectAreaLight
        ref={lightRef}
        intensity={4}
        color= "#0xff0000"
        width={10}
        height={10}
        position={[-10, 0, 7]}
        lookAt={[0, 0, 0]} 
        />
        {/* green */}
        {/* <rectAreaLight
        ref={lightRef}
        intensity={5}
        color="0x00ff00"
        width={4}
        height={10}
        position={[-10, 0, 5]}
        lookAt={[0, 0, 0]} 
        /> */}


        {/* blue */}
        {/* <rectAreaLight
        ref={lightRef}
        intensity={5}
        color="0xff0000"
        width={4}
        height={10}
        position={[-10, 0, 5]}
        lookAt={[0, 0, 0]}
        /> */}
    
    
    </>
  )
}
