import React from "react"
import styled from "styled-components"
import Buttons from "./buttons"

const CardComponent = styled.section`
  margin-top: 50px;
  background: #141043;
  box-shadow: 0px 25px 60px rgba(25, 11, 57, 0.25);
  border-radius: 20px;
  padding: 70px 30px;
  font-weight: normal;
  font-size: 18px;
  margin-bottom: 70px;
  position: relative;

  @media screen and (min-width: 600px) {
    padding: 70px 50px;
  }
`

const Heading = styled.h2`
  font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: inline;
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  padding: 0;
  color: white;
  position: absolute;
  left: 50%;
  top: 4px;
  transform: translateX(-50%);
  color: #ff73c6;
`

const HeaderButtons = styled(Buttons)`
  position: absolute;
  left: 15px;
  top: 15px;
`

const Card = ({ header, children }) => (
  <CardComponent>
    <HeaderButtons />
    <Heading export>{header}</Heading>
    {children}
  </CardComponent>
)

export default Card
