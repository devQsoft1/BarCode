import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image, G } from "react-native-svg"

function AppleIcon(props) {
  return (
    <Svg
      // width={30}
      // height={30}
    // {...props}
    >
        <G filter="url(#filter0_d_2743_3278)">
        <G filter="url(#filter1_d_2743_3278)">
          <Path
            d="M8 30C8 16.745 18.745 6 32 6s24 10.745 24 24-10.745 24-24 24S8 43.255 8 30z"
            fill="#fff"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.267 15.6c.251 1.706-.444 3.378-1.36 4.561-.98 1.269-2.67 2.25-4.307 2.199-.3-1.634.466-3.317 1.397-4.45 1.022-1.248 2.772-2.206 4.27-2.31zm4.918 24.021c.844-1.293 1.16-1.946 1.815-3.406-4.766-1.813-5.53-8.588-.813-11.189-1.438-1.804-3.46-2.85-5.368-2.85-1.375 0-2.317.36-3.174.686-.714.272-1.368.52-2.164.52-.86 0-1.62-.272-2.418-.558-.876-.314-1.796-.644-2.937-.644-2.141 0-4.42 1.308-5.866 3.545-2.031 3.15-1.685 9.074 1.61 14.12 1.177 1.805 2.75 3.834 4.808 3.852.854.008 1.422-.246 2.037-.522.704-.316 1.468-.659 2.793-.666 1.332-.008 2.085.34 2.78.66.598.276 1.154.532 2 .523 2.06-.017 3.72-2.265 4.897-4.07z"
            fill="#0B0B0A"
          />
        </G>
      </G>
      <Defs></Defs>
    </Svg>
  )
}

AppleIcon.defaultProps = {
  width: 64,
  height: 64,
  fill: '#000',
  viewBox: "0 0 64 64"
}

export default AppleIcon;
