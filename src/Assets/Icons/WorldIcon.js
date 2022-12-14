import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function WorldIcon(props) {
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
          <Use xlinkHref="#image0_6_222" transform="scale(.01)" />
        </Pattern>
        <Image
          id="image0_6_222"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

WorldIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  viewBox: "0 0 24 24"
}

export default WorldIcon;
