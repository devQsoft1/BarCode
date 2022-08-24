import * as React from "react"
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg"

function BackIcon(props) {
  return (
    <Svg
      {...props}
    >
      <Rect width={24} height={24} fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_6_194" transform="scale(0.0208333)" />
        </Pattern>
        <Image
          id="image0_6_194"
          width={48}
          height={48}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAt0lEQVRoge3YwQqCQBSF4Tuu662LViHYopX1ioFF7v4WGUGM5l3IneJ8WxH+MwgDmomIiMgTUAEHoAM20T0uQ3zL2yW6abZMPMA+umsWIAHHj/gTUEW3faX4KIqPMhLfKn5pio+i+EhAQxnuwHasM00M6Mxstcjp+F1TSuvcg6nP4bxQjFdvZo37LX75xn3RiFJoRCk0ohQaUQqNKAX5P3N1dJdLZsQtusltGFEDPbCL7hERkf/3ANI7K8rjmQfxAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  )
}

BackIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  viewBox: "0 0 24 24"
}

export default BackIcon;
