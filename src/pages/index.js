import React from 'react'

import Layout from '../components/layout'
import Illustration from '../components/illustration'
import SEO from '../components/seo'
import styled from 'styled-components'
import Card from '../components/Card'
import SimpleCard from '../components/SimpleCard'
import FacebookOSS from '../images/facebookOSS.jpg'
import aws from '../images/aws.png'

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
      <table>
        <thead>
          <tr>
            <th id="zone_MPK" scope="col">
              <attr title="Pacific Standard Time">PST</attr>
            </th>
            <th id="zone_NYC" scope="col">
              <attr title="Eastern Standard Time">EST</attr>
            </th>
            <th id="zone_LON" scope="col">
              <attr title="Greenwich Median Time">GMT</attr>
            </th>
            <th id="desc" scope="col">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td headers="zone_MPK">09:30</td>
            <td headers="zone_NYC">12:30</td>
            <td headers="zone_LON">16:30</td>
            <td headers="desc">Social Session 1</td>
          </tr>
          <tr>
            <td>08:00</td>
            <td>11:00</td>
            <td>16:00</td>
            <td>Welcome Talk</td>
          </tr>
          <tr>
            <td>08:15</td>
            <td>11:15</td>
            <td>16:15</td>
            <td>Talk 1</td>
          </tr>
          <tr>
            <td>08:50</td>
            <td>11:50</td>
            <td>16:50</td>
            <td>Talk 2</td>
          </tr>
          <tr>
            <td>09:30</td>
            <td>12:30</td>
            <td>17:30</td>
            <td>Talk 3</td>
          </tr>
          <tr>
            <td>10:05</td>
            <td>13:05</td>
            <td>18:05</td>
            <td>Talk 4</td>
          </tr>
          <tr>
            <td>10:30</td>
            <td>13:30</td>
            <td>18:30</td>
            <td>Social Session 2</td>
          </tr>
          <tr>
            <td>11:30</td>
            <td>14:30</td>
            <td>19:30</td>
            <td>Talk 5</td>
          </tr>
          <tr>
            <td>12:05</td>
            <td>15:05</td>
            <td>20:05</td>
            <td>Talk 6</td>
          </tr>
          <tr>
            <td>12:45</td>
            <td>15:45</td>
            <td>20:45</td>
            <td>Talk 7</td>
          </tr>
          <tr>
            <td>13:20</td>
            <td>16:20</td>
            <td>21:20</td>
            <td>Talk 8</td>
          </tr>
          <tr>
            <td>14:00</td>
            <td>17:00</td>
            <td>22:00</td>
            <td>Social Session 3</td>
          </tr>
          <tr>
            <td>15:00</td>
            <td>18:00</td>
            <td>23:00</td>
            <td>Event Ends</td>
          </tr>
        </tbody>
      </table>
    </SimpleCard>
    <SimpleCard header="Sponsors">
      <Sponsors>
        <li>
          <a target="_blank" href="https://aws.com">
            <img src={aws} alt="Amazon Web Services" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://facebook.com">
            <img src={FacebookOSS} alt="Facebook OSS" />
          </a>
        </li>
      </Sponsors>
    </SimpleCard>
  </Layout>
)

export default IndexPage
