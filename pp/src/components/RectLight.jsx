
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';
import { useHelper } from '@react-three/drei';
import { useRef,useEffect } from 'react';



export function RectLight() {
    
    const redRef = useRef()
    const greenRef = useRef()
    const blueRef = useRef()

    // useHelper(redRef, RectAreaLightHelper)
    // useHelper(greenRef, RectAreaLightHelper)
    // useHelper(blueRef, RectAreaLightHelper)


  return (

    <>
        {/* red */}
        <rectAreaLight
        ref={redRef}
        intensity={4}
         color="hsl(4, 100.00%, 50.00%)"
        width={40}
        height={50}
        position={[0, 0, 16]}
        lookAt={[0, 0, 0]} 
        />
        {/* green */}
        <rectAreaLight
        ref={greenRef}
        intensity={5}
        color="hsl(4, 100.00%, 50.00%)"
        width={5}
        height={10}
        position={[-6, 0, 5]}
        lookAt={[0, 0, 0]} 
        />


        {/* blue */}
        <rectAreaLight
        ref={blueRef}
        intensity={5}
        color="hsl(4, 100.00%, 50.00%)"
        width={5}
        height={10}
        position={[-14, 0, 5]}
        lookAt={[0, 0, 0]}
        />
    
    
    </>
  )
}
