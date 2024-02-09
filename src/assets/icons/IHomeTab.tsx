import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const IHomeTab = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#fff"}
      d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6H4Z"
    />
  </Svg>
)
export default IHomeTab
