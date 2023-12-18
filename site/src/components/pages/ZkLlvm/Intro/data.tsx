import { ANIMATION_CARD_ALIGNMENT } from 'components/AnimatedDottedContainer'
import { IntroDescription } from 'components/IntroAnimation'
import s from './Intro.module.scss'
import { WebButton } from 'components/WebButton'

export const getAnimatedItemList = (prefersReduceMotion?: boolean) => [
  {
    id: 'z1',
    ySourceValue: '-249px',
    yTransformValue: '-99%',
  },
  {
    id: 'z2',
    ySourceValue: '-219px',
    yTransformValue: '-115%',
  },
  {
    id: 'z3',
    ySourceValue: '-352px',
    yTransformValue: '-99%',
    children: (isCompleted: boolean) => (
      <IntroDescription
        className={s.description}
        text="Get high-performance circuits straight from C++, Rust, or other mainstream code using this powerful tool designed for developers."
        isVisible={isCompleted}
      />
    ),
  },
  {
    id: 'z4',
    ySourceValue: '-322px',
    yTransformValue: '-99%',
  },
  {
    id: 'z5',
    ySourceValue: '-292px',
    yTransformValue: '-80%',
  },
  {
    id: 'z6',
    ySourceValue: '-357px',
    yTransformValue: '-99%',
  },
  {
    id: 'z7',
    ySourceValue: '-518px',
    yTransformValue: '-99%',
  },
  {
    id: 'z8',
    ySourceValue: '100%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z9',
    ySourceValue: '100%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z10',
    ySourceValue: '100%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z11',
    ySourceValue: '100%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z12',
    ySourceValue: '100%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z13',
    ySourceValue: '100%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z14',
    ySourceValue: '100%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
]

export const animatedItemMobileList = [
  {
    id: 'm1',
    ySourceValue: '-31%',
    children: (
      <div className={s.link}>
        <WebButton size="l" href="https://github.com/NilFoundation/zkllvm">
          Discover zkLLVM
        </WebButton>
      </div>
    ),
  },
  {
    id: 'm2',
    ySourceValue: '-54%',
  },
  {
    id: 'm3',
    ySourceValue: '-54%',
  },
  {
    id: 'm4',
    ySourceValue: '-34%',
  },
]
