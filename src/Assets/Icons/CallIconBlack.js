import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function CallIconBlack(props) {
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
          <Use xlinkHref="#image0_6_223" transform="scale(.01)" />
        </Pattern>
        <Image
          id="image0_6_223"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

CallIconBlack.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  viewBox: "0 0 24 24"
}

export default CallIconBlack;
