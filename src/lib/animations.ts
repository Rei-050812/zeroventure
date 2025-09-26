import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  initial: {
    opacity: 0,
    y: 8
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: 'easeOut'
    }
  }
}

export const fade: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
}

export const scaleIn: Variants = {
  initial: {
    scale: 0.98,
    opacity: 0.9
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.18
    }
  }
}

export const containerStagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04
    }
  }
}

export const springCTA: Variants = {
  initial: {
    scale: 1
  },
  whileHover: {
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 340,
      damping: 24
    }
  },
  whileTap: {
    scale: 0.98
  }
}

export const slideInFromLeft: Variants = {
  initial: {
    opacity: 0,
    x: -20
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
}

export const slideInFromRight: Variants = {
  initial: {
    opacity: 0,
    x: 20
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
}

export const underlineAnimation = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.15,
      ease: 'easeOut'
    }
  }
}