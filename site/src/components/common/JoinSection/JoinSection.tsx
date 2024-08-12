import React from 'react'
import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import s from './JoinSection.module.scss'
import { Column } from 'components/Column'
import { useViewport } from 'hooks/useViewport'
import { WebButton } from 'components/WebButton'
import { seo } from 'constants/seo'

function JoinSection({ title, leftText, rightText, social, className }: InferProps<typeof JoinSection.propTypes>) {
  const { isMobile } = useViewport()

  return (
    <section className={classNames(s.container, className)}>
      <Column type="left" className={s.headingWrapper}>
        <WhiteRectangle />
        <HeadingSection title={title} socials={social} className={s.heading} iconsClassName={s.headingIcons} />
        <WhiteRectangle className={s.line} />
      </Column>
      <div className={s.contentWrapperLeft}>
        <WhiteRectangle className={s.line} />
        <p className={s.text}>
          {leftText}
          <WebButton className={s.devnet} href={seo.devnetLink}>
            Join our devnet
          </WebButton>
        </p>
        {!isMobile && <div style={{ height: '80px' }}></div>}
        <WhiteRectangle className={s.bottomLine} />
      </div>
      <div className={s.contentWrapperRight}>
        <WhiteRectangle className={s.line} />
        {/* <p className={classNames(s.text, s.textRight)}>{rightText}</p> */}
        <div style={{ height: '220px' }}></div>
        <WhiteRectangle className={s.bottomLine} />
        {/* <WhiteRectangle className={s.lineMobile} /> */}
      </div>
    </section>
  )
}

JoinSection.propTypes = {
  title: PropTypes.string.isRequired,
  leftText: PropTypes.string,
  rightText: PropTypes.string,
  social: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default JoinSection
