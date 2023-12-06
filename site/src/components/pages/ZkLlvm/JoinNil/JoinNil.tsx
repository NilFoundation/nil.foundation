import { string, shape } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import s from './JoinNil.module.scss'
import { JoinNilBaseData } from './JoinNilBaseData'

type JoinNilProps<T extends JoinNilBaseData> = {
  className?: string
  boxClassName?: string
  data: T
  withMargin?: boolean
}

function getContent(isMobile: boolean | null, content: JoinNilBaseData['content']) {
  if (typeof content.right === 'string') {
    return content.right
  }

  return !isMobile ? content.right.isDesktop : content.right.isMobile
}

const JoinNil = <T extends JoinNilBaseData>({
  className,

  data: { title, social, content },
  withMargin,
}: JoinNilProps<T>) => {
  const { isMobile } = useViewport()
  const contentRight = getContent(isMobile, content)

  return (
    <div
      className={cx(s.root, className, {
        [s.space]: withMargin,
      })}
    >
      <div className={s.left}>
        <WhiteRectangle className={s.longRect} />
        <HeadingSection className={s.head} iconsClassName={s.headingIcons} title={title} socials={social} />
        {!isMobile && <WhiteRectangle />}
      </div>

      <div className={s.right}>
        <div className={s.box}>
          {!isMobile && <WhiteRectangle />}
          <p className={cx(s.text, s.bigPadding)}>{content.left}</p>
          <WhiteRectangle />
        </div>
        <div className={s.box}>
          {!isMobile && <WhiteRectangle />}
          <p className={s.text}>{contentRight}</p>
          <WhiteRectangle />
        </div>
      </div>
    </div>
  )
}

export default JoinNil
