import React from 'react'

import Layout from '../components/layout'
import Illustration from '../components/illustration'
import SEO from '../components/seo'
import styled from 'styled-components'
import Card from '../components/Card'
import SimpleCard from '../components/SimpleCard'

const MainIllustration = styled(Illustration)`
  max-width: 100%;
  margin: auto;
  display: block;
  height: auto;
`

const Banner = styled.div`
  width: 250px;
  height: 85px;
  transform: rotate(-2deg);
  background: #130f41;
  margin: auto;
  text-align: center;
  margin-top: -100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Online = styled.span`
  display: block;
  color: #fce2bb;
  margin-top: 8px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Women of React" />
    <MainIllustration />
    <Banner>
      April 25, 2020 <Online>Online Conference</Online>
    </Banner>
    <Card header="WomenOfReact">
      Women of React is a conference for women... The event is taking place on
      April 25, 2020. For those who have seen the Earth from space, and for the
      hundreds and perhaps thousands more who will, the experience most
      certainly changes your perspective.
    </Card>
    <SimpleCard header="Schedule">
      Women of React is a conference for women... The event is taking place on
      April 25, 2020. For those who have seen the Earth from space, and for the
      hundreds and perhaps thousands more who will, the experience most
      certainly changes your perspective.
    </SimpleCard>
  </Layout>
)

export default IndexPage
