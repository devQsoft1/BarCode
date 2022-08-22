import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function UnlockYellowIcon(props) {
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
          <Use xlinkHref="#image0_4_147" transform="scale(.01)" />
        </Pattern>
        <Image
          id="image0_4_147"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAHTElEQVR4nO2dW2wc1RmAv399SRwwEKBpuIQkKFQJCCj0AUTAFaWtehMQhTr1rjG3UC4SpimF5KU0QqKCJxAqJXkwVR2vjdwAyksiAY0KKjyEQqVekghDqAtBJMIUSKB0196fB29RuOzMnpkzZ+bY872e/z/n13w7O7czZwSP0GFOBL6JchGwAjgdWAAcVQ/5EDgI7EPYjfICkzwr1zCRTsXmSNoFhKGbmUcna4A+lC6gYNhFDXgWGOQwo3ITH1kv0iKZFaIDdNJBP8rtwFcsdXsQ5UFqPCR9fGipT6tkUoiW+THCAyinJDTEGwjrpMjjCfUfmUwJ0QE6mcsjQMnNgAzRzi3SzWEn4zVBZoToCEuosQNY7nZg9iB8X0qMOx23AZkQosOchfIUcHIqBQj7qfFd6WV3KuN/ppSU0UGW0sKfiSbjTWAf8F8AhHnA6RGPPW9RYKX08K8IudZIVYiOcixVdgFfazLlY+AJlK1M8Vyj6wsd5kSULpSrEFYBc5vsfy/KBdLLB03GWyddIWXKQLGJ0ElghAJ3m/6CdYhTEX4JXA+0hicwKr2sMRnDJqkJ0WF6UbY0EfpPhKukyN5Y4z3GCqbYCpwZGiwUpchInPGikooQHeIYhL3ASSGhO2ijR7p538q406fVg8CVwYG8TZUVch3v2RjXBNPbEHYQ1hMuYxtj/MiWDAC5gUOMsRrYFlLfQtr5ua1xTXC+h9T3jnHguMZB7AEuTOrgqqMcTZUXgLMDwt6njcU2fxDN4H4PEa4lSAb8D+XyJM906lfmq4FKQNixVOhNqoZGpPGX1RfSvkmu5tWki5ASYyibQ8KuTrqOz+NUiI6wBPhGQMhhpvi1q3oocC8E3McSLtARFjmrB9d7yBTfCokYlj4OOqkFkCIHgMcCg8JrtopbIcLFIRF/cFLHkWjImMIljioB3B9DVgS0VWjjeWeV/J8azwPVhu0aWLN1XAs5I6BtTLrrNwkdUn9yONY4ILBm6zgTohspAPMDQva5quULKK8HtJ6g6u56zd0esoijAsdTtxdgn0ECxy6whXmuSnEnpIM5ge2FwIu0ZBE+DmxvpcNRJSndy8ppSC4kY4Q/sJkNKB8B/2nYXkVdlZILAaTEbcBtadcB+V9W5siFZIxcSMbIhWSMXEjGyIVkjFxIxsiFZIxcSMbIhWSMRB+8aJkzgK8Di4FTgdsDwv8G7EiynsgINZR3gXFq/DXJaUrWheggp9HCrUAPcJrt/jPCOMoILfxWenjDZsfWhGiZ+cB6oB/cPdBJmQqwiQq/sjUx24oQLdMFbMXe68u+cQBltfTGnzUT+6CuZW4Anmb2ygD4KsJOHeL6uB3F2kO0TB/w+7hFzDDWSomBqMmRhegIF1FjJ4RMXph9VIDvSInnoiRHEqIDdDKHVxAWRsmf8Qj7aWV5lAUJoh1D5nJnLiMA5RSq3BEl1XgP0VEWUmUMODrKgLOIQ0yxzHQ2v/keUmUtuYxm6KTV/KzLXIik9w63d6j5tjL6y9JBFtDC26Z5sxhFWCBF3mk2wWwPaeVcchkmCHCOSYLpX9Ziw/gcZalJuJkQpdMoPgfgGJNgUyFtRvE5xtssf2KYMXIhGWMmzH5/Ffg302c0i4Bl6ZYTD1+FTD+pa+Eh+QmvHdmgW1iG0I9wM/h3zPNPiLAf4Urp4S9f2jw9AaFfywwBT5LWwpoR8e0YcohJvtdIxpFIiV0Il0GKb/dGwC8hyh3Sxz+aDZcie+uLpXmDT0LGaedR46yTGAC7U3WSxCch26SbKdMkuZRJwpb0yxD+CBH+HiM7Tq5T/BFS41Dk3DSX7TDEHyFx7jQLSyzWkSj+CBHOj5yrMXId448QWKWj5jNddJAFCFckUVAS+CSknUnuMc5q4V48msznkxBQbtQhbmw6vMxPgbUJVmQdv4QACJu1zH26vfGvXrczR4e5H9jksDIr+Cdk+jb7eiYCzpwmWIJyFx5OyPBRyIwmF5IxciEZIxeSMXIhGSMXkjFyIRnDXyEt/l1jNIO/QjTgdnyLv69o+ysEugLafuCsCsv4LGSdbvnix1a0TBfKz9IoyAZmE+UKqLs1nkPpoMBOHeIJ5NMlLS4GVpGlCYAFsy1mVri6/+BKCK0I3UB32oU0RM3eVTf9yzpgGJ8jSb4WrfE+EDxLMdpmZkLa2U3QVwRyPs8Er7DHJMFISH3mYDaX4csm22UjNZOEKKe9v4uQM1sx3lbRVgMq80dw+wVM7xD+JEUuNU2LdmGobIAMXZFkD0X5RZTESEKklxdRfhMld5bwoJR4KUpi9Fsn7awjP8B/GU9zMndFTY4sRLqZoo1e4OWofcxAXgLW1N9JiUSsm4vSzbtUWAmU4/QzI1BGOUyXlOJdp9lZt1cRhukH7gaOt9GnR0wAGynysEj8Ex2rT920zHyEDSg3Y7joiod8ADxChftsrWoNCU211FE6qPBD4NsI5wFLgePw8EX+OlXgPeB14GWEZ2hlexKfG/8ECV2mz2FxXv8AAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  )
}

UnlockYellowIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  viewBox: "0 0 24 24"
}

export default UnlockYellowIcon;
