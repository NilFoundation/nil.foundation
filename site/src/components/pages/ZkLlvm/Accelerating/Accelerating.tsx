import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import WhiteRectangle from 'components/WhiteRectangle'
import HeadingSection from 'components/HeadingSection'
// import ListItem from 'components/ListItem';
import Icon from 'components/Icon'

import s from './Accelerating.module.scss'
import { zkllvmPageData } from 'stubs/zkllvmPageData'
import { WebButton } from 'components/WebButton'
import { Column } from 'components/Column'

type AcceleratingProps = {
  className?: string
  data: typeof zkllvmPageData.accelerating
}

const Accelerating = ({ className, data: { title, description, content, footer } }: AcceleratingProps) => {
  const { isMobile } = useViewport()

  return (
    <div className={cx(s.root, className)}>
      <Column type="left">
        <WhiteRectangle />
        <HeadingSection className={s.heading} title={title} description={description} />
        {!isMobile && <WhiteRectangle />}
      </Column>

      <Column type="right" className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <div className={s.content}>
          {content.map((el) => (
            <div className={s.box} key={el.title}>
              <Icon name={el.icon} className={s.icon} />
              <div className={s.titleWrapper}>
                <h3 className={s.title}>{el.title}</h3>
                <Icon name="arrow-up" className={s.arrow} />
              </div>
              <p className={s.description}>{el.description}</p>
            </div>
          ))}
        </div>

        <div className={s.footer}>
          <div>
            <div className={s.buttonBlock}>
              <WebButton className={s.button} href={footer.link}>
                {footer.text}
              </WebButton>
            </div>
            <WhiteRectangle />
          </div>
          <WhiteRectangle />
        </div>
      </Column>
    </div>
  )
}

export default Accelerating
