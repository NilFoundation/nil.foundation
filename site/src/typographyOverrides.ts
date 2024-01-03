const overridesKeys = [
  'LabelLarge',
  'LabelMedium',
  'LabelSmall',
  'LabelXSmall',
  'ParagraphMedium',
  'ParagraphSmall',
  'ParagraphXSmall',
  'DisplayLarge',
  'DisplayMedium',
  'DisplaySmall',
  'DisplayXSmall',
  'HeadingXXLarge',
  'HeadingXLarge',
  'HeadingLarge',
  'HeadingMedium',
  'HeadingSmall',
  'HeadingXSmall',
  'HeadingXXSmall',
  'HeadingXXXSmall',
] as const

export const typographyOverrides = overridesKeys.reduce((acc, key) => {
  acc[key] = {
    fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
  }
  return acc
}, {} as Record<typeof overridesKeys[number], any>)
