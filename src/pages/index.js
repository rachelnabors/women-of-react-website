import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Illustration from "../components/illustration"
import SEO from "../components/seo"
import styled from "styled-components"
import Card from "../components/Card"
import SimpleCard from "../components/SimpleCard"
import Register from "../components/register"
import FacebookOSS from "../sponsors/facebookOSS.jpg"
import aws from "../sponsors/aws.png"
import Glitch from "../components/glitch"
import glitch1 from "../images/glitch1.svg"
import glitch2 from "../images/glitch2.svg"
import glitch3 from "../images/glitch3.svg"
import glitch4 from "../images/glitch4.svg"

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
      Sat, April 25, 2020 <Online>Online Conference</Online>
    </Banner>
    <Card header="WomenOfReact">
      Women of React is an online conference where women take the (virtual)
      stage, but everyone is welcome to attend and participate! Watch the
      stream, ask your questions, forge new and meaningful connections, learn a
      little, laugh a little. Put together by and for women working with React,
      this event is small, from the heart, and very much a labor of love meant
      to bring people together.
      <Glitch
        width="220"
        src={glitch2}
        style={{ bottom: "8px", left: "-104px" }}
      />
    </Card>
    <SimpleCard header="Schedule">
      <Glitch
        width="296"
        src={glitch4}
        style={{ bottom: "18px", right: "-129px" }}
      />
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
              Welcome Talk with{" "}
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
            <th scope="row">Fireside Chat</th>
            <td>12:30</td>
            <td>15:30</td>
            <td>19:30</td>
          </tr>
          <tr>
            <th scope="row">Talk 4</th>
            <td>13:05</td>
            <td>16:05</td>
            <td>20:05</td>
          </tr>
          <tr>
            <th scope="row">Talk 5</th>
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
            <th scope="row">Talk 6</th>
            <td>15:00</td>
            <td>18:00</td>
            <td>22:00</td>
          </tr>
          <tr>
            <th scope="row">Talk 7</th>
            <td>15:35</td>
            <td>17:35</td>
            <td>22:35</td>
          </tr>
          <tr>
            <th scope="row">Q & A</th>
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
    <SimpleCard header="Register">
      <Register />
    </SimpleCard>
    <SimpleCard header="Frequently Asked Questions">
      <dl>
        <dt>Why are you doing this?</dt>
        <dd>Because we want to bring women who work with React together.</dd>
        <dt>Who can attend?</dt>
        <dd>
          Anyone can attend—so long as they adhere to our{" "}
          <Link to="code-of-conduct">Code of Conduct</Link>.
        </dd>
        <dt>What does it cost?</dt>
        <dd>Nothing! It's free!</dd>
        <dt>Will it be captioned?</dt>
        <dd>Yes! We will have live captioning!</dd>
        <dt>Can I sponsor this event?</dt>
        <dd>
          Nope! We took care of all our basic costs ourselves! This event is
          entirely free and from the heart &lt;3
        </dd>
        <dt>Will there be moderation?</dt>
        <dd>
          Yes! We have a zero-troll policy and the mods to enforce it. (We
          always need more mods!{" "}
          <a href="mailto:organizers@womenofreact.com">Contact us</a> to
          volunteer!)
        </dd>
        <dt>Will I need to be on video?</dt>
        <dd>No! Using your camera is not necessary for participating!</dd>
      </dl>
      <Glitch
        width="256"
        src={glitch3}
        style={{ bottom: "18px", right: "-84px" }}
      />
    </SimpleCard>
    <SimpleCard header="Sponsors">
      <Glitch
        width="304"
        src={glitch1}
        style={{ bottom: "10px", left: "-129px" }}
      />
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
