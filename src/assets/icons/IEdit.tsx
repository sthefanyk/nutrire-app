import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const IEdit = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#fff"}
      d="M13 27h1.425l9.775-9.775-1.425-1.425L13 25.575V27Zm-2 2v-4.25l13.2-13.175c.2-.183.42-.325.663-.425.241-.1.495-.15.762-.15s.525.05.775.15c.25.1.467.25.65.45l1.375 1.4c.2.183.346.4.438.65a2.165 2.165 0 0 1 0 1.512 1.874 1.874 0 0 1-.438.663L15.25 29H11Zm12.475-12.475-.7-.725 1.425 1.425-.725-.7Z"
    />
  </Svg>
)
export default IEdit
