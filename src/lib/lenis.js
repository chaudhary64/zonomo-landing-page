// Utility functions for Lenis smooth scrolling

let lenisInstance = null;

export const setLenisInstance = (lenis) => {
  lenisInstance = lenis;
};

export const scrollTo = (target, options = {}) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset: 0,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    });
  }
};

export const scrollToTop = (options = {}) => {
  scrollTo(0, options);
};

export const scrollToElement = (selector, options = {}) => {
  const element = document.querySelector(selector);
  if (element) {
    scrollTo(element, options);
  }
};

export const getLenisInstance = () => lenisInstance;
