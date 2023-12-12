import { ANIMATION_CARD_ALIGNMENT } from 'components/AnimatedDottedContainer'
import { IntroDescription } from 'components/IntroAnimation'
import s from './Intro.module.scss'
import { WebButton } from 'components/WebButton'

export const getAnimatedItemList = (prefersReduceMotion?: boolean) => [
  {
    id: '1',
    ySourceValue: '-148px',
    yTransformValue: '-86%',
  },
  {
    id: '2',
    ySourceValue: '-349px',
    yTransformValue: '-55%',
  },
  {
    id: '3',
    ySourceValue: '-460px',
    yTransformValue: '-70%',
    children: (isCompleted: boolean) => (
      <IntroDescription
        className={s.description}
        text="Get Ethereum-verifiable proofs tailored to your application requirements."
        isVisible={isCompleted}
      />
    ),
  },
  {
    id: '4',
    ySourceValue: '-331px',
    yTransformValue: '-86%',
    children: (isCompleted: boolean) => (
      <IntroDescription
        className={s.description}
        text="Benefit from decentralized network of proof producers with the first marketplace for zkProof generation."
        isVisible={isCompleted}
      />
    ),
  },
  {
    id: '5',
    ySourceValue: '-172px',
    yTransformValue: '-86%',
  },
  {
    id: '6',
    ySourceValue: '-312px',
    yTransformValue: '-86%',
  },
  {
    id: '7',
    ySourceValue: '100%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: '8',
    ySourceValue: '100%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: '9',
    ySourceValue: '100%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: '10',
    ySourceValue: '100%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: '11',
    ySourceValue: '100%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: '12',
    ySourceValue: '100%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
]

export const animatedItemMobileList = [
  {
    id: 'm1',
    ySourceValue: '-17%',
    children: (
      <div className={s.buttonWrapper}>
        <WebButton className={s.link} size="l" href="https://proof.market/#/market/account_mina">
          Go to Proof Market
        </WebButton>
      </div>
    ),
  },
  {
    id: 'm2',
    ySourceValue: '-37%',
  },
  {
    id: 'm3',
    ySourceValue: '-32%',
  },
  {
    id: 'm4',
    ySourceValue: '-15%',
  },
]
