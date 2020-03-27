import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "./form.css"

export default () => {
  return (
    <div id="mc_embed_signup" style={{ width: "100%" }}>
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
              <label for="mce-FNAME">First Name</label>
              <input
                type="text"
                name="FNAME"
                class="required"
                id="mce-FNAME"
                required
              />
            </div>
            <div>
              <label for="mce-LNAME">Last Name</label>
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
            <label for="mce-EMAIL">Email Address</label>
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
            <label for="mce-group[3946]-3946-0">
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
            <label style={{ display: "inline" }}>
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
