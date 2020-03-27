import React from "react"
import logo from "../images/logo_women-of-react.svg"
import styled from "styled-components"
import { Link } from "gatsby"

const Tagline = styled.p`
  text-align: center;
`

const Icon = props => (
  <Link to="/">
    <img width={400} src={logo} alt="Women of React" />
  </Link>
)

export default Icon
