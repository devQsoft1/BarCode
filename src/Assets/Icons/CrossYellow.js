import * as React from "react"
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function CrossYellow(props) {
  return (
    <Svg
    {...props}
  >
    <Path fill="url(#paint0_linear_374_3453)" d="M0 0H61V40H0z" />
      <Circle cx={38.5} cy={19.5} r={14.5} fill="orange" />
      <Path
        d="M32.945 13.923l11.11 11.108m-11.11 0l11.11-11.108"
        stroke="#fff"
        strokeWidth={2.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_374_3453"
          x1={4.54485e-7}
          y1={20}
          x2={63.2182}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.369792} stopColor={props?.stopColor} />
          <Stop offset={1} stopColor="#000" stopOpacity={0} />
        </LinearGradient>
      </Defs>
  </Svg>
  )
}

CrossYellow.defaultProps = {
  width: 61,
  height: 40,
  fill: '#000',
  viewBox: "0 0 61 40"
}

export default CrossYellow;
