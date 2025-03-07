import React, { useMemo } from 'react'
import { InferProps, oneOf, string } from 'prop-types'
import cx from 'classnames'

import SocialButton from 'components/SocialButton'

import { headingIcons } from './data'

import s from './HeadingSection.module.scss'

function HeadingSection({
  className,
  iconsClassName,
  descriptionClassName,
  title,
  description,
  socials,
  offset,
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
      {offset && <div style={{ height: offset }} />}
      {socials && <div className={cx(s.icons, iconsClassName)}>{getIcons}</div>}
    </div>
  )
}

HeadingSection.propTypes = {
  className: string,
  iconsClassName: string,
  descriptionClassName: string,
  title: string.isRequired,
  description: string,
  socials: oneOf(['community', 'corporate']),
  offset: string,
}

export default HeadingSection
