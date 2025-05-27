import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MeshStandardMaterial } from "three";


export function Torus() {
    const torusRef = useRef();
    useFrame(()=>{
        if (torusRef.current) {
            torusRef.current.rotation.z += 0.001
        }

        torusRef.current.rotation.y = 3

    })

    return (
        <mesh rotation={[1, 0, 0]} position={[0, 0, 0]}  ref={torusRef}>
            <torusKnotGeometry args={[10, 2, 100, 100]}></torusKnotGeometry>
            <meshStandardMaterial metalness={0.9} roughness={0.1} color="white"></meshStandardMaterial>
        </mesh>
    )
}


