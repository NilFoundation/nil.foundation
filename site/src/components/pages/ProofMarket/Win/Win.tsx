import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import WhiteRectangle from 'components/WhiteRectangle'
import HeadingSection from 'components/HeadingSection'
import ListItem from 'components/ListItem'

import s from './Win.module.scss'
import { homePageData } from 'stubs/homePageData'
import { WebButton } from 'components/WebButton'
import { Column } from 'components/Column'

type WinProps = {
  className?: string
  data: typeof homePageData.win
}

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

const Win = ({ className, data: { title, description, content, footer } }: WinProps) => {
  const columnList = content.map((item) => {
    return {
      ...item,
      list: item.list.reduce<[Array<ArrayElement<typeof item.list>>, Array<ArrayElement<typeof item.list>>]>(
        (acc, el, index) => {
          if (index % 2 === 0) {
            acc[0].push(el)
          } else {
            acc[1].push(el)
          }

          return acc
        },
        [[], []],
      ),
    }
  })

  const { isMobile } = useViewport()
  return (
    <div className={cx(s.root, className)}>
      <Column type="left">
        <WhiteRectangle />
        <HeadingSection title={title} className={s.heading} description={description} />
        {!isMobile && <WhiteRectangle />}
      </Column>

      <Column type="right" className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <div className={s.content}>
          {columnList.map((el) => (
            <div className={s.box} key={el.title}>
              <h2 className={s.title}>{el.title}</h2>
              <div className={s.list}>
                {el.list.map((arr, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <div key={index} className={s.column}>
                    {arr.map((item) => (
                      <ListItem className={s.item} key={item} title={item} />
                    ))}
                  </div>
                ))}
              </div>
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

export default Win
