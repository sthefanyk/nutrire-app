import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const IChatTab = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#fff"}
      d="M6 14h8v-2H6v2Zm0-3h12V9H6v2Zm0-3h12V6H6v2ZM2 22V4c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 4 2h16c.55 0 1.02.196 1.413.587C21.803 2.98 22 3.45 22 4v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 18H6l-4 4Zm3.15-6H20V4H4v13.125L5.15 16Z"
    />
  </Svg>
)
export default IChatTab
