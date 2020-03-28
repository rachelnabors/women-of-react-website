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
  font-family: "Inconsolata", monospace;

  a:link {
    color: #61dafb;
  }
  a:visited {
    color: #8d92df;
  }
  a:hover,
  a:active {
    color: #61dafb;
  }
`

const Heading = styled.h2`
  display: inline;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  padding: 0;
  color: #ff73c6;

  :before {
    content: "export const ";
    color: #fce2bb;
  }
  :after {
    content: " = ";
  }
`

const Space = styled.span`
  :before {
    color: #fce2bb;
    content: "() ";
  }
  :after {
    color: #ff73c6;
    content: "=> ( ";
  }
`

const Text = styled.p`
  margin: 0;
  padding: 0;
  margin-left: 20px;

  @media screen and (max-width: 600px) {
    margin-left: 10px;
  }
`

const Code = styled.code`
  font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  :after {
    content: ");";
    color: #ff73c6;
  }
`

const HeaderButtons = styled(Buttons)`
  position: absolute;
  left: 15px;
  top: 15px;
`

const Card = ({ header, children, text }) => (
  <CardComponent>
    <HeaderButtons />
    <Heading export>{header}</Heading>
    <Space />
    <Code>{text ? <Text>{children}</Text> : children}</Code>
  </CardComponent>
)

export default Card
