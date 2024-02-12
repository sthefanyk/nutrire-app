import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const IRemoveCategory = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#95C11F"
        d="m7.071 8.081-3.03 3.03-1.01-1.01 3.03-3.03-3.03-3.03 1.01-1.01 3.03 3.03 3.03-3.03 1.01 1.01-3.03 3.03 3.03 3.03-1.01 1.01-3.03-3.03Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default IRemoveCategory
