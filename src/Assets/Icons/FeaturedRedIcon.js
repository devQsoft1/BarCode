import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function FeaturedRedIcon(props) {
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
          <Use xlinkHref="#image0_64_430" transform="scale(.01)" />
        </Pattern>
        <Image
          id="image0_64_430"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAEjUlEQVR4nO3dT2hcVRTH8d95+Wc0/ZfcDFEjmHQU3JjMTGgtWVjpwkX9g9CFXbgRoQtF60aUbupSF4JZCBY3WoRii9m0iJDFKIEiOvNoZSDYN5OEtgj5pzGgMZl3j5ssxtLW1Ln3vTPhfCCbzHDPnXx5b5JZ5AJKKaWUUkoppZSSg9IazIVCxxKtjoORBduHGcgQqD2VvYDrBCyAgpsgRKZncJqKxXoae0k8yGIhmwfbtwE6CmBf0vO36TeAL3EQfJT5KQqTHJxYkOUns4O2gz8E4+Uk5zbJgukc2eAdc+WXm0kMTOQHs5zPPmXBkwAGkpjnwSJzcCwTXvve9yDvQRbzw88BdAFAl+9Znq2D+Fh/qXbJ5xCvQZbyjz3BsJcB7PE5J0FrMfH4QKn2s68Bga+Frx8a7GbYi9g5MQBgVxvT17OHH73P1wBvQbrXO98EMOxr/RRle9ba3vC1uJdb1kpheE/MNAu5v9Y2h2kl6MRQ3w/RH66X9nKFWA6ex06NAQDEvXbDHvWxtJ9bFtkXvawrCZGX1+glCDM97WNdURiHfSzrPMi1bLYLgHG9rjiEzNZrdcp5ELMrHkDrfDTSDNp6rU45D2JtW4/rNaXy8Vq9/R2i/h8NIowGEUaDCKNBhNEgwmgQYTSIMBpEGA0ijAYRRoMIo0GE0SDCaBBhNIgwGkQYDSKMBhFGgwijQYTRIMJoEGE0iDAaRBgNIowGEUaDCKNBhNEgwmgQYTSIMBpEGA0ijAYRRoMIo0GE0SDCaBBhNIgwGkQYDSKMBhFGgwijQYTRIMLslCC1ra+W1/JBCDjfbuMCuttHAZxJez/NSuV4CEfWiOl1E0ZnG753YqGQnSLmT9Gi/xW1Va+QHxnI3xIDAJApRefb2eYATKewr6a1WhAmxoShveOZcjW605P2hbPzZvcjzwD0PoA4wf01rZVuWdfB9IoJo++28+StE3JOL+ey39rAfgmmIc/7c6IlrhAGJrvaO3L924zRqC+MLrcBOQDnPGzNOelXyF9M/F6mVPu4mUV6S7VVAMeXcvu/YeJPAHrA0f6ck3uFECox8cFmYzQyYfULIjsGINFzpe6FxCBMjInfV6ng4+AUU5qbMbT34NYbvnW9frOk3bIWQPyqKXs+VqhU2gRweik3PM1EnwN4yOe8eyHpCpkC1Ud9n/HUyIS1qTrTKEAXk5r5XyQE+ZuY3zXl6rP9pflfkx7+YBgtmnL0AoATAP5Mev6tUg5CMxzQIRPWPqAU7+cEcH+5eiaI6QAB3g782o40g5yN6/ePJX2S5t30XYkqa7vjA8SYSGsPzt/ULezmXU+rYFoh4tdMuTrperYLQ8W5dQBvLeX3F5npMxD33um5MdkN1/Pdnx9S754D08ptH2QUgxgjUmM0MuXqZBBjBIzi7R5nYLl/s3ve9VznQahS2SDgJP79od4mg06ZsHqk72p0w/VMX/quRjdMWD3CoFMANhseigPQSapUnF8h3k7CWRjL5ijmlxBwnWC/MqW5GV+zkrA4Mvw42nCcQJ02oAuS3vuUUkoppZRSSinlyz/KgE5yogdpFQAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  )
}

FeaturedRedIcon.defaultProps = {
  width: 30,
  height: 30,
  fill: '#000',
  viewBox: "0 0 30 30"
}

export default FeaturedRedIcon;
