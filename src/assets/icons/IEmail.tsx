import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const IEmail = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="#95C11F"
      d="M12 28c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 10 26V14c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 12 12h16c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 28 28H12Zm8-7-8-5v10h16V16l-8 5Zm0-2 8-5H12l8 5Zm-8-3v-2 12-10Z"
    />
  </Svg>
)
export default IEmail
