import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function BellYellowIcon(props) {
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
          <Use xlinkHref="#image0_4_148" transform="scale(.01)" />
        </Pattern>
        <Image
          id="image0_4_148"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAD/ElEQVR4nO3dQYhVZRTA8f+5MwNGMCYl0qISGgkKEzIyQwhJcdXsGmbGYYgiatXCiKCCmk2kYVALcSEIOm+sgRaBIUUFtalFLsIKFxW0iUDMMrJC3zst9IlFxlzv953v3Dfnt37vnvPmz5s3b5j5HoQQQgghhBCCLSm9QB26wF0oL9W6kzAn03ydaaXkhksvUEuX1VQ8UvM++zJtk0VVeoHwTxHEmQjiTARxJoI4E0GciSDOtCaIdlhHxXjtO1aMa4d1GVbKwvU7dV1kJReYRXkCWN/oYsKXKAdQDskMZ9NsmJ7LIDrPKPAMwtPADYkvfwZ4kz/ZK4/zW+JrN+YuiHaYBF4Hbs486keUXTLD25nn1OImiHZYhbIfYcJ49FuM8JRM8Kvx3P/kIogeZoyKo8AdhVb4FuFhmeZkofmXFQ+iR9hEj2PAqsKr/EzFDpnii5JLFA2iHe4DPgBWltzjCr8A22Qnx0stUCyIHmEtPT4H1pTa4SpOMcRmmeS7EsOLvDHUg6ygx7v4iwGwmh7v6EFWlBhe5p36CHuBu4vMXgplAyPsKTHa/FuWLrAF5dMSs2tShK0yzSeWQ02fIbrIEMo+/MeAizu+oS/bfo1sv2WdZ5Kmv5OypGxgrOYfVTRkFkQVAZ63mpeM8ILlOLtnyDwPAneazUtnvS6wxWqYXZAhHjWblZrymNUokxdXXWSI8/wE3GQxL4PTjLBGJujmHmTzDOmyifbGALiRLvdaDLIKstlkTk5Gj8EmiHCPyZy8NloMsXpRHzOak49wu8UYqyC3GM3JR7jVYoxVkFGjOfmozWOwCnKd0ZycrrcYYhWkNX+Q9z9MHsMgfKEGSgRxJoI4E0GciSDORBBnIogzEcSZCOJMBHEmgjgTQZyJIM5EEGciiDMRxJkI4kwEcSaCOBNBnIkgzkQQZyKIM9mDXDpqaSBYPJasQXSeUYT3c84wJXysnbxnsmT7D6orYtyfa0Yhx4HtspMzOS6eJcgAx+jLFiV5kGUQoy9LlKRBllGMvuRRkgVZhjH6kkZJEmQZx+hLFqVxkIhxWZIozd+HCDuIGHDxv3S3Nb1I/OrEmQjiTARxJsWntH0INueAtMD3pRcIIQRDbTgdFO2wEXiu4WV2lzxCfKna8dGrFcP0Gp4OqryWaJus2vFj71lOAOcaXOEPenyTap2cWhFEnuQccOzaL8B7Msvv6TbKpxVBAFDm4JoOoexygbnU6+TSmiAywwmk5mepAwgvyixfZVgpi9YEAWCKV4DdS7698ipTNW7vQCt+7P03Pcw4FXu4+mdWnUR5VmY4arlXCq0MApcOZ/6LB6h4CLgNUOAHhI8Y5jOLQ49DCCGEEEIIYRD8Ddl1xSybtoQUAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  )
}

BellYellowIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  viewBox: "0 0 24 24"
}

export default BellYellowIcon;
