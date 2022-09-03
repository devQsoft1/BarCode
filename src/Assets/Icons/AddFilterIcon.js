import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function AddFilterIcon(props) {
  return (
    <Svg
   
    
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
        stroke={props.stroke}
        strokeWidth={3}
        strokeLinecap="round"
        d="M10.2998 1.5L10.2998 18.5"
      />
      <Path
        stroke={props.stroke}
        strokeWidth={3}
        strokeLinecap="round"
        d="M18.5 10.3L1.5 10.3"
      />
  </Svg>
  )
}

AddFilterIcon.defaultProps = {
  width: 20,
  height: 20,
  fill: '#fff',
  viewBox:"0 0 20 20"
}

export default AddFilterIcon;
