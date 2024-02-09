import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from "react-native-svg"
const ISearch = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill={props.color || "#592C05"}
        fillRule="evenodd"
        d="M26.76 25.27 32.49 31 31 32.49l-5.73-5.73C24.2 27.53 22.91 28 21.5 28a6.5 6.5 0 1 1 6.5-6.5c0 1.41-.47 2.7-1.24 3.77ZM21.5 17c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={40} height={40} x={4} y={4} fill="#fff" rx={20} />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ISearch

