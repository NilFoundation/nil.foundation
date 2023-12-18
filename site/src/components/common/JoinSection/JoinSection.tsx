import React from 'react'
import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import s from './JoinSection.module.scss'
import { Column } from 'components/Column'

function JoinSection({ title, leftText, rightText, social, className }: InferProps<typeof JoinSection.propTypes>) {
  return (
    <section className={classNames(s.container, className)}>
      <Column type="left" className={s.headingWrapper}>
        <WhiteRectangle />
        <HeadingSection title={title} socials={social} className={s.heading} iconsClassName={s.headingIcons} />
        <WhiteRectangle className={s.line} />
      </Column>
      <div className={s.contentWrapperLeft}>
        <WhiteRectangle className={s.line} />
        <p className={s.text}>{leftText}</p>
        <WhiteRectangle className={s.bottomLine} />
      </div>
      <div className={s.contentWrapperRight}>
        <WhiteRectangle className={s.line} />
        <p className={classNames(s.text, s.textRight)}>{rightText}</p>
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
