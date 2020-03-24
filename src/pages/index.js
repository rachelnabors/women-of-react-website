import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Ilustration from '../components/illustration'
import SEO from '../components/seo'
import styled from 'styled-components'

const MainIllustration = styled(Ilustration)`
  max-width: 100%;
  margin: auto;
  display: block;
  height: auto;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <MainIllustration />
  </Layout>
)

export default IndexPage
