import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const IEditSmall = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2.083 7.917h.594L6.75 3.844l-.594-.594-4.073 4.073v.594Zm-.833.833V6.98l5.5-5.49a.936.936 0 0 1 .276-.177.862.862 0 0 1 .64 0 .732.732 0 0 1 .271.187l.573.583a.68.68 0 0 1 .183.271.902.902 0 0 1 0 .63.78.78 0 0 1-.183.276L3.02 8.75H1.25Zm5.198-5.198-.292-.302.594.594-.302-.292Z"
    />
  </Svg>
)
export default IEditSmall
