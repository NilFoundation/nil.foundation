import { ANIMATION_CARD_ALIGNMENT } from 'components/AnimatedDottedContainer'
import { IntroDescription } from 'components/IntroAnimation'
import s from './Intro.module.scss'
import { WebButton } from 'components/WebButton'

export const getAnimatedItemList = (prefersReduceMotion?: boolean) => [
  {
    id: 'z1',
    ySourceValue: '-36%',
    yTransformValue: '-99%',
  },
  {
    id: 'z2',
    ySourceValue: '-48%',
    yTransformValue: '-115%',
  },
  {
    id: 'z3',
    ySourceValue: '-52%',
    yTransformValue: '-99%',
    children: (isCompleted: boolean) => (
      <IntroDescription
        className={s.description}
        text="=nil; is a zkRollup that securely scales Ethereum to 60,000+ TPS through zkSharding, empowering web3 developers to build scalable, secure, and composable applications."
        isVisible={isCompleted}
      />
    ),
  },
  {
    id: 'z4',
    ySourceValue: '-41%',
    yTransformValue: '-99%',
  },
  {
    id: 'z5',
    ySourceValue: '-57%',
    yTransformValue: '-80%',
  },
  {
    id: 'z8',
    ySourceValue: '36%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z9',
    ySourceValue: '36%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z10',
    ySourceValue: '36%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z11',
    ySourceValue: '36%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z12',
    ySourceValue: '36%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
]

export const animatedItemMobileList = [
  {
    id: 'm1',
    ySourceValue: '-45%',
    children: (
      <div className={s.buttonWrapper}>
        <WebButton className={s.link} size="l" href="https://explore.nil.foundation/">
          Explore =nil;
        </WebButton>
      </div>
    ),
  },
  {
    id: 'm2',
    ySourceValue: '-84%',
    yTransformValue: '-50%',
    yTransformValueList: [
      { value: '-50%', duration: 0.8 },
      { value: '-84%', duration: 0.8 },
    ],
  },
  {
    id: 'm3',
    ySourceValue: '-42%',
    yTransformValue: '-90%',
    yTransformValueList: [
      { value: '-90%', duration: 0.8 },
      { value: '-42%', duration: 0.8 },
    ],
  },
]
