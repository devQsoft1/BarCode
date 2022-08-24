import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function BackIconBlack(props) {
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
          <Use xlinkHref="#image0_29_179" transform="scale(.02083)" />
        </Pattern>
        <Image
          id="image0_29_179"
          width={48}
          height={48}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAs0lEQVRoge3YwQqCQBSF4d9Z11sXrSKoRSvrFQOL3NliKlBUuMJwb3Q+mJWb/8iAIIiIiMhXAk5AA2ycW8wSUAPd+9x8c2yG8R2wdy0yqIAz/fgLeVR4iveieC9j8TWKL0/xXhTv6Ug/3us8ge1UZDUzoAFWxtGl3IH12IO563At02LWkm+D2U9/cT80IgqNiEIjotCIKDQiirE/cwfXogWGIx6+Ocsk8ptvgZ1zi4iI/IEXCHKXMQVQPdIAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  )
}

BackIconBlack.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  viewBox: "0 0 24 24"
}

export default BackIconBlack;
