"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
} from "@react-three/drei";
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
        <meshBasicMaterial color="#93c5fd" wireframe transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

// Floating torus with pulsing effect
function FloatingTorus({ position, scale = 1 }) {
  const mesh = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.4;
    mesh.current.rotation.y = time * 0.6;
    mesh.current.position.x = position[0] + Math.sin(time * 0.5) * 0.5;
    mesh.current.position.y = position[1] + Math.cos(time * 0.7) * 0.3;

    // Pulsing scale
    const pulse = 1 + Math.sin(time * 2) * 0.1;
    mesh.current.scale.setScalar(scale * pulse);
  });

  return (
    <mesh ref={mesh} position={position}>
      <torusGeometry args={[0.8, 0.3, 16, 32]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#295FF8"
        emissiveIntensity={0.15}
        metalness={0.4}
        roughness={0.3}
      />
    </mesh>
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
      <FloatingTorus position={[2, 2, -1]} scale={0.6} />
      <FloatingParticles />
      <FloatingTextIcon emoji="🧺" position={[-4, 2, -1]} size={1.2} />
      <FloatingTextIcon emoji="🧼" position={[-4.5, 0, -1]} size={1} />

      <FloatingTextIcon emoji="🧹" position={[4, 2, -1]} size={1.1} />
      <FloatingTextIcon emoji="🛁" position={[4.5, 0, -1]} size={0.9} />

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
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-white z-0"></div>

      {/* Enhanced 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 70 }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 2]}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Content with enhanced styling */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight"
        >
          Your Urban Lifestyle <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
            Revolutionized
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-4 sm:mb-6 font-medium"
        >
          AI-powered services at your fingertips
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-3xl"
        >
          Zonomo is transforming urban living with intelligent, voice-enabled
          services - from home repairs and cleaning to beauty treatments and
          healthcare, all accessible through our conversational AI platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 w-full justify-center items-center"
        >
          <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold text-sm sm:text-base w-full sm:w-auto shadow-lg">
            Try Zonomo AI
          </button>
          <button className="border-2 border-blue-400 text-blue-700 bg-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 cursor-pointer text-sm sm:text-base w-full sm:w-auto font-medium shadow-md">
            See how it works
          </button>
        </motion.div>
      </div>

      {/* Enhanced floating elements */}
      <div
        className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border-2 border-blue-300 rounded-full animate-spin"
        style={{ animationDuration: "20s" }}
      ></div>
      <div className="absolute top-16 sm:top-20 right-6 sm:right-20 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 border-2 border-purple-300 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 sm:bottom-32 right-16 sm:right-32 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full animate-pulse"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl animate-pulse opacity-60"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full blur-3xl animate-pulse opacity-60"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
}
