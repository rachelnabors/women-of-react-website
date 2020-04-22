import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Illustration from "../components/illustration"
import Speakers from "../components/speakers"
import CodeElement from "../components/code-element"
import styled from "styled-components"
import Card from "../components/card"
import Register from "../components/register"
import FacebookOSS from "../sponsors/facebookOSS.jpg"
import aws from "../sponsors/aws.png"
import Glitch from "../components/glitch"
import glitch1 from "../images/glitch1.svg"
import glitch2 from "../images/glitch2.svg"
import glitch3 from "../images/glitch3.svg"
import glitch4 from "../images/glitch4.svg"
import jenn from "../images/p_jenn-c.jpg"
import rachel from "../images/p_rachel-n.jpg"
import sara from "../images/p_sara-v.jpg"
import kevin from "../images/p_kevin.jpg"

const MainIllustration = styled(Illustration)`
  max-width: 100%;
  margin: auto;
  display: block;
  height: auto;
`

const ImageGrid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  display: flex;
  align-items: flex-start;
  padding: 8px;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

  &.folks img {
    border-radius: 50%;
  }

  p {
    margin: 12px 0 0 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
    padding: 0;
    text-align: center;
    width: calc(25% - 20px);
    margin-bottom: 20px;

    @media screen and (max-width: 700px) {
      width: calc(50% - 20px);
    }

    @media screen and (max-width: 600px) {
      width: 100%;
      padding-bottom: 40px;
    }
  }

  img {
    max-width: 120px;
    display: block;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
      max-width: 150px;
    }
  }
`

const Banner = styled.div`
  width: 250px;
  height: 85px;
  transform: rotate(-2deg);
  background: #130f41;
  margin: auto;
  text-align: center;
  margin-bottom: -40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
`

const Online = styled.span`
  display: block;
  color: #fce2bb;
  margin-top: 8px;
`

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  width: 100%;

  @media screen and (max-width: 400px) {
    font-size: 16px;
  }

  tbody tr:nth-child(odd) {
    background-color: #221e4e;
  }

  td {
    padding: 8px;
  }

  th {
    font-weight: normal;
    text-align: left;
    padding: 8px;
  }

  a {
    color: #ff73c6;
  }
`

const Dl = styled.dl``

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Women of React Conf—Saturday, April 25, 2020</title>
        <meta
          name="title"
          content="Women of React Conf—Saturday, April 25, 2020"
        />
        <meta
          name="description"
          content="An online event featuring talks from women in the React community from around the world!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://womenofreact.com/" />
        <meta
          property="og:title"
          content="Women of React Conf—Saturday, April 25, 2020"
        />
        <meta
          property="og:description"
          content="An online event featuring talks from women in the React community from around the world!"
        />
        <meta
          property="og:image"
          content="https://womenofreact.com/women-of-react_hero.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://womenofreact.com/" />
        <meta
          property="twitter:title"
          content="Women of React Conf—Saturday, April 25, 2020"
        />
        <meta
          property="twitter:description"
          content="An online event featuring talks from women in the React community from around the world!"
        />
        <meta
          property="twitter:image"
          content="https://womenofreact.com/women-of-react_hero.png"
        />
      </Helmet>
      <Banner>
        Sat, April 25, 2020 <Online>Online Conference</Online>
      </Banner>
      <MainIllustration />
      <Card header="WomenOfReact" text>
        <CodeElement element="<p>" />
        Women of React is an online conference where women take the (virtual)
        stage, but everyone is welcome to attend and participate! Watch the
        stream, ask your questions, forge new and meaningful connections, learn
        a little, laugh a little. Put together by and for women working with
        React, this event is small, from the heart, and very much a labor of
        love meant to bring people together.
        <CodeElement element="</p>" />
        <Glitch
          width="220"
          src={glitch2}
          style={{ bottom: "8px", left: "-104px" }}
        />
      </Card>
      <Card header="Schedule">
        <Glitch
          width="296"
          src={glitch4}
          style={{ bottom: "18px", right: "-129px" }}
        />
        <Table>
          <thead>
            <tr>
              <th colSpan="1" />
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
              <th scope="row">Socializing</th>
              <td>09:30</td>
              <td>12:30</td>
              <td>17:30</td>
            </tr>
            <tr>
              <th scope="row">
                Welcome Talk with{" "}
                <a href="https://twitter.com/rachelnabors">Rachel Nabors</a>
              </th>
              <td>9:45</td>
              <td>12:45</td>
              <td>17:45</td>
            </tr>
            <tr>
              <th scope="row">
                <a href="https://twitter.com/yurm04">Yuraima</a> TL;DR
                Accessible Components : tips for building out accessible
                components
              </th>
              <td>10:00</td>
              <td>13:00</td>
              <td>18:00</td>
            </tr>
            <tr>
              <th scope="row">
                <a href="https://twitter.com/hellonehha">Neha Sharma</a> on
                Design Systems
              </th>
              <td>10:35</td>
              <td>13:35</td>
              <td>18:35</td>
            </tr>
            <tr>
              <th scope="row">
                <a href="https://twitter.com/TaleyaMirza">Taley'a Mirza</a>{" "}
                Level up your Design System with styled-system
              </th>
              <td>11:10</td>
              <td>14:10</td>
              <td>19:10</td>
            </tr>
            <tr>
              <th scope="row">
                Longer snack break plus yoga with{" "}
                <a href="https://twitter.com/gurlcode">Jenn Creighton</a>!
              </th>
              <td>11:45</td>
              <td>14:45</td>
              <td>19:45</td>
            </tr>
            <tr>
              <th scope="row">Fireside Chat</th>
              <td>12:30</td>
              <td>15:30</td>
              <td>20:30</td>
            </tr>
            <tr>
              <th scope="row">
                <a href="https://twitter.com/Mappletons">Maggie Appleton</a>{" "}
                Drawing the Invisible: How to Explain React through Visual
                Metaphors
              </th>
              <td>13:05</td>
              <td>16:05</td>
              <td>21:05</td>
            </tr>
            <tr>
              <th scope="row">
                <a href="https://twitter.com/imAnushree">Anushree Subramani</a>{" "}
                on React Dev Tools
              </th>
              <td>13:40</td>
              <td>16:40</td>
              <td>21:40</td>
            </tr>
            <tr>
              <th scope="row">Break</th>
              <td>14:15</td>
              <td>17:15</td>
              <td>22:15</td>
            </tr>
            <tr>
              <th scope="row">Lightning Talks</th>
              <td>14:30</td>
              <td>17:30</td>
              <td>22:30</td>
            </tr>
            <tr>
              <th scope="row">
                <a href="https://twitter.com/eveporcello">Eve Porcello</a> React
                Finding the Fun: Using <abbr title="Test Driven Development">TDD</abbr> with React
              </th>
              <td>15:00</td>
              <td>18:00</td>
              <td>23:00</td>
            </tr>
            <tr>
              <th scope="row">
                <a href="https://twitter.com/adriannavaldivi">
                  Adrianna Valdivi
                </a>{" "}
                on preparing for React tech interviews
              </th>
              <td>15:35</td>
              <td>17:35</td>
              <td>23:35</td>
            </tr>
            <tr>
              <th scope="row">Q & A</th>
              <td>16:10</td>
              <td>19:10</td>
              <td>00:10</td>
            </tr>
            <tr>
              <th scope="row">Goodbye, we love you!</th>
              <td>17:00</td>
              <td>20:00</td>
              <td>01:00</td>
            </tr>
          </tbody>
        </Table>
      </Card>
      <Card header="Speakers">
        <ImageGrid className="folks">
          <Speakers />
        </ImageGrid>
      </Card>
      <Card header="Register">
        <Register />
      </Card>
      <Card header="FrequentlyAskedQuestions">
        <Dl>
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
        </Dl>
        <Glitch
          width="256"
          src={glitch3}
          style={{ bottom: "18px", right: "-84px" }}
        />
      </Card>
      <Card header="Team">
        <ImageGrid className="folks">
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/gurlcode"
            >
              <img src={jenn} alt="" />
              <p>Jenn Creighton</p>
            </a>
            Organizer, Mod Maven
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/NikkitaFTW"
            >
              <img src={sara} alt="" />
              <p>Sara Vieira</p>
            </a>
            Organizer, Lightning Wrangler
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/rachelnabors"
            >
              <img src={rachel} alt="" />
              <p>Rachel Nabors</p>
            </a>
            Organizer, Instigator
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/_phzn"
            >
              <img src={kevin} alt="" />
              <p>Kevin Lewis</p>
            </a>
            Organizer, A/V Crew
          </li>
        </ImageGrid>
      </Card>
      <Card header="Sponsors">
        <Glitch
          width="304"
          src={glitch1}
          style={{ bottom: "10px", left: "-129px" }}
        />
        <ImageGrid>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://aws-amplify.github.io/"
            >
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
        </ImageGrid>
      </Card>
    </Layout>
  )
}

export default IndexPage
