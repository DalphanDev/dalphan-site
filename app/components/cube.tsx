"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

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

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      if (!mountRef.current) return; // Ensures the ref is linked to a DOM element

      mountRef.current.removeChild(renderer.domElement);
      scene.remove(cube);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default Cube;
