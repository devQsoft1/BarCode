import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function AddIconGray(props) {
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
          <Use xlinkHref="#image0_107_286" transform="scale(.02083)" />
        </Pattern>
        <Image
          id="image0_107_286"
          width={48}
          height={48}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABGUlEQVRoge2XoU7EQBRFz2sJKD6BIJYEvaIKZEGTgOET+AqWr0Eg0BtWgmr/gCw/gcDQXkxJyNI1LcNLk3fUzUxy35zMmIEgCCaNpSququrYzJ6ANs/zs/l8/ppiTpaiFCDLskvgADhsmuYq2ZxUxW3b7n5nSXup5iQT+C9CwJsQ8CYEvAkBb0LAmxDwZvICvR+auq5nwAWwM7jYrJRUdnklaTW0C/iU9FgUxdvmxrYDLoHZiIFI+plLoBzTZ2Y3wNHm+uSfUO8NSDoHrs1sf0T3KXDS5RfgeWiRpHfgvm8v5ad+YWa33QHuiqJYpJgz+ScUAt6EgDch4E0IeBMC3oSANyGwDTP76Mt/TTIBSQ/AGlh3OQiC4Ddfu31GYUGDGpsAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  )
}

AddIconGray.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  viewBox: "0 0 24 24"
}

export default AddIconGray;
