import React, { useState } from "react"
import styled from "styled-components"

const Label = styled.label`
  padding-bottom: 5px;
  font-size: 13px;
  display: inline-block;
`

const Input = styled.input`
  border-radius: 2px;
  margin-bottom: 10px;
  width: 100%;
  border: none;
  color: white;

  &[type="text"],
  &[type="email"] {
    display: block;
    border: none;
    padding: 8px 10px;
    background: #353177;
    border: 1px solid #5e5a9c;
  }

  &[type="checkbox"] {
    width: auto;
    display: inline-block;
    margin-right: 10px;
  }

  &[type="submit"] {
    display: block;
    margin-top: 20px;
    border: none;
    background: #8d92df;
    padding: 8px 12px;
    color: #131042;
    border-radius: 4px;
    cursor: pointer;
  }
`

const Stack = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`

export default () => {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Thank you 🎉</h1>
        <p style={{ textAlign: "center" }}>
          There's one more step... Please check your inbox and confirm your
          email address 📧
        </p>
      </>
    )
  }

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
          <Stack class="mc-field-group">
            <div>
              <Label for="mce-FNAME">First Name</Label>
              <Input
                type="text"
                name="FNAME"
                class="required"
                id="mce-FNAME"
                required
              />
            </div>
            <div>
              <Label for="mce-LNAME">Last Name</Label>
              <Input
                type="text"
                name="LNAME"
                class="required"
                id="mce-LNAME"
                required
              />
            </div>
          </Stack>
          <div class="mc-field-group">
            <Label for="mce-EMAIL">Email Address</Label>
            <Input
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
            <Label for="mce-group[3946]-3946-0">
              I have read and agree to abide by the Code of Conduct
            </Label>
          </div>
          <div class="mc-field-group input-group">
            <Input
              type="checkbox"
              name="group[3942][1]"
              id="mce-group[3942]-3942-0"
            />
            <Label style={{ display: "inline" }}>
              I'd like to receive communications about future Women of React
              events and news <strong>(Optional)</strong>
            </Label>
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
            <Input
              type="text"
              name="b_b3435742d799f1fefa641731f_e6a6123095"
              tabindex="-1"
            />
          </div>
          <div class="clear">
            <Input
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
