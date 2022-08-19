import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function MsgIcon(props) {
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
          <Use xlinkHref="#image0_4_88" transform="scale(.01)" />
        </Pattern>
        <Image
          id="image0_4_88"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

MsgIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  viewBox: "0 0 24 24"
}

export default MsgIcon;
