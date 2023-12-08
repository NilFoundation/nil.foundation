import { useCallback, useState } from 'react'

import { shape, string } from 'prop-types'
import cx from 'classnames'
import Image from 'next/image'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import s from './Partners.module.scss'
import Item from './Item'
import { aboutPageData } from 'stubs/aboutPageData'
import LeftColumn from 'components/Columns/LeftColumn'
import RightColumn from 'components/Columns/RightColumn'

type PartnersProps = {
  className?: string
  data: typeof aboutPageData.partners
}

const Partners = ({ className, data: { title, content } }: PartnersProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { isMobile } = useViewport()

  const toggleItem = useCallback(
    (index: number) => {
      setActiveIndex(index === activeIndex ? -1 : index)
      if (!isMobile) {
        setTimeout(() => {
          ScrollTrigger.refresh()
        }, 400)
      }
    },
    [activeIndex, isMobile],
  )

  return (
    <div className={cx(s.root, className)}>
      <LeftColumn className={s.left}>
        <WhiteRectangle />
        <HeadingSection className={s.title} title={title} />
        {!isMobile && <WhiteRectangle />}
      </LeftColumn>

      <RightColumn className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <div className={s.content}>
          {content.map((el, index) => (
            <Item key={el.title} title={el.title} index={index} activeIndex={activeIndex} onClick={toggleItem}>
              <div className={s.box}>
                {el.logos.map((logo) => (
                  <div key={logo.url} className={s.imageWrapper}>
                    <Image src={logo.url} fill alt="logo" />
                  </div>
                ))}
              </div>
            </Item>
          ))}
        </div>
        <WhiteRectangle />
      </RightColumn>
    </div>
  )
}

export default Partners
