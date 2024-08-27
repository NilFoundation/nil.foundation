import React from 'react'
import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import s from './JoinNil.module.scss'
import { useViewport } from 'hooks/useViewport'
import Button from 'components/Button'
import { WebButton } from 'components/WebButton'
import { seo } from 'constants/seo'

function JoinNil({ title, leftText, rightText, social, className }: InferProps<typeof JoinNil.propTypes>) {
  const { isMobile } = useViewport()

  return (
    <section className={classNames(s.container, className)}>
      <div className={s.headingWrapper}>
        <WhiteRectangle />
        <HeadingSection title={title} socials={social} className={s.heading} iconsClassName={s.headingIcons} />
        <WhiteRectangle className={s.line} />
      </div>
      <div className={s.contentWrapperLeft}>
        <WhiteRectangle className={s.line} />
        <p className={classNames(s.text, s.bigBottomPadding)}>
          {leftText}
          <WebButton className={s.devnet} href={seo.devnetLink}>
            Join our devnet
          </WebButton>
        </p>
        {!isMobile && <div style={{ height: '80px' }}></div>}
        <WhiteRectangle className={s.lineMobile} />
      </div>
      <div className={s.contentWrapperRight}>
        <WhiteRectangle className={s.line} />
        {/* <p className={s.text}>{rightText}</p> */}
        <div style={{ height: '180px' }}></div>
        <WhiteRectangle className={s.lineMobile} />
      </div>
    </section>
  )
}

JoinNil.propTypes = {
  title: PropTypes.string.isRequired,
  leftText: PropTypes.string,
  rightText: PropTypes.string,
  social: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default JoinNil
