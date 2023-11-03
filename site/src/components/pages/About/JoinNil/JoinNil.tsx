import React from 'react'
import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import s from './JoinNil.module.scss'

function JoinNil({ title, leftText, rightText, social, className }: InferProps<typeof JoinNil.propTypes>) {
  return (
    <section className={classNames(s.container, className)}>
      <div className={s.headingWrapper}>
        <WhiteRectangle />
        <HeadingSection title={title} socials={social} className={s.heading} />
        <WhiteRectangle className={s.line} />
      </div>
      <div className={s.contentWrapperLeft}>
        <WhiteRectangle className={s.line} />
        <p className={s.text}>{leftText}</p>
        <WhiteRectangle className={s.lineMobile} />
      </div>
      <div className={s.contentWrapperRight}>
        <WhiteRectangle className={s.line} />
        <p className={s.text}>{rightText}</p>
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
