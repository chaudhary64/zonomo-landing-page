"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScrollProvider({ children }) {
  return (
    <>
      <ReactLenis root />
      {children}
    </>
  );
}
