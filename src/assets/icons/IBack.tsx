import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from "react-native-svg"
const IBack = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <G
      stroke={props.color || "#FAEFDC"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.217}
      clipPath="url(#a)"
    >
      <Path d="M31 24H17M24 31l-7-7 7-7" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={40} height={40} x={4} y={4} fill="#fff" rx={20} />
      </ClipPath>
    </Defs>
  </Svg>
)
export default IBack
