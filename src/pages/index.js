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
      <div id="mc_embed_signup">
        <form
          action="https://womenofreact.us19.list-manage.com/subscribe/post?u=b3435742d799f1fefa641731f&amp;id=e6a6123095"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <div class="indicates-required">
              <span class="asterisk">*</span> indicates required
            </div>
            <div class="mc-field-group">
              <label for="mce-FNAME">
                First Name <span class="asterisk">*</span>
              </label>
              <input
                type="text"
                value=""
                name="FNAME"
                class="required"
                id="mce-FNAME"
                required
              />
            </div>
            <div class="mc-field-group">
              <label for="mce-LNAME">
                Last Name <span class="asterisk">*</span>
              </label>
              <input
                type="text"
                value=""
                name="LNAME"
                class="required"
                id="mce-LNAME"
                required
              />
            </div>
            <div class="mc-field-group">
              <label for="mce-EMAIL">
                Email Address <span class="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
                required
              />
            </div>
            <div class="mc-field-group input-group">
              <input
                type="checkbox"
                value="2"
                name="group[3946][2]"
                class="required"
                id="mce-group[3946]-3946-0"
                required
              />
              <label for="mce-group[3946]-3946-0">
                I have read and agree to abide by the Code of Conduct*
              </label>
            </div>
            <div class="mc-field-group input-group">
              <input
                type="checkbox"
                value="1"
                name="group[3942][1]"
                id="mce-group[3942]-3942-0"
              />
              <label for="mce-group[3942]-3942-0">
                I'd like to receive communications about future Women of React
                events and news
              </label>
            </div>
            <div id="mce-responses" class="clear">
              <div
                class="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                class="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_b3435742d799f1fefa641731f_e6a6123095"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </div>
        </form>
      </div>
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
