export const getJoinSectionProps = (data: Record<string, any>) => {
  const props = data?.joinNil ?? {}
  return {
    ...props,
    leftText: props?.content?.left ?? '',
    rightText: props?.content?.right ?? '',
  }
}
