import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const IPerfilTab = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#fff"}
      fillRule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83ZM8.5 9.5C8.5 7.56 10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13s-3.5-1.56-3.5-3.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default IPerfilTab
