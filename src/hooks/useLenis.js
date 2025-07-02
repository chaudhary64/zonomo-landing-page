'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { setLenisInstance } from '../lib/lenis'

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Set the instance for utility functions
    setLenisInstance(lenis)

    // Get scroll value
    lenis.on('scroll', (e) => {
      // You can add scroll event handlers here if needed
      // console.log(e)
    })

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup function
    return () => {
      lenis.destroy()
      setLenisInstance(null)
    }
  }, [])
}
