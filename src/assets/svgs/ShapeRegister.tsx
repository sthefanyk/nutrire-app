import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ShapeRegister = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={453}
    height={600}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#C5D984"}
      d="M85.994 218.263c-.202 8.869.017 17.627.53 26.287 1.126 19.267-1.407 83.146-46.1 149.274-96.22 142.359-4.65 274.463 107.059 166.775C259.19 452.911 272.135 449.648 362.459 421.391c90.325-28.258 151.269-230.296-8.548-385.287C273.485-41.953 90.794 3.064 85.994 218.263Z"
    />
  </Svg>
)
export default ShapeRegister
