import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function MessageIconWhite(props) {
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
          <Use xlinkHref="#image0_3_15" transform="scale(.01)" />
        </Pattern>
        <Image
          id="image0_3_15"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

MessageIconWhite.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  viewBox: "0 0 24 24"
}

export default MessageIconWhite;
