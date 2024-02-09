import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const IPrivacity = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#fff"}
      d="M19 25h2v-6h-2v6Zm1-8c.283 0 .52-.096.712-.288A.968.968 0 0 0 21 16a.968.968 0 0 0-.288-.713A.968.968 0 0 0 20 15a.968.968 0 0 0-.712.287A.968.968 0 0 0 19 16c0 .283.096.52.288.712.191.192.429.288.712.288Zm0 13c-2.317-.583-4.23-1.913-5.738-3.988S12 21.633 12 19.1V13l8-3 8 3v6.1c0 2.533-.754 4.837-2.262 6.912C24.229 28.087 22.317 29.418 20 30Zm0-2.1c1.733-.55 3.167-1.65 4.3-3.3s1.7-3.483 1.7-5.5v-4.725l-6-2.25-6 2.25V19.1c0 2.017.567 3.85 1.7 5.5s2.567 2.75 4.3 3.3Z"
    />
  </Svg>
)
export default IPrivacity
