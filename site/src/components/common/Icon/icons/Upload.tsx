import { memo } from 'react'
import { SvgIconComponent } from '../SvgIconComponent'
import { PRIMITIVE_COLORS } from '@nilfoundation/ui-kit'

const Upload: SvgIconComponent = ({ className }) => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="2" y="8" width="1" height="6" fill={PRIMITIVE_COLORS.gray200} />
    <rect x="13" y="8" width="1" height="6" fill={PRIMITIVE_COLORS.gray200} />
    <rect transform="rotate(90 14 13)" x="14" y="13" width="1" height="12" fill={PRIMITIVE_COLORS.gray200} />
    <path
      d="m8 10-3.3536-3.3535 0.70711-0.70711 2.1464 2.1464v-6.7929h1v6.7929l2.1464-2.1464 0.7071 0.70711-3.3535 3.3535z"
      clip-rule="evenodd"
      fill={PRIMITIVE_COLORS.gray200}
      fill-rule="evenodd"
    />
  </svg>
)

export default memo(Upload)
