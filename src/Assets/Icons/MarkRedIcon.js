import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function MarkRedIcon(props) {
  return (
    <Svg
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H24V24H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_6_220" transform="scale(.01)" />
        </Pattern>
        <Image
          id="image0_6_220"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

MarkRedIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  viewBox: "0 0 24 24"
}

export default MarkRedIcon;
