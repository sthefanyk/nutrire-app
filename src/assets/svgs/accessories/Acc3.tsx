import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={124}
    height={109}
    fill="none"
    {...props}
  >
    <Path
      fill="#FAEFDC"
      d="M11.46 4.581c-6.83.497-19.2 38.836-2.717 67.738C24.296 99.575 66.407 119.986 96.8 100.77c29.569-18.704 34.225-66.185 14.901-86.69C97.094-1.424 67.478-2.9 61.58 5.948c-4.765 7.14 2.716 25.736 2.716 25.736s20.985-1.071 28.451 6.767c9.624 10.12 2.577 41.242-12.184 46.053-16.997 5.542-39.426-25.27-44.703-32.518C16.939 26.033 16.675 4.193 11.46 4.581Z"
    />
  </Svg>
)
export default SvgComponent
