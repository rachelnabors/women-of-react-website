/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import normalize from 'normalize.css'
import styled, { createGlobalStyle } from 'styled-components'
import Logo from './logo'

const Styled = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap');
  

  body {
    font-family: 'Inconsolata', monospace;
    background: #F5DCDC;
    color: white;
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
        <Logo />
      </Header>
      <div
        style={{
          margin: `0 auto`,
          width: 800,
          maxWidth: '80%',
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
