import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function CalenderIcon(props) {
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
          <Use xlinkHref="#image0_4_89" transform="scale(.01)" />
        </Pattern>
        <Image
          id="image0_4_89"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

CalenderIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  viewBox: "0 0 24 24"
}

export default CalenderIcon;
