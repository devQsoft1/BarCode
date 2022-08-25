import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function BorderAddIcon(props) {
  return (
    <Svg
      {...props}
    >
       <Path fill="url(#pattern0)" d="M0 0H48V48H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_107_252" transform="scale(.02083)" />
        </Pattern>
        <Image
          id="image0_107_252"
          width={48}
          height={48}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

BorderAddIcon.defaultProps = {
  width: 48,
  height: 48,
  fill: '#000',
  viewBox: "0 0 48 48"
}

export default BorderAddIcon;
