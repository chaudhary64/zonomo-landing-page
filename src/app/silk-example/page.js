"use client";

import SilkPlaneWrapper from "@/components/SilkPlaneWrapper";

export default function SilkExample() {
  return (
    <div className="w-full h-screen">
      <div className="relative w-full h-full">
        <SilkPlaneWrapper
          speed={3}
          scale={1.5}
          color="#7B7481"
          noiseIntensity={1.2}
          rotation={0.1}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
            Silk Plane Background
          </h1>
        </div>
      </div>
    </div>
  );
}
