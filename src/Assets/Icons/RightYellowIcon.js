import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function RightYellowIcon(props) {
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
          <Use xlinkHref="#image0_4_149" transform="scale(.01)" />
        </Pattern>
        <Image
          id="image0_4_149"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAACv0lEQVR4nO3aMW4TQRiG4XfjpKSITA1cAFHABSK4Ag0gcRE6LoIFTqR0lAQszpALUFBDQZEGhIbiZ+MQYnt2d3ZmduZ7au8/a71e29odEBERERERERERERERERERERGRhNyCuTvmvTvhXt8ZTcgTqplbcgh8BB4CX4Gj5jlfus5RkACuxWj1iqIgA22I0eocRUEG2BGj1SnKXogTq5FbMKfhM9tjANwBVm7JXZ+5+4PPrEJ/r4wPOB54HdDwA7jwe6l04vk1tdZwDjxpnvHN7+XibewYdoh4iRHDDpOdYsWwQ2WrmDHscNkodgwbITdKEcPGyH9SxbBR8o+UMWycXEodw0YKkEcMGyvZxLDRlcspho2vWG4xbIlK5RjDlqlQrjFsqcrkHMOWq0juMWzJSkwhhi1bganEsKULN6UYtnzBphYDAu7LcqfM3JLXbsE81MwhOuybMg3n/OJxyhgQKIg7ZcZP3gCvOGDljrkdYm7v81lyyH6nfVN2Zbzk+7hn5nMqA13GaHhxZWqyS3+KX1NXDQpyY4z15OhvdOoxYECQrTHW06O94RJiQM8gXjHWK4z+xkuJAX1/1C+4xR73vV5rP6yfxvr3NdV/U5v0/8qyT+UZ8MhzpeCfypKujNawH/WEUUqMASH+9iaIUmoMCHTrJGaUkmNAwHtZMaKUHgMC31wcM0oNMWCEu71jRKklBox0+z1klJpiwIjPQ0JEqS0GjPyAakiUGmNAhCeGvaI4ngInVBYDIj3CdQvmHLDyfmAEv4GZ1yvbe1MZPFwKIdoz9c5Xio+CroxW1E0OQaMUGAMS7DoJEqXQGJBoG9CgKAXHgIT7snpFKTwGJN4o1ylKBTEgg52LXlEqiQEZBIEdUSqKAZkEgQ1RKosBGQWBa1EqjJElt2Du3vE2l03bIiIiIiIiIiIiIiIiIiJSrT9qGY0gerDNxwAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  )
}

RightYellowIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  viewBox: "0 0 24 24"
}

export default RightYellowIcon;
