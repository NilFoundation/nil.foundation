import { BlockOverrides } from 'baseui/block'
import { StyleObject } from 'styletron-react'

const getHeadingCommonStyles = (isMobile: boolean): StyleObject => ({
  fontSize: isMobile ? '45px' : '64px',
  lineHeight: '1',
  fontWeight: '400',
  letterSpacing: isMobile ? '-1.05px' : '-1.28px',
})

export const getCommonHeadingOverrides = (isMobile: boolean): BlockOverrides => ({
  Block: {
    style: {
      marginBottom: isMobile ? '10px' : '24px',
      ...getHeadingCommonStyles(isMobile),
    },
  },
})

export const getPageTitleOverrides = (isMobile: boolean): BlockOverrides => ({
  Block: {
    style: {
      marginBottom: isMobile ? '60px' : '32px',
      ...getHeadingCommonStyles(isMobile),
    },
  },
})

export const rolesCountOverrides: BlockOverrides = {
  Block: {
    style: {
      fontWeight: '400',
    },
  },
}
