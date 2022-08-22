import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function EyeCrossIconWhite(props) {
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
          <Use xlinkHref="#image0_3_16" transform="scale(.01042)" />
        </Pattern>
        <Image
          id="image0_3_16"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

EyeCrossIconWhite.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  viewBox: "0 0 24 24"
}

export default EyeCrossIconWhite;
