"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const Cube = () => {
  const mountRef = useRef<HTMLDivElement>(null); // Explicitly typing the ref

  useEffect(() => {
    if (!mountRef.current) return; // Ensures the ref is linked to a DOM element
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
    scene.add(hemiLightHelper);

    //

    const dirLight = new THREE.DirectionalLight(0xffffff, 3);
    dirLight.color.setHSL(0.1, 1, 0.95);
    dirLight.position.set(-1, 1.75, 1);
    dirLight.position.multiplyScalar(30);
    scene.add(dirLight);

    dirLight.castShadow = true;

    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;

    const d = 50;

    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;

    dirLight.shadow.camera.far = 3500;
    dirLight.shadow.bias = -0.0001;

    const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
    scene.add(dirLightHelper);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    // Loader
    const loader = new GLTFLoader();
    let loadedMesh: THREE.Group<THREE.Object3DEventMap> | null = null;
    loader.load(
      "/dalphan.glb", // Path to your GLTF or GLB file
      (gltf) => {
        loadedMesh = gltf.scene; // Assign the loaded model to loadedMesh
        scene.add(gltf.scene);
        animate();
        gltf.animations; // Array<THREE.AnimationClip>
      },
      undefined,
      (error) => {
        console.error("An error happened:", error);
      }
    );

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    // Cleanup function
    return () => {
      if (!mountRef.current) return; // Ensures the ref is linked to a DOM element

      mountRef.current.removeChild(renderer.domElement);
      scene.remove();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default Cube;