import React from 'react'

import Layout from '../components/layout'
import Illustration from '../components/illustration'
import SEO from '../components/seo'
import styled from 'styled-components'
import Card from '../components/Card'
import SimpleCard from '../components/SimpleCard'
import FacebookOSS from '../sponsors/facebookOSS.jpg'
import aws from '../sponsors/aws.png'

const MainIllustration = styled(Illustration)`
  max-width: 100%;
  margin: auto;
  display: block;
  height: auto;
`

const Sponsors = styled.ul`
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  li {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  img {
    width: 100%;
  }
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

const Table = styled.table`
  width: 100%;
  th {
    font-weight: normal;
    text-align: left;
  }

  a {
    color: #ff73c6;
  }
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
      <Table>
        <thead>
          <tr>
            <th colspan="1"></th>
            <th scope="col">
              <attr title="Pacific Standard Time">PST</attr>
            </th>
            <th scope="col">
              <attr title="Eastern Standard Time">EST</attr>
            </th>
            <th scope="col">
              <attr title="Greenwich Median Time">GMT</attr>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Social Milling</th>
            <td>09:30</td>
            <td>12:30</td>
            <td>16:30</td>
          </tr>
          <tr>
            <th scope="row">
              Welcome Talk with{' '}
              <a href="https://twitter.com/rachelnabors">Rachel Nabors</a>
            </th>
            <td>9:45</td>
            <td>12:45</td>
            <td>16:45</td>
          </tr>
          <tr>
            <th scope="row">Talk 1</th>
            <td>10:00</td>
            <td>13:00</td>
            <td>17:00</td>
          </tr>
          <tr>
            <th scope="row">Talk 2</th>
            <td>10:35</td>
            <td>13:35</td>
            <td>17:35</td>
          </tr>
          <tr>
            <th scope="row">Talk 3</th>
            <td>11:10</td>
            <td>14:10</td>
            <td>18:10</td>
          </tr>
          <tr>
            <th scope="row">Longer Break—Grab a bite to eat</th>
            <td>11:45</td>
            <td>14:45</td>
            <td>18:45</td>
          </tr>
          <tr>
            <th scope="row">Talk 4</th>
            <td>12:30</td>
            <td>15:30</td>
            <td>19:30</td>
          </tr>
          <tr>
            <th scope="row">Talk 5</th>
            <td>13:05</td>
            <td>16:05</td>
            <td>20:05</td>
          </tr>
          <tr>
            <th scope="row">Talk 6</th>
            <td>13:40</td>
            <td>16:40</td>
            <td>20:40</td>
          </tr>
          <tr>
            <th scope="row">Break</th>
            <td>14:15</td>
            <td>17:15</td>
            <td>21:15</td>
          </tr>
          <tr>
            <th scope="row">Lightning Talks</th>
            <td>14:30</td>
            <td>17:30</td>
            <td>21:30</td>
          </tr>
          <tr>
            <th scope="row">Talk 7</th>
            <td>15:00</td>
            <td>18:00</td>
            <td>22:00</td>
          </tr>
          <tr>
            <th scope="row">Talk 8</th>
            <td>15:35</td>
            <td>17:35</td>
            <td>22:35</td>
          </tr>
          <tr>
            <th scope="row">Q &amp; A</th>
            <td>16:10</td>
            <td>19:10</td>
            <td>23:10</td>
          </tr>
          <tr>
            <th scope="row">Goodbye, we love you!</th>
            <td>17:00</td>
            <td>20:00</td>
            <td>24:00</td>
          </tr>
        </tbody>
      </Table>
    </SimpleCard>
    <SimpleCard header="Sponsors">
      <Sponsors>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://aws.com">
            <img src={aws} alt="Amazon Web Services" />
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://facebook.com"
          >
            <img src={FacebookOSS} alt="Facebook OSS" />
          </a>
        </li>
      </Sponsors>
    </SimpleCard>
  </Layout>
)

export default IndexPage
