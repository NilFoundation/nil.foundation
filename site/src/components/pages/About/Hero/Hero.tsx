import { shape, string } from 'prop-types'
import cx from 'classnames'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'
import SocialButton from 'components/SocialButton'

import s from './Hero.module.scss'
import { aboutPageData } from 'stubs/aboutPageData'
import { useViewport } from 'hooks/useViewport'

type HeroProps = {
  className?: string
  data: typeof aboutPageData.hero
}

const Hero = ({ className, data: { title, description, info, content, future, footer } }: HeroProps) => {
  const { isMobile } = useViewport()
  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <HeadingSection className={s.heading} title={title} description={isMobile ? description : null} />
        <div className={s.heroDescription}>
          <p>{description}</p>
        </div>
        <div className={s.box}>
          <WhiteRectangle className={s.line} />
          <div className={s.info}>
            <p>{info}</p>
            <WhiteRectangle />
          </div>
        </div>
      </div>

      <div className={s.right}>
        <div className={s.rectWrapper}>
          <WhiteRectangle />
        </div>
        <WhiteRectangle className={s.rect} />

        <div className={s.content}>
          {content.map((el) => (
            <div className={s.card} key={el.title}>
              <h3 className={s.title}>{el.title}</h3>
              <div className={s.desc}>
                {el.description.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          ))}

          {future.map((el) => (
            <div className={cx(s.card, s.grey)} key={el.title}>
              <h3 className={s.title}>{el.title}</h3>
              <div className={s.desc}>
                <p>{el.description}</p>
              </div>
            </div>
          ))}

          <div className={s.footer}>
            <div className={s.footerWrapper}>
              <p className={s.inTouch}>Stay in touch with our news</p>
              <div className={s.socials}>
                {footer.socials.map((el) => (
                  <SocialButton className={s.socialButton} key={el.icon} icon={el.icon} href={el.link} />
                ))}
              </div>
            </div>
            <WhiteRectangle className={s.wRect} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
