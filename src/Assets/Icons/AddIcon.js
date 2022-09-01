import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function AddIcon(props) {
  return (
    <Svg
      {...props}
    >
      <Path
        stroke="#42AEEC"
        strokeWidth={3}
        strokeLinecap="round"
        d="M19 1.5L19 33.5"
      />
      <Path
        stroke="#42AEEC"
        strokeWidth={3}
        strokeLinecap="round"
        d="M33.5 17.6538L1.5 17.6538"
      />
    </Svg>
  )
}

AddIcon.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000',
  viewBox: "0 0 35 35"
}

export default AddIcon;
