import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function AddIcon(props) {
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
          <Use xlinkHref="#image0_6_199" transform="scale(.02083)" />
        </Pattern>
        <Image
          id="image0_6_199"
          width={48}
          height={48}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABAUlEQVRoge3XMU4CURCH8W9YoxVHMBSQeAgtgdpEGi+wibfgFgQvYGHhAaCEU8ByCQsbl2ezscCl2WWcbPL/JZs8lmSGL3kNICKdZm6TX9IdJSvgiDFhaTuPNT2PoQCUPAG3wIAjM681fgFw/XsybryWeAb8CwVEU0A0BURTQDQFRFNAtM4H1P+hydMQeMS4ajw5MQbG1ac1xrrFrG8yPljY4fSrcwF7YNh4oY+CVxudvuz8Faq/IhlTSp5J9FvMfsC4ByCxBTaNJxmfZLy1+C0N5GlOnlL1zL3WdP4KKSCaAqIpIJoCoikgmgKiKeAs46v2fGF+AT3egQIoqrOIyF8/arErFZRIG7wAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  )
}

AddIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  viewBox: "0 0 24 24"
}

export default AddIcon;
