import React from "react"
import { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"

const Style = createGlobalStyle`
    input {
      border-radius: 2px;
      margin-bottom: 10px;
      width: 100%;
      border: none;
      color: white;
    }

    input[type="text"],
    input[type="email"] {
      display: block;
      border: none;
      padding: 8px 10px;
      background: #353177;
      border: 1px solid #5e5a9c;
    }

    input[type="checkbox"] {
      width: auto;
      display: inline-block;
      margin-right: 10px;
    }

    input[type="submit"] {
      display: block;
      margin-top: 20px;
      border: none;
      background: #eb58af;
      padding: 8px 12px;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }

    label {
      padding-bottom: 5px;
      font-size: 16px;
      display: inline-block;
    }

    .stack {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }

    @media screen and (max-width: 600px) {
      .stack {
        grid-template-columns: 1fr;
        grid-gap: 0;
      }
    }

    .form {
      padding: 8px;
    }
  `

export default () => {
  return (
    <div id="mc_embed_signup" style={{ width: "100%" }} className="form">
      <Style />
      <form
        action="https://womenofreact.us19.list-manage.com/subscribe/post?u=b3435742d799f1fefa641731f&amp;id=e6a6123095"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
      >
        <div id="mc_embed_signup_scroll">
          <div class="stack">
            <div>
              <label HtmlFor="mce-FNAME">First Name</label>
              <input
                type="text"
                name="FNAME"
                class="required"
                id="mce-FNAME"
                required
              />
            </div>
            <div>
              <label HtmlFor="mce-LNAME">Last Name</label>
              <input
                type="text"
                name="LNAME"
                class="required"
                id="mce-LNAME"
                required
              />
            </div>
          </div>
          <div class="mc-field-group">
            <label HtmlFor="mce-EMAIL">Email Address</label>
            <input
              type="email"
              name="EMAIL"
              class="required email"
              id="mce-EMAIL"
              required
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <input
              type="checkbox"
              name="group[3946][2]"
              class="required"
              id="mce-group[3946]-3946-0"
              required
            />
            <label HtmlFor="mce-group[3946]-3946-0">
              I have read and agree to abide by the{" "}
              <Link to="code-of-conduct">Code of Conduct</Link>
            </label>
          </div>
          <div class="mc-field-group input-group">
            <input
              type="checkbox"
              name="group[3942][1]"
              id="mce-group[3942]-3942-0"
            />
            <label
              style={{ display: "inline" }}
              HtmlFor="mce-group[3942]-3942-0"
            >
              I'd like to receive communications about future Women of React
              events and news <strong>(Optional)</strong>
            </label>
          </div>
          <div id="mce-responses" class="clear">
            <div
              class="response"
              id="mce-error-response"
              style={{ display: "none" }}
            ></div>
            <div
              class="response"
              id="mce-success-response"
              style={{ display: "none" }}
            ></div>
          </div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_b3435742d799f1fefa641731f_e6a6123095"
              tabindex="-1"
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
  )
}
