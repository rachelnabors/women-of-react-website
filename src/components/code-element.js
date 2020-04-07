import React from "react"
import styled from "styled-components"

const CodeElementContainer = styled.span`
  color: #fce2bb;
  font-family: "Inconsolata", monospace;
`

const CodeElement = ({ element }) => (
  <CodeElementContainer>{element}</CodeElementContainer>
)

export default CodeElement
