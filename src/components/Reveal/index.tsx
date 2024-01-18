import React, { useEffect, useRef } from 'react'
import { ComponentProps } from './type'
import { motion, useAnimation } from 'framer-motion'

const Reveal = ({ children, width }: ComponentProps) => {
  const ref = useRef(null)
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          mainControls.start('visible')
          slideControls.start('visible')
        } else {
          mainControls.start('hidden')
          slideControls.start('hidden')
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [mainControls, slideControls])

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      />
    </div>
  )
}

export default Reveal
