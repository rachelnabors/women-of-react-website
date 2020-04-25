import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 800px;
  height: 509px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

const Youtube = () => {
  return (
    <Wrapper>
      <iframe
        width="764"
        height="441"
        src="https://www.youtube-nocookie.com/embed/9jK-NcRmVcw"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <svg
        style={{ position: "absolute", zIndex: -1 }}
        width={800}
        height={509}
        fill="none"
        viewBox="0 0 800 509"
      >
        <g filter="url(#filter0_d)">
          <rect width={800} height={509} fill="url(#paint0_linear)" rx={20} />
        </g>
        <path fill="#171D85" d="M0 367H800V518H0z" />
        <mask
          id="mask0"
          width={800}
          height={151}
          x={0}
          y={367}
          maskUnits="userSpaceOnUse"
        >
          <path fill="#171D85" d="M0 367H800V518H0z" />
        </mask>
        <g fill="#3C83E1" mask="url(#mask0)" opacity={0.4}>
          <path d="M134.161 580.843L329.45 317.256l-.847-.629-195.289 263.588M294.874 580.655l64.867-263.588-1.025-.251-64.867 263.588M-70.478 618l357.689-300.655-.679-.807-357.688 300.654M-250.069 580.994l493.712-263.587-.497-.931-493.713 263.588M-812.368 581.039L200.283 317.451l-.266-1.019-1012.65 263.587M-965.834 486.323l1064.7-168.86-.165-1.042L-966 485.282M607.675 580.215L412.386 316.627l-.847.629 195.289 263.587M447.14 580.404l-64.868-263.588-1.024.251 64.867 263.588M812.145 617.192L454.457 316.538l-.679.807L811.466 618M991.554 580.064L497.843 316.476l-.497.931 493.712 263.587M1553.62 580.019L540.972 316.432l-.266 1.019L1553.35 581.039M1706.99 485.281L642.289 316.421l-.166 1.042 1064.697 168.86" />
          <path d="M-15.62 370.667h824.226v-1.054H-15.62v1.054zM-15.62 382.336h824.226v-1.055H-15.62v1.055zM-15.62 397.266h824.226v-1.055H-15.62v1.055zM-15.62 414.34h825.685v-1.054H-15.62v1.054zM-15.62 434.547h825.685v-1.054H-15.62v1.054zM-15.62 459.387h825.685v-1.054H-15.62v1.054zM-15.62 492.679h824.226v-1.054H-15.62v1.054z" />
        </g>
        <path fill="#343CCB" d="M0 -25H800V367H0z" />
        <path
          fill="#fff"
          d="M688.911 366.984H109.604c0-160.105 129.682-289.895 289.653-289.895 159.972 0 289.654 129.79 289.654 289.895z"
          opacity={0.05}
        />
        <defs>
          <filter
            id="filter0_d"
            width={920}
            height={629}
            x={-60}
            y={-35}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={25} />
            <feGaussianBlur stdDeviation={30} />
            <feColorMatrix values="0 0 0 0 0.0980392 0 0 0 0 0.0431373 0 0 0 0 0.223529 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1={400}
            x2={400}
            y1={0}
            y2={509}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#220D50" />
            <stop offset={1} stopColor="#15052B" />
          </linearGradient>
        </defs>
      </svg>
    </Wrapper>
  )
}
export default Youtube
