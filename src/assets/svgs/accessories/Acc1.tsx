import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={59}
    height={80}
    fill="none"
    {...props}
  >
    <Path
      fill="#FAEFDC"
      d="M17.692 34.428c9.446 0 17.105-7.658 17.105-17.105S27.138.218 17.692.218C8.245.218.585 7.876.585 17.323s7.659 17.105 17.106 17.105ZM20.78 79.72c5.77 0 10.447-4.676 10.447-10.445 0-5.77-4.677-10.447-10.447-10.447-5.769 0-10.446 4.677-10.446 10.447 0 5.769 4.677 10.446 10.446 10.446ZM53.345 44.859a5.215 5.215 0 1 0 0-10.43 5.215 5.215 0 0 0 0 10.43Z"
    />
  </Svg>
)
export default SvgComponent
