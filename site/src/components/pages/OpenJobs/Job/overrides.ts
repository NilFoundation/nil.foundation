import { PRIMITIVE_COLORS } from '@nilfoundation/ui-kit'
import { BlockOverrides } from 'baseui/block'

export const labelOverrides: BlockOverrides = {
  Block: {
    style: {
      color: PRIMITIVE_COLORS.gray300,
      fontWeight: 400,
      lineHeight: '16px',
    },
  },
}

export const getTitleOverrides = (isMobile: boolean): BlockOverrides => ({
  Block: {
    style: {
      color: PRIMITIVE_COLORS.gray50,
      fontWeight: 400,
      letterSpacing: isMobile ? '-0.48px' : '-0.96px',
      fontSize: isMobile ? '24px' : '32px',
      lineHeight: isMobile ? '32px' : '40px',
    },
  },
})

export const descriptionOverrides: BlockOverrides = {
  Block: {
    style: {
      color: PRIMITIVE_COLORS.gray300,
      fontWeight: 400,
    },
  },
}
