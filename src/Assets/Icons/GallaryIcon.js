import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function GallaryIcon(props) {
  return (
    <Svg
      {...props}
    >
    <Path fill="url(#pattern0)" d="M0 0H36V36H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_4_121" transform="scale(.01)" />
        </Pattern>
        <Image
          id="image0_4_121"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

GallaryIcon.defaultProps = {
  width: 36,
  height: 36,
  fill: '#000',
  viewBox: "0 0 36 36"
}

export default GallaryIcon;
