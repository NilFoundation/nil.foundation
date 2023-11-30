import React, { useMemo } from 'react'
import { InferProps, oneOf, string } from 'prop-types'
import cx from 'classnames'

import SocialButton from 'components/SocialButton'

import { headingIcons } from './data'

import s from './HeadingSection.module.scss'

function HeadingSection({
  className,
  descriptionClassName,
  title,
  description,
  socials,
}: InferProps<typeof HeadingSection.propTypes>) {
  const getIcons = useMemo(
    () =>
      headingIcons[socials as keyof typeof headingIcons]?.map((el) => (
        <SocialButton key={el.icon} href={el.link} icon={el.icon} />
      )),
    [socials],
  )

  return (
    <div className={cx(s.root, className)}>
      <h2 className={s.title}>{title}</h2>
      {description && <p className={cx(s.description, descriptionClassName)}>{description}</p>}
      {socials && <div className={s.icons}>{getIcons}</div>}
    </div>
  )
}

HeadingSection.propTypes = {
  className: string,
  descriptionClassName: string,
  title: string.isRequired,
  description: string,
  socials: oneOf(['community', 'corporate']),
}

export default HeadingSection
