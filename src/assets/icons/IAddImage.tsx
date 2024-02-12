import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const IAddImage = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Rect
      width={15.388}
      height={21.724}
      x={3.25}
      y={8.245}
      fill={props.color || "#fff"}
      rx={2}
      transform="rotate(-19.056 3.25 8.245)"
    />
    <Rect width={15} height={22} x={12.75} y={4.221} fill={props.bg || "#202124"} rx={1} />
    <Rect
      width={15}
      height={22}
      x={12.75}
      y={4.221}
      stroke={props.color || "#fff"}
      strokeWidth={2}
      rx={1}
    />
    <Path
      fill={props.color || "#fff"}
      d="M19.607 15.864H15.75v-1.286h3.857v-3.857h1.286v3.857h3.857v1.286h-3.857v3.857h-1.286v-3.857Z"
    />
  </Svg>
)
export default IAddImage
