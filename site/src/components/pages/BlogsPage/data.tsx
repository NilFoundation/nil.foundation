import { ANIMATION_CARD_ALIGNMENT } from 'components/AnimatedDottedContainer'
import { WebButton } from 'components/WebButton'

import s from './BlogsPage.module.scss'

export const blogsPageFooterItemData = [
  {
    id: '1',
    ySourceValue: '-88%',
  },
  {
    id: '2',
    ySourceValue: '-88%',
  },
  {
    id: '3',
    ySourceValue: '-88%',
  },
  {
    id: '4',
    ySourceValue: '-60%',
    children: (
      <div className={s.buttonBlock}>
        <WebButton className={s.webButton} href="#">
          Load more
        </WebButton>
      </div>
    ),
  },
  {
    id: '6',
    ySourceValue: '6%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: '7',
    ySourceValue: '6%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: '8',
    ySourceValue: '87%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: '9',
    ySourceValue: '10%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
]

export const blogsPageFooterMobileItemData = [
  {
    id: '1',
    ySourceValue: '-76%',
  },
  {
    id: '2',
    ySourceValue: '1%',
  },
  {
    id: '3',
    ySourceValue: '76%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: '4',
    ySourceValue: '76%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
]
