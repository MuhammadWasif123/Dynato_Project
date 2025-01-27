import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useWindowSize } from "./EarthHook";

import CanvasLoader from "../Loader";

const Earth = ({scale}) => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={scale} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const {width}=useWindowSize();
  const scale=width < 768 ? 3 :2.02;
  return (
    <Canvas
    shadows
    frameloop='demand'
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],

      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth scale={scale} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
