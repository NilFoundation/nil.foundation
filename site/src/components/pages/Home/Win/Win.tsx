import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import WhiteRectangle from 'components/WhiteRectangle'
import HeadingSection from 'components/HeadingSection'
import ListItem from 'components/ListItem'
import Button from 'components/ArrowButton'

import s from './Win.module.scss'
import { homePageData } from 'stubs/homePageData'
import { WebButton } from 'components/WebButton'

type WinProps = {
  className?: string
  data: typeof homePageData.win
}

const Win = ({ className, data: { title, description, content, footer } }: WinProps) => {
  const { isMobile } = useViewport()
  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <WhiteRectangle />
        <HeadingSection title={title} description={description} />
        {!isMobile && <WhiteRectangle />}
      </div>

      <div className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <div className={s.content}>
          {content.map((el) => (
            <div className={s.box} key={el.title}>
              <h2 className={s.title}>{el.title}</h2>
              <div className={s.list}>
                {el.list.map((item) => (
                  <ListItem className={s.item} key={item} title={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={s.footer}>
          <WhiteRectangle />
          <div>
            <div className={s.buttonBlock}>
              <WebButton className={s.button} href={footer.link}>{footer.text}</WebButton>
            </div>
            <WhiteRectangle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Win
