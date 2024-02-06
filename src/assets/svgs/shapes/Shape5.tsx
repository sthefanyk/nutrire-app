import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Shape5 = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={203}
    height={205}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#95C11F"}
      d="M16.707 81.684c.737 2.838 1.67 5.614 2.74 8.34 2.37 6.068 7.148 26.568-8.586 50.36-33.876 51.219 23.595 87.698 68.353 46.576 44.758-41.123 50.814-42.953 92.551-57.471 41.736-14.518 52.643-82.59-40.533-122.189C84.336-12.647-1.225 12.852 16.707 81.684Z"
    />
  </Svg>
)
export default Shape5
