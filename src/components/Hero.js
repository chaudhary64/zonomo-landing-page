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
      <FloatingTextIcon emoji="🧺" position={[-8, 2, -1]} size={1.2} />
      <FloatingTextIcon emoji="🧼" position={[-4.5, 0, -1]} size={1} />

      <FloatingTextIcon emoji="🧹" position={[-2, 1, -2]} size={1.1} />
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

      <div className="relative z-10 w-full max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center space-y-6"
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

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
          >
            {[
              { label: "Active Users", value: "2.5M+", color: "text-blue-600" },
              {
                label: "Partner Stores",
                value: "50K+",
                color: "text-purple-600",
              },
              {
                label: "Avg Delivery",
                value: "15min",
                color: "text-indigo-600",
              },
              { label: "Success Rate", value: "98%", color: "text-green-600" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100"
              >
                <p className={`text-2xl font-bold ${item.color}`}>
                  {item.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{item.label}</p>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>

        {/* Right Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="grid grid-cols-2 grid-rows-3 gap-3 h-[500px] sm:h-[550px]">
            {/* Large Image - Top Left, spans 2 rows */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative row-span-2 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-slate-100 overflow-hidden group"
            >
              <motion.img
                src="/images/ac-repairs.jpg"
                alt="AC Repair Service"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-medium text-sm font-poppins">
                  Home Repairs
                </span>
              </div>
            </motion.div>

            {/* Small Top Right */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-slate-100 overflow-hidden group"
            >
              <motion.img
                src="/images/laundry.jpg"
                alt="Laundry Service"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-medium text-sm font-poppins">
                  Laundry Services
                </span>
              </div>
            </motion.div>

            {/* Small Middle Right */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-slate-100 overflow-hidden group"
            >
              <motion.img
                src="/images/medical-examination-service-2.jpg"
                alt="Medical Service"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-medium text-sm font-poppins">
                  Healthcare
                </span>
              </div>
            </motion.div>

            {/* Bottom Full Width */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative col-span-2 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-slate-100 overflow-hidden group"
            >
              <motion.img
                src="/images/medical-examination-service-1.jpg"
                alt="Medical Examination"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-medium font-poppins">
                  Doctor Home Visits
                </span>
              </div>
            </motion.div>
          </div>

          {/* Floating elements */}
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
