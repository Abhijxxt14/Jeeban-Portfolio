'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function BackgroundAnimation() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      stars: THREE.Points,
      mouseX = 0,
      mouseY = 0;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;

      renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg-canvas') as HTMLCanvasElement,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);

      const starGeo = new THREE.BufferGeometry();
      const starVertices = [];
      for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = -Math.random() * 2000;
        starVertices.push(x, y, z);
      }
      starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        transparent: true,
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', onWindowResize);

      animate();
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      stars.position.y -= 0.2;
      if (stars.position.y < -1000) {
        stars.position.y = 1000;
      }
      
      const targetX = (mouseX - window.innerWidth / 2) * 0.0005;
      const targetY = (mouseY - window.innerHeight / 2) * 0.0005;
      
      camera.rotation.x += 0.05 * (targetY - camera.rotation.x);
      camera.rotation.y += 0.05 * (targetX - camera.rotation.y);

      renderer.render(scene, camera);
    };

    init();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <div ref={mountRef} className="fixed left-0 top-0 -z-10 h-full w-full">
      <canvas id="bg-canvas"></canvas>
    </div>
  );
}
