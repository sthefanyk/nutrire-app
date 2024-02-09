import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from "react-native-svg"
const IFilter = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill={props.color || "#FFF"}
        d="M23 33v-6h2v2h8v2h-8v2h-2Zm-8-2v-2h6v2h-6Zm4-4v-2h-4v-2h4v-2h2v6h-2Zm4-2v-2h10v2H23Zm4-4v-6h2v2h4v2h-4v2h-2Zm-12-2v-2h10v2H15Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={40} height={40} x={4} y={4} fill="#fff" rx={20} />
      </ClipPath>
    </Defs>
  </Svg>
)
export default IFilter
