import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function UserIconSmall(props) {
  return (
    <Svg
    // width={24}
    // height={24}
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
          <Use xlinkHref="#image0_4_91" transform="scale(.01)" />
        </Pattern>
        <Image
          id="image0_4_91"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
  </Svg>
  )
}

UserIconSmall.defaultProps={
    width: 24,
    height:24,
    fill:'#000',
    viewBox:"0 0 24 24"
}

export default UserIconSmall;
