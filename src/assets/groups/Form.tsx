import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Form = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={313}
    height={213}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#4F294A"}
      d="M135.256 59.609c-2.495 4.193-4.724 8.491-6.761 12.853-4.54 9.699-23.114 39.493-65.97 54.481-92.263 32.265-76.3 130.362 15.352 120.623 91.653-9.739 99.799-6.432 158.116 14.005 58.317 20.437 146.79-53.849 98.643-188.68-24.213-67.882-138.907-115.06-199.38-13.282Z"
    />
  </Svg>
)
export default Form
