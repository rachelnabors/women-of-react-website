import React, { useRef, useEffect, useState } from "react"
import { applyParallax } from "../utils/relax"

const Glitch = props => {
  const parallaxRef = useRef(null)

  const [animations, setAnimations] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    if (mediaQuery.matches) setAnimations(false)
  }, [])

  useEffect(() => {
    applyParallax(parallaxRef.current, {
      speed: 1.2,
      center: true,
    })
  }, [parallaxRef])
  return animations ? (
    <img
      ref={parallaxRef}
      width={props.width}
      src={props.src}
      alt=""
      style={{ position: "absolute", opacity: 0.5, ...props.style }}
    />
  ) : (
    <img
      width={props.width}
      src={props.src}
      alt=""
      style={{ position: "absolute", opacity: 0.5, ...props.style }}
    />
  )
}

export default Glitch
