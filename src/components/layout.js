import { Link } from "gatsby"
import React from "react"
import normalize from "normalize.css"
import styled, { createGlobalStyle } from "styled-components"
import Logo from "./logo"
import bg from "../images/bg_diag.svg"

const Styled = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap');

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    background: #F5DCDC url(${bg}) left bottom no-repeat;
    color: white;
    padding: 0 1em;

    * {
      box-sizing: border-box;
    }
  }

  footer {
    text-align: center;
    color: #130f41;
    margin-bottom: 4em;
  }

  dt { font-weight: bold }
  dd { margin-bottom: 1em}
`

const Header = styled.header`
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => {
  return (
    <>
      <Styled />
      <Header>
        <Logo />
      </Header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 800,
        }}
      >
        <main>{children}</main>
        <footer>
          <p>
            Organized by{" "}
            <a href="https://twitter.com/rachelnabors">Rachel Nabors</a>,{" "}
            <a href="https://twitter.com/NikkitaFTW">Sara Vieira</a>,{" "}
            <a href="https://twitter.com/gurlcode">Jenn Creighton</a> &amp;{" "}
            <a href="https://twitter.com/_phzn">Kevin Lewis</a>
          </p>
          <p>
            Adorable design by{" "}
            <a href="https://twitter.com/miuki_miu">Elizabet Oliveira</a>
          </p>
          <p>
            Read and abide by our{" "}
            <Link to="code-of-conduct">Code of Conduct</Link> if you wanna roll
            with us.
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
