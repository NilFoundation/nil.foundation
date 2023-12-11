import { ANIMATION_CARD_ALIGNMENT } from 'components/AnimatedDottedContainer'
import { IntroDescription } from 'components/IntroAnimation'
import s from './Intro.module.scss'
import { WebButton } from 'components/WebButton'

export const getAnimatedItemList = (prefersReduceMotion?: boolean) => [
  {
    id: 'z1',
    ySourceValue: '-232px',
    yTransformValue: '-99%',
  },
  {
    id: 'z2',
    ySourceValue: '-306px',
    yTransformValue: '-115%',
  },
  {
    id: 'z3',
    ySourceValue: '-336px',
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
    ySourceValue: '-262px',
    yTransformValue: '-99%',
  },
  {
    id: 'z5',
    ySourceValue: '-366px',
    yTransformValue: '-80%',
  },
  {
    id: 'z8',
    ySourceValue: '100%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z9',
    ySourceValue: '100%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z10',
    ySourceValue: '100%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z11',
    ySourceValue: '100%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z12',
    ySourceValue: '100%',
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
  },
  {
    id: 'm3',
    ySourceValue: '-42%',
  },
]
