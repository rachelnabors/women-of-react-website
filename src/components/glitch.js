import React, { useRef, useEffect, useState } from "react"
import { applyParallax } from "../utils/relax"
import styled from "styled-components"

const Img = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

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
    <Img
      ref={parallaxRef}
      width={props.width}
      src={props.src}
      alt=""
      style={{ position: "absolute", opacity: 0.5, ...props.style }}
    />
  ) : (
    <Img
      width={props.width}
      src={props.src}
      alt=""
      style={{ position: "absolute", opacity: 0.5, ...props.style }}
    />
  )
}

export default Glitch
