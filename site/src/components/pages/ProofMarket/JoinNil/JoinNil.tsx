import { string, shape } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import s from './JoinNil.module.scss'
import { JoinNilBaseData } from './JoinNilBaseData'
import LeftColumn from 'components/Columns/LeftColumn'
import RightColumn from 'components/Columns/RightColumn'

type JoinNilProps<T extends JoinNilBaseData> = {
  className?: string
  boxClassName?: string
  data: T
  withMargin?: boolean
}

function getContent(isMobile: boolean | null, content: JoinNilBaseData['content']) {
  if (typeof content.newRight === 'string') {
    return content.newRight
  }

  return !isMobile ? content.newRight.isDesktop : content.newRight.isMobile
}

const JoinNil = <T extends JoinNilBaseData>({
  className,
  boxClassName,
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
      <LeftColumn>
        <WhiteRectangle className={s.longRect} />
        <HeadingSection className={s.head} iconsClassName={s.headIcons} title={title} socials={social} />
        {!isMobile && <WhiteRectangle />}
      </LeftColumn>

      <RightColumn className={s.right}>
        <div className={cx(s.box, boxClassName)}>
          {!isMobile && <WhiteRectangle />}
          <p className={s.text}>{content.left}</p>
          <WhiteRectangle />
        </div>
        <div className={cx(s.box, boxClassName)}>
          {!isMobile && <WhiteRectangle />}
          <p className={s.text}>{contentRight}</p>
          <WhiteRectangle />
        </div>
      </RightColumn>
    </div>
  )
}

export default JoinNil
