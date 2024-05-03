"use client";

import { Canvas } from "@react-three/fiber";

function Object(props: any) {
  return (
    <Canvas
      shadows
      camera={{
        position: [-6, 7, 7],
      }}
    >
      <mesh {...props} recieveShadow>
        <boxBufferGeometry args={[20, 1, 10]} />
        <meshPhysicalMaterial color="white" />
      </mesh>
    </Canvas>
  );
}

export default Object;
