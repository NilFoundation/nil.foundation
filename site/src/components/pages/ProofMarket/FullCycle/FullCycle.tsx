import React, { useMemo } from 'react'
import { string, shape, arrayOf } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import WhiteRectangle from 'components/WhiteRectangle'
import HeadingSection from 'components/HeadingSection'
import ListItem from 'components/ListItem'

import s from './FullCycle.module.scss'
import { homePageData } from 'stubs/homePageData'
import { WebButton } from 'components/WebButton'
import { Column } from 'components/Column'

type FullCycleProps = {
  className?: string
  data: typeof homePageData.fullCycle
}

const FullCycle = ({ className, data: { title, description, list, footer } }: FullCycleProps) => {
  const { isMobile } = useViewport()

  const columnList = useMemo(
    () =>
      list.reduce<[Array<ArrayElement<typeof list>>, Array<ArrayElement<typeof list>>]>(
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
    [list],
  )

  return (
    <div className={cx(s.root, className)}>
      <Column type="left">
        <WhiteRectangle />
        <HeadingSection title={title} description={description} className={s.heading} />
        {!isMobile && <WhiteRectangle />}
      </Column>
      <Column type="right" className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <div className={s.content}>
          {columnList.map((arr, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div className={s.column} key={i}>
              {arr.map((el) => (
                <ListItem className={s.item} key={el.title} title={el.title} />
              ))}
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

export default FullCycle
