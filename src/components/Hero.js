"use client";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  Torus,
  Box,
  Octahedron,
} from "@react-three/drei";
import { motion } from "framer-motion";
import Link from "next/link";
import * as THREE from "three";
import { Text } from "@react-three/drei";

// Enhanced floating icosahedron with glow effect
function FloatingIcosahedron({ position, scale = 1, color = "#8b5cf6" }) {
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
          color={color}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main mesh */}
      <mesh ref={mesh} scale={scale}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh ref={mesh} scale={scale * 1.01}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
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
        color="#ec4899"
        emissive="#ec4899"
        emissiveIntensity={0.4}
        metalness={0.9}
        roughness={0.1}
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
        color="#06b6d4"
        emissive="#06b6d4"
        emissiveIntensity={0.2}
        metalness={0.7}
        roughness={0.3}
        transparent
        opacity={0.8}
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
        color="#10b981"
        emissive="#10b981"
        emissiveIntensity={0.3}
        metalness={0.6}
        roughness={0.4}
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
        color="#8b5cf6"
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
      color="white"
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
      <ambientLight intensity={0.2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="#8b5cf6"
      />
      <spotLight
        position={[-10, 10, -10]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#ec4899"
      />
      <pointLight position={[0, -10, 0]} intensity={0.3} color="#06b6d4" />
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        !event.target.closest("nav") &&
        !event.target.closest("[data-mobile-menu]")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [mobileMenuOpen]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-950">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-950/50 to-indigo-950/60 z-0"></div>

      {/* Navigation */}
      <nav className="relative z-30 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-between items-center backdrop-blur-sm bg-black/20">
        <div className="cursor-pointer text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Zonomo
        </div>
        <div className="hidden lg:flex space-x-6 xl:space-x-8">
          {["Services", "How It Works", "About", "Cities"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm xl:text-base"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
            Login
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 sm:px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base">
            Sign up
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 z-40 bg-gradient-to-br from-purple-900/95 via-violet-900/95 to-indigo-900/95 backdrop-blur-md lg:hidden border-t border-purple-400/30 shadow-xl shadow-purple-500/20"
            data-mobile-menu
          >
            <div className="px-4 py-6 space-y-4">
              {["Services", "How It Works", "About", "Cities"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-purple-100 hover:text-white hover:bg-purple-800/30 transition-all duration-300 text-lg py-3 px-3 rounded-lg border-b border-purple-400/20 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          Your Urban Lifestyle <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Revolutionized
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-purple-200 mb-4 sm:mb-6 font-light"
        >
          AI-powered services at your fingertips
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-3xl"
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
          <button className="cursor-pointer bg-gradient-to-r from-purple-900 via-gray-600 to-cyan-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 font-semibold text-sm sm:text-base w-full sm:w-auto">
            Try Zonomo AI
          </button>
          <button className="border-2 border-purple-500/50 text-purple-200 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl hover:bg-purple-900/30 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm cursor-pointer text-sm sm:text-base w-full sm:w-auto">
            See how it works
          </button>
        </motion.div>
      </div>

      {/* Enhanced floating elements */}
      <div
        className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border border-purple-500/30 rounded-full animate-spin"
        style={{ animationDuration: "20s" }}
      ></div>
      <div className="absolute top-16 sm:top-20 right-6 sm:right-20 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 border border-pink-500/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 sm:bottom-32 right-16 sm:right-32 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-pulse"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
}
