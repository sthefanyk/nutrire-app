import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ILogout = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#fff"}
      d="M13 29c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 11 27V13c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 13 11h7v2h-7v14h7v2h-7Zm11-4-1.375-1.45 2.55-2.55H17v-2h8.175l-2.55-2.55L24 15l5 5-5 5Z"
    />
  </Svg>
)
export default ILogout
