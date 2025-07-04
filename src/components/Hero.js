"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Text } from "@react-three/drei";

// Enhanced floating icosahedron with glow effect
function FloatingIcosahedron({ position, scale = 1, color = "#3b82f6" }) {
  const mesh = useRef();
  const glowMesh = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.3;
    mesh.current.rotation.y = time * 0.2;
    mesh.current.position.y = Math.sin(time * 0.8) * 0.3;

    // Glow effect rotation
    if (glowMesh.current) {
      glowMesh.current.rotation.x = time * 0.1;
      glowMesh.current.rotation.z = time * 0.15;
    }
  });

  return (
    <group position={position}>
      {/* Outer glow */}
      <mesh ref={glowMesh} scale={scale * 1.3}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main mesh */}
      <mesh ref={mesh} scale={scale}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color={color}
          emissive="#1d4ed8"
          emissiveIntensity={0.2}
          metalness={0.4}
          roughness={0.3}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh ref={mesh} scale={scale * 1.01}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color="#93c5fd"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

// Floating octahedron with morphing
function FloatingOctahedron({ position, scale = 1 }) {
  const mesh = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.5;
    mesh.current.rotation.z = time * 0.3;
    mesh.current.position.y = position[1] + Math.sin(time * 1.2) * 0.4;
    mesh.current.position.x = position[0] + Math.cos(time * 0.8) * 0.2;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#f59e0b"
        emissive="#d97706"
        emissiveIntensity={0.1}
        metalness={0.5}
        roughness={0.4}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

// Floating cube with complex rotation
function FloatingCube({ position, scale = 1 }) {
  const mesh = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.6;
    mesh.current.rotation.y = time * 0.4;
    mesh.current.rotation.z = time * 0.2;
    mesh.current.position.y = position[1] + Math.sin(time * 0.9) * 0.3;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#7c3aed"
        emissiveIntensity={0.12}
        metalness={0.3}
        roughness={0.5}
      />
    </mesh>
  );
}

// Particle system
function FloatingParticles() {
  const points = useRef();

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(200 * 3);

    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={points} geometry={particlesGeometry}>
      <pointsMaterial
        color="#3b82f6"
        size={0.02}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingTextIcon({ emoji = "🧺", position = [0, 0, 0], size = 1 }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      // Only animate Y-axis (vertical float)
      ref.current.position.y = position[1] + Math.sin(t * 2) * 0.2;
      ref.current.rotation.y = t * 0.5;
    }
  });

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={size}
      color="#6366f1"
      anchorX="center"
      anchorY="middle"
    >
      {emoji}
    </Text>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      {/* Enhanced lighting */}
      <ambientLight intensity={0.8} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.4}
        penumbra={1}
        intensity={0.3}
        color="#ffffff"
      />
      <spotLight
        position={[-10, 10, -10]}
        angle={0.4}
        penumbra={1}
        intensity={0.2}
        color="#ffffff"
      />
      <pointLight position={[0, -10, 0]} intensity={0.1} color="#ffffff" />
      {/* Multiple floating objects - responsive positioning */}
      <FloatingParticles />
      <FloatingTextIcon emoji="🧺" position={[-9, 2, -1]} size={1.2} />
      <FloatingTextIcon emoji="🧼" position={[-4.5, 2, -1]} size={1} />

      <FloatingTextIcon emoji="🧹" position={[-2, 1, -2]} size={1.1} />
      <FloatingTextIcon emoji="🛁" position={[4.5, 0, -1]} size={0.9} />
      <FloatingTextIcon emoji="🛍️" position={[-9, 2, -6]} size={1.1} />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.3}
        enablePan={false}
      />
    </>
  );
}

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] bg-white overflow-hidden flex items-center justify-center px-4 sm:px-8 pt-8 pb-12">
      {/* Background Canvas */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 70 }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 2]}
        >
          <Scene />
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center space-y-6 pl-4 sm:pl-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block"
          >
            <span className="px-3 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium font-inter">
              New Generation Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-poppins"
          >
            Revolutionizing <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-playfair">
                Urban Services
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-700 text-base sm:text-lg max-w-lg leading-relaxed font-inter"
          >
            From doorstep repairs to healthcare, professional services to
            personal care – all services on one intelligent platform. Connect
            with verified professionals, get instant quotes, and experience
            seamless service delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 pt-2"
          >
            <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 font-poppins">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>

            <button className="relative overflow-hidden group bg-white text-gray-800 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 font-poppins">
              <span className="relative z-10">How It Works</span>
              <span className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Large Video Container */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-w-16 aspect-h-9 w-full h-[650px] min-h-[400px] rounded-2xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-white/80 backdrop-blur-lg">
  {/* Glowing ring behind on hover */}
  <div className="absolute inset-0 z-0 rounded-2xl ring-1 ring-blue-500/20 group-hover:ring-2 group-hover:ring-blue-500/40 transition-all duration-500 pointer-events-none" />

  {/* Video Player */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover z-10 relative"
    poster="/images/video-poster.jpg"
  >
    <source src="/images/landingvid.mp4" type="video/mp4" />
    <source src="/images/landingvid.mp4" type="video/webm" />
    Your browser does not support the video tag.
  </video>

  {/* Decorative Play Button (Optional) */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center ring-1 ring-white/30 shadow-md group-hover:scale-105 transition-transform duration-300">
      <svg className="w-6 h-6 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6 4l12 6-12 6V4z" />
      </svg>
    </div>
  </div>

  {/* Caption Overlay */}
  <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
    {/* <h3 className="text-xl font-semibold mb-1 tracking-tight text-gray-200"> See Our Platform in Action</h3>
    <p className="text-sm text-gray-100 opacity-90">How Zonomo connects customers with service professionals</p> */}
  </div>
</div>

          {/* Floating elements (kept from original) */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-6 -left-6 w-12 h-12 bg-blue-400/20 rounded-full blur-md"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-400/20 rounded-full blur-md"
          />
        </motion.div>
      </div>
    </div>
  );
}