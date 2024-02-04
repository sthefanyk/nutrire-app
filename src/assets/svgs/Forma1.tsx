import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Forma1 = (props: any) => (

  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={261}
    height={197}
    fill="none"
    {...props}
  >
    <Path
        fill={props.color}
        scale={props.scale || 1}
        d="M135.256 59.1c-2.495 4.194-4.724 8.492-6.761 12.853-4.54 9.7-23.114 39.493-65.97 54.481-92.263 32.265-76.3 130.362 15.352 120.623 91.653-9.739 99.799-6.432 158.116 14.005 58.317 20.437 146.791-53.848 98.643-188.68C310.423 4.5 195.729-42.678 135.256 59.1Z"
    />
  </Svg>
)
export default Forma1