import React, { useMemo } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import WhiteRectangle from 'components/WhiteRectangle'
import HeadingSection from 'components/HeadingSection'
import Icon from 'components/Icon'

import s from './Secure.module.scss'
import { zkShardingPageData } from 'stubs/zkShardingPageData'
import { WebButton } from 'components/WebButton'

type SecureProps = {
  className?: string
  data: typeof zkShardingPageData.secure
}

const Secure = ({ className, data: { title, description, content, footer } }: SecureProps) => {
  const { isMobile } = useViewport()

  const columnContent = useMemo(
    () =>
      content.reduce<[ArrayElement<typeof content>[], ArrayElement<typeof content>[]]>(
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
    [content],
  )

  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <WhiteRectangle />
        <HeadingSection className={s.heading} title={title} description={description} />
        {!isMobile && <WhiteRectangle />}
      </div>

      <div className={s.right}>
        {!isMobile && (
          <div className={s.rightHeader}>
            <div>
              <WhiteRectangle />
            </div>
            <div>
              <WhiteRectangle />
            </div>
          </div>
        )}
        <div className={s.content}>
          {columnContent.map((arr, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={index}>
              {arr.map((el) => (
                <div className={s.box} key={el.title}>
                  <div>
                    <Icon name={el.icon} className={s.icon} />
                  </div>
                  <div className={s.textWrapper}>
                    <span className={s.title}>{el.title}</span>
                    <p className={s.description}>{el.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={s.footer}>
          <div>
            <div className={s.buttonWrapper}>
              <WebButton className={s.button} href={footer.link}>
                {footer.text}
              </WebButton>
            </div>
            <WhiteRectangle />
          </div>
          <WhiteRectangle />
        </div>
      </div>
    </div>
  )
}

export default Secure
