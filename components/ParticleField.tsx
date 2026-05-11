"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ─── Scene setup ────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    camera.position.z = 10;
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ─── Particles ──────────────────────────────────
    const COUNT = 120;
    const nodes: THREE.Vector3[] = [];
    const positions = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
      );
      nodes.push(v);
      positions[i * 3] = v.x;
      positions[i * 3 + 1] = v.y;
      positions[i * 3 + 2] = v.z;
    }

    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xc8ff00,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pointGeo, pointMat);
    scene.add(points);

    // ─── Connection lines ────────────────────────────
    const linePositions: number[] = [];
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 3.2) {
          linePositions.push(
            nodes[i].x,
            nodes[i].y,
            nodes[i].z,
            nodes[j].x,
            nodes[j].y,
            nodes[j].z,
          );
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(linePositions), 3),
    );
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xc8ff00,
      transparent: true,
      opacity: 0.08,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // ─── Mouse tracking ──────────────────────────────
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ─── Resize handler ──────────────────────────────
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // ─── Animation loop ──────────────────────────────
    let animId: number;
    const startTime = Date.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = (Date.now() - startTime) / 1000;

      points.rotation.y = t * 0.04 + mouse.x * 0.3;
      points.rotation.x = t * 0.02 - mouse.y * 0.2;
      lines.rotation.y = points.rotation.y;
      lines.rotation.x = points.rotation.x;

      renderer.render(scene, camera);
    };
    animate();

    // ─── Cleanup ─────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      pointGeo.dispose();
      lineGeo.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
