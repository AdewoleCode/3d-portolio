
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import SkyScene from "../assets/3d/sky.glb"
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating, ...props }) => {
  const { nodes, materials } = useGLTF(SkyScene);
  const skyRef = useRef()

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta
    }
  })

  return (
    <group {...props} ref={skyRef} >
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={50000}
        />
      </group>
    </group>
  );
}

export default Sky
