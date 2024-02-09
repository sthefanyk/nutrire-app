import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ISearchTab = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#FAEFDC"}
      fillRule="evenodd"
      d="M14.76 13.27 20.49 19 19 20.49l-5.73-5.73C12.2 15.53 10.91 16 9.5 16A6.5 6.5 0 1 1 16 9.5c0 1.41-.47 2.7-1.24 3.77ZM9.5 5C7.01 5 5 7.01 5 9.5S7.01 14 9.5 14 14 11.99 14 9.5 11.99 5 9.5 5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ISearchTab
