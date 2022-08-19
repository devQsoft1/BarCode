import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function AppleIcon(props) {
  return (
    <Svg
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H30V30H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_3_27" transform="scale(.01)" />
        </Pattern>
        <Image
          id="image0_3_27"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

AppleIcon.defaultProps = {
  width: 30,
  height: 30,
  fill: '#000',
  viewBox: "0 0 30 30"
}

export default AppleIcon;
