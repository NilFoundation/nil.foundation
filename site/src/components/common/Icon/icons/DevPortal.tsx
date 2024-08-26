import { memo } from 'react'
import { SvgIconComponent } from '../SvgIconComponent'
import { PRIMITIVE_COLORS } from '@nilfoundation/ui-kit'

const DevPortal: SvgIconComponent = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="3" width="2" height="18" fill={PRIMITIVE_COLORS.gray900} />
    <rect x="17" y="8" width="2" height="13" fill={PRIMITIVE_COLORS.gray900} />
    <rect x="19" y="19" width="2" height="14" transform="rotate(90 19 19)" fill={PRIMITIVE_COLORS.gray900} />
    <rect x="14" y="3" width="2" height="9" transform="rotate(90 14 3)" fill={PRIMITIVE_COLORS.gray900} />
    <rect x="14" y="10" width="2" height="7" transform="rotate(-180 14 10)" fill={PRIMITIVE_COLORS.gray900} />
    <path d="M19 8.00002L17.5858 9.41424L12.6 4.41424L14.0142 3.00003L19 8.00002Z" fill={PRIMITIVE_COLORS.gray900} />
    <rect x="12" y="10" width="2" height="7" transform="rotate(-90 12 10)" fill={PRIMITIVE_COLORS.gray900} />
  </svg>
)

export default memo(DevPortal)
