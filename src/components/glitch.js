import React from "react"

const Glitch = props => (
  <img
    width={props.width}
    src={props.src}
    alt=""
    style={{ position: "absolute", opacity: 0.5, ...props.style }}
  />
)

export default Glitch
