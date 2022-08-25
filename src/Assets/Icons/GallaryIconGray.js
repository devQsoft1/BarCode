import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function GallaryIconGray(props) {
  return (
    <Svg
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H28V28H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_107_285" transform="scale(.02083)" />
        </Pattern>
        <Image
          id="image0_107_285"
          width={48}
          height={48}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEdklEQVRoge1ZT2gcZRT/vdm/Vg17jR6MhxwkJutOZjfLmqVNqcWEHkpDPAgeAhEqluKl1oo9aFFbL0IViqBYEC9BKxVacrAKJoaY+b7dmhIUlTYNEkURTaR2N5mZ5yGzzRB3NpnJ7PSyP1j27Xvve+/99vu+NzPfAC200EILdxO0lUO5XO4wDOMEEQ0BaAcQaXJNJoBfiegSEb2pqurNRs4NCQgh9gP4BMD9ARboBSvMPJzNZr9wc3AlUC6XO0zTnMPdK76GFQDdmqYt1jNG3UbZy6ZW/A0iGksmk1NdXV2rzaiyhvn5+Xi1Wi1alvU+gA4AbQBOAHiunr8rAXvN1+Sx3t7eL4Muth7sP+hKqVQasyyrtnSG3PyVBrHaa0IymZwKqL5tI5FITDp+Pujm14jAnW7T7GVTD5tyunY+1yXUDJTL5ZRhGC8T0QiABwAsEdE4M7+hadqyn5iNZiBQzMzMtJmmOUlEx7C+OeMAOpj5RQCTU1NTvrpdaASi0ehJAI+6mLsTicRJP3FDIwBg0CE/D+BeIjpSUxDR4P+HbI0wCXQ45POapv0bjUbPO3QP+wkaJoGFmkBEo0KIXaurq6MO+w0/QUMjwMyXHfK7AG4R0TsOl0t+4oZGoFqtngJwzcV8rVKpvO4nbmgE+vv7/wFQBHAGwHUAVfv7tGEY/bbdM0K9kNkXq5fsTyAIcxM3BU2ZASnlIwBOMXMBAIhomplf0TTth6BzBT4DUsoiM88w8zDW72jbbflbKWUx6HyBEpidnd1tt8u2OuY2Zp7Qdf2JIHMGRkDX9SFFUSYA3GerlizLyiiK8hiAJVu3i4g+13Xd9QHFKwIhIKU8QESfAkjaqsVIJLInl8tdVVX1u0gk8jjWWyYAJInoMynloSBy75iAlPIpZr6AjeIXmHkgk8n8VPPJZDILAAYA/Gyr4sw8ruv6MzvNvyMCQoinmfljADFb9aNhGMVsNnt9s6+maYuWZRUBzNuqCBF9KKUc3ezrBb4JSCmfBfARNlrx94qiDOTz+V/cxuRyud9isdheAHO2KsLMH+i6fsRtzFbwRUAIcZiZ33OMv6ooym5VVZcajQOAdDr9ezwe30NEuq0iIjorpXzBTy2eCUgpjwE4h41DMWma5j5VVf/Yboyenp6/FEXZD2DGVhEzvy2E8PxU5omAEOI4M7/lUH1jGMbevr6+P70mzmQyf8disX0AvnKoXxNCnPYSZ9sEhBCvArgTnJm/rlQqg/l8fsVLQifS6fQtAAeIyHn2eVxKeWa7MVzPRoUQBjbOY84COFqzMfPE2traoUKhcNtjzXUxPT19TywWu0BETzrUzpympml179sazYBzQx51yBdTqdTBoIoHgEKhcDuVSh0EcNElp2tncyVARJfrqMcBjHR2dlY9V7kF7Jgjdo7NqFcLgAZLqFQqPWRZ1hzq35iFiWUAPW7H664zoKrqTfs22PcmDQDLiqIMuxUPbNGF7Dcj3Vjv+4tYf/3TbJh2rnMAelRVvRJCzhZaaKEFn/gPzUeAfey3e48AAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  )
}

GallaryIconGray.defaultProps = {
  width: 36,
  height: 36,
  fill: '#000',
  viewBox: "0 0 36 36"
}

export default GallaryIconGray;
