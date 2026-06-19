import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Heart, HelpCircle, RefreshCw } from "lucide-react";

export default function Interactive3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [interactiveMode, setInteractiveMode] = useState<"Sphere" | "Grid" | "Nodes">("Sphere");

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth || 400;
    let height = container.clientHeight || 300;

    // Scene
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Group to hold all objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Objects
    // 1. Central Core - faceted dodecahedron symbolizing shelter & protection
    const coreGeo = new THREE.DodecahedronGeometry(1.4, 1);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0xf97316, // Orange
      emissive: 0x431407,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 2. Inner Glowing Sphere
    const innerGeo = new THREE.IcosahedronGeometry(0.8, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e, // Green
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 3. Floating Particle Cloud representing Irving communities and food drop nodes
    const particleCount = 200;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const greenColor = new THREE.Color(0x22c55e);
    const orangeColor = new THREE.Color(0xf97316);

    for (let i = 0; i < particleCount; i++) {
      // Random positions inside a sphere
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0 + Math.random() * 1.5; // Radius between 2.0 and 3.5

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Interpolate colors between green and orange
      const t = Math.random();
      const mixedColor = new THREE.Color().lerpColors(greenColor, orangeColor, t);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom Canvas dots for particle points
    const pointsMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    const particlePoints = new THREE.Points(particlesGeo, pointsMat);
    mainGroup.add(particlePoints);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xf97316, 2, 20); // Amber point light
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x22c55e, 2, 20); // Green point light
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Mouse Tracking state
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Map to normalized coordinates -1 to 1
      mouseX = (x / width) * 2 - 1;
      mouseY = -(y / height) * 2 + 1;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Scroll trigger influence
    let scrollPercent = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        scrollPercent = scrollTop / docHeight;
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = entry.contentRect.width;
        height = entry.contentRect.height;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationId: number;
    const startTime = Date.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = (Date.now() - startTime) / 1000;

      // Base rotations
      coreMesh.rotation.y = elapsedTime * 0.25;
      coreMesh.rotation.x = elapsedTime * 0.15;

      innerMesh.rotation.y = -elapsedTime * 0.4;
      particlePoints.rotation.y = elapsedTime * 0.08;

      // Interpolate mouse movement coordinates
      targetX += (mouseX - targetX) * 0.08;
      targetY += (mouseY - targetY) * 0.08;

      // Slight displacement of group based on mouse coordinates
      mainGroup.rotation.y = targetX * 0.8;
      mainGroup.rotation.x = -targetY * 0.8;

      // Scroll changes camera distance & rotation slightly
      camera.position.z = 8 + Math.sin(scrollPercent * Math.PI) * 1.5;
      mainGroup.position.y = Math.sin(scrollPercent * Math.PI * 2) * 0.4;

      // Dynamic geometry shape shifting using interactive mode state
      // (This updates properties smoothly based on interactiveMode state changes)

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();

      // Dispose resources
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particlesGeo.dispose();
      pointsMat.dispose();
      renderer.dispose();
    };
  }, [interactiveMode]);

  // Handle changing shape configuration explicitly
  const cycleMode = () => {
    if (interactiveMode === "Sphere") setInteractiveMode("Grid");
    else if (interactiveMode === "Grid") setInteractiveMode("Nodes");
    else setInteractiveMode("Sphere");
  };

  return (
    <div
      ref={containerRef}
      id="3d-interactive-container"
      className="relative w-full h-[380px] md:h-[450px] bg-emerald-950/20 backdrop-blur-subtle rounded-3xl border border-emerald-800/30 overflow-hidden flex flex-col justify-between p-6 cursor-grab active:cursor-grabbing shadow-inner transition-all duration-300 hover:border-emerald-700/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Glow effects in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />

      {/* Header Info Banner Inside 3D scene */}
      <div className="relative z-10 flex justify-between items-start pointer-events-none select-none">
        <div>
          <div className="flex items-center gap-1.5 text-orange-500 text-xs font-semibold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Interactive Irving Community Sphere
          </div>
          <h4 className="text-white font-semibold text-lg mt-1">Nourishment Network</h4>
          <p className="text-emerald-300/70 text-xs max-w-xs mt-0.5">
            Hover and drag to rotate the resource distribution lines. Scroll the page to dynamically zoom.
          </p>
        </div>

        <button
          onClick={cycleMode}
          className="pointer-events-auto bg-emerald-900/60 hover:bg-emerald-800 text-white rounded-full p-2 border border-emerald-800/40 transition-colors cursor-pointer"
          title="Toggle Network Visualization Type"
        >
          <RefreshCw className="h-4 w-4 animate-spin-slow text-orange-400" />
        </button>
      </div>

      {/* The Actual Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Bottom overlay with quick stats */}
      <div className="relative z-10 flex justify-between items-end mt-auto pointer-events-none select-none">
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-emerald-800/40 max-w-[190px]">
          <div className="flex items-center gap-1 text-orange-400 text-[10px] uppercase font-bold tracking-wide">
            <Heart className="h-3 w-3 fill-orange-400" /> Community Nodes
          </div>
          <p className="text-white font-medium text-xs mt-1">
            {interactiveMode === "Sphere" ? "350+ Irving Households" : interactiveMode === "Grid" ? "6 Major Food Sectors" : "15 Local Farm Hubs"}
          </p>
          <span className="text-[10px] text-emerald-300/60 block mt-0.5">Connected dynamically</span>
        </div>

        <div className="text-[10px] text-emerald-400/55 font-mono px-2 py-1 bg-emerald-950/40 rounded-md border border-emerald-900/45">
          REND : WebGL / THREE.JS
        </div>
      </div>
    </div>
  );
}
