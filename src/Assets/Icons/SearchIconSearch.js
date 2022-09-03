import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function SearchIconSearch(props) {
  return (
    <Svg
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
       <Path
        d="M20.445 20.447l6.22 6.221m-3.553-12.659a9.104 9.104 0 11-18.208 0 9.104 9.104 0 0118.208 0z"
        stroke={props.stroke}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

SearchIconSearch.defaultProps = {
  width: 32,
  height: 32,
  fill: '#A6A6A6',
  viewBox: "0 0 32 32"
}

export default SearchIconSearch;
