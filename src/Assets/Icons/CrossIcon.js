import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  Pattern,
  Use,
  Image
} from "react-native-svg"

function CrossIcon(props) {
  return (
    <Svg
      {...props}
    >
     <G filter="url(#filter0_d_57_181)">
        <Circle cx={29} cy={25} r={25} fill="#D9D9D9" />
      </G>
      <Path fill="url(#pattern0)" d="M15 11H43V39H15z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_57_181" transform="scale(.02083)" />
        </Pattern>
        <Image
          id="image0_57_181"
          width={48}
          height={48}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABLElEQVRoge2ZyQ6CQBAFhX83enGJJnrCfzQu4VZeJGLLIDJ2z5B0HQn0qweMgs5mjuM4jhbAHLgAO6A0zC2BPXAFFjGDzryoLEo85atW7jlm2Jp3VEt0yAOsYgYWwFEMPGmUUMuyKKGeoRlgdpU1gixv0b8Hmsv/MziZvBA4jBEIyJt8x3SJ/FQiG3khNKhEdvJCrLdEtvINfSWyl2+g+zmmCmzLS74hcCWmId/QU0JFXutsFAO35UVgwX4s7NSenUx6EQfOfMXrY3TUY4cJffJin/xKDJEX++ZT4hd5cUz6EmPkxbHpSsTIixn2JQLy03il1Ag0K6EZpF7C4iypZVjepypZwFYMTPHj7iZm4N1KvpUpS9xihi2BGthYyLdyy2dmTcwfHI7jOM43HvCe7Aq/E1X0AAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  )
}

CrossIcon.defaultProps = {
  width: 58,
  height: 58,
  fill: '#000',
  viewBox: "0 0 58 58"
}

export default CrossIcon;
