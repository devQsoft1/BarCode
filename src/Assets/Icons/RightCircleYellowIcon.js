import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RightCircleYellowIcon(props) {
    return (
        <Svg

            {...props}
        >
            <Path
                d="M38 58.5l9.688 9.562L63 46"
                stroke="#FFA500"
                strokeWidth={4}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
RightCircleYellowIcon.defaultProps = {
    width: 100,
    height: 100,
    fill: '#fff',
    viewBox: "0 0 100 100"
}

export default RightCircleYellowIcon
