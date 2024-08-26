import { shape, string } from 'prop-types'
import cx from 'classnames'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'
import SocialButton from 'components/SocialButton'

import s from './Hero.module.scss'
import { aboutPageData } from 'stubs/aboutPageData'
import { useViewport } from 'hooks/useViewport'
import { Column } from 'components/Column'

type HeroProps = {
  className?: string
  data: typeof aboutPageData.hero
}

const getContent = (isMobile: boolean | null, content: string | { isDesktop: string; isMobile: string }) => {
  if (typeof content === 'string') {
    return content
  }

  return isMobile ? content.isMobile : content.isDesktop
}

const Hero = ({ className, data: { title, description } }: HeroProps) => {
  const { isMobile } = useViewport()
  return (
    <div className={cx(s.root, className)}>
      <Column type="left" className={s.left}>
        <HeadingSection className={s.heading} title={title} description={isMobile ? description : null} />
        <div className={s.heroDescription}>
          <p>{description}</p>
          <div style={{ height: '50px' }}></div>
        </div>
        <div className={s.box}>
          <WhiteRectangle className={s.line} />
          <div className={s.info}>
            <WhiteRectangle />
          </div>
        </div>
      </Column>
      {!isMobile && (
        <Column type="right" className={s.right}>
          {null}
        </Column>
      )}
    </div>
  )
}

export default Hero
