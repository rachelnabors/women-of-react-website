import React from "react"
import sophie from "../images/sophie.jpg"
import luna from "../images/luna.jpg"
import shubhie from "../images/shubhie.jpg"
import lunaleaps from "../images/lunaleaps.jpg"
import flarnie from "../images/flarnie.png"
import nicole from "../images/nicole.jpeg"

export default () => (
  <>
    <li>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/sophiebits"
      >
        <img src={sophie} alt="" />
        <p>Sophie Alpert</p>
      </a>
    </li>
    <li>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/ProvablyFlarnie"
      >
        <img src={flarnie} alt="" />
        <p>Flarnie Marchan</p>
      </a>
    </li>
    <li>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/lunaruan"
      >
        <img src={luna} alt="" />
        <p>Luna Ruan</p>
      </a>
    </li>
    <li>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/shubhie"
      >
        <img src={shubhie} alt="" />
        <p>Shubhie Panicker</p>
      </a>
    </li>
    <li>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/stubbornella"
      >
        <img src={nicole} alt="" />
        <p>Nicole Sullivan</p>
      </a>
    </li>
    <li>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/lunaleaps"
      >
        <img src={lunaleaps} alt="" />
        <p> Luna Wei</p>
      </a>
    </li>
  </>
)
