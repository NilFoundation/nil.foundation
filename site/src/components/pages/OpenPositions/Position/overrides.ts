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

export const titleOverrides: BlockOverrides = {
  Block: {
    style: {
      color: PRIMITIVE_COLORS.gray50,
      fontWeight: 400,
      letterSpacing: '-0.96px',
    },
  },
}
