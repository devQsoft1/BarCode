import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BellIcon(props) {
    return (
        <Svg
            {...props}
        >
          <Path
      d="M16.4867 24.4307C15.884 25.4867 14.7467 26.1987 13.444 26.1987C12.14 26.1987 11.0027 25.4867 10.4 24.4293M1 20.5333H25.8893L23.0093 16.2293C22.5693 15.5707 22.3333 14.7973 22.3333 14.0053V9.88933C22.3333 4.98 18.3533 1 13.444 1C8.53467 1 4.55467 4.98 4.55467 9.88933V14.0067C4.55467 14.7987 4.32 15.5733 3.87867 16.2307L1 20.5333Z"
      stroke="white"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
        </Svg>
    )
}

BellIcon.defaultProps = {
    width: 27,
    height: 28,
    fill: '#000',
    viewBox: "0 0 27 28"
}

export default BellIcon;
