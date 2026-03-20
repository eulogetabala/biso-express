import type { Transition, Variants } from "framer-motion";

/** Courbe type « smooth out » pour les entrées au scroll */
export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const transition: Transition = {
  duration: 0.55,
  ease: easeOutExpo,
};

export const transitionSlow: Transition = {
  duration: 0.7,
  ease: easeOutExpo,
};

export const springSoft: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 0.9,
};

export const springBouncy: Transition = {
  type: "spring",
  stiffness: 140,
  damping: 16,
  mass: 0.85,
};

/** Déclenche l’animation un peu avant que le bloc soit entièrement visible */
export const viewportOnce = {
  once: true as const,
  amount: 0.22,
  margin: "-48px 0px -64px 0px",
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springSoft,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

/** Titres de section : stagger sans masquer tout le conteneur */
export const sectionHeaderStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.03,
    },
  },
};

export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.15,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};
