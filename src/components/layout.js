import { Link } from "gatsby"
import React from "react"
import normalize from "normalize.css"
import styled, { createGlobalStyle } from "styled-components"
import Logo from "./logo"

const Styled = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap');

  a {
    color: #F5DCDC;
  }
  

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    background: #F5DCDC;
    color: white;

    * {
      box-sizing: border-box;
    }
  }
`

const Header = styled.header`
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => {
  return (
    <>
      <Styled />
      <Header>
        <Link to="/">
          <Logo />
        </Link>
      </Header>
      <div
        style={{
          margin: `0 auto`,
          width: 800,
          maxWidth: "80%",
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
