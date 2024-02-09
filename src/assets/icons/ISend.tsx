import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from "react-native-svg"
const ISend = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill={props.color || "#fff"}
        d="M15 32V16l19 8-19 8Zm2-3 11.85-5L17 19v3.5l6 1.5-6 1.5V29Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={40} height={40} x={4} y={4} fill="#fff" rx={20} />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ISend
