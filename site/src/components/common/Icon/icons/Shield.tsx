import { memo } from 'react'
import { SvgIconComponent } from '../SvgIconComponent'

const Shield: SvgIconComponent = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <title>Shield</title>
    <path
      d="M6 12C16.5085 14.1958 27.4299 11.1693 35.3094 3.87787L39.5 0L43.6906 3.87786C51.5701 11.1693 62.4915 14.1958 73 12L72.5578 38.5345C72.229 58.258 58.6545 75.285 39.5 80C19.8575 75.3092 6 57.7529 6 37.558V12Z"
      fill="currentColor"
    />
  </svg>
)

export default memo(Shield)
