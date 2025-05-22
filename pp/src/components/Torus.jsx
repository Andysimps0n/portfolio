import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MeshStandardMaterial } from "three";


export function Torus() {
    const torusRef = useRef();
    useFrame(()=>{
        if (torusRef.current) {
            torusRef.current.rotation.y += 0.005
        }
    })

    return (
        <mesh position={[-10, 0, 0]} ref={torusRef}>
            <torusKnotGeometry args={[3, 1, 100, 100]}></torusKnotGeometry>
            <meshStandardMaterial metalness={0.9} roughness={0.1} color="white"></meshStandardMaterial>
        </mesh>
    )
}


