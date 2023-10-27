import { ANIMATION_CARD_ALIGNMENT } from 'components/AnimatedDottedContainer';
import ArrowButton from 'components/ArrowButton';
import { IntroDescription } from 'components/IntroAnimation';
import s from './Intro.module.scss';

export const getAnimatedItemList = (prefersReduceMotion?: boolean) => [
  {
    id: '1',
    ySourceValue: '-20%',
    yTransformValue: '-86%',
  },
  {
    id: '2',
    ySourceValue: '-54%',
    yTransformValue: '-55%',
  },
  {
    id: '3',
    ySourceValue: '-76%',
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
    ySourceValue: '-62%',
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
    ySourceValue: '-32%',
    yTransformValue: '-86%',
  },
  {
    id: '6',
    ySourceValue: '-48%',
    yTransformValue: '-86%',
  },
  {
    id: '7',
    ySourceValue: prefersReduceMotion ? '0%' : '20%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: '8',
    ySourceValue: prefersReduceMotion ? '0%' : '20%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: '9',
    ySourceValue: '20%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: '10',
    ySourceValue: prefersReduceMotion ? '0%' : '20%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: '11',
    ySourceValue: prefersReduceMotion ? '0%' : '20%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: '12',
    ySourceValue: prefersReduceMotion ? '0%' : '20%',
    yTransformValue: '20%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
];

export const animatedItemMobileList = [
  {
    id: 'm1',
    ySourceValue: '-30%',
    children: (
      <ArrowButton
        className={s.link}
        text="Go to Proof Market"
        href="https://proof.market/#/market/account_mina"
      />
    ),
  },
  {
    id: 'm2',
    ySourceValue: '-90%',
    yTransformValue: '-60%',
  },
  {
    id: 'm3',
    ySourceValue: '-65%',
    yTransformValue: '-90%',
  },
  {
    id: 'm4',
    ySourceValue: '-30%',
    yTransformValue: '-50%',
  },
];
