import React from 'react'
import { zkShardingPageData } from 'stubs/zkShardingPageData'

import s from './More.module.scss'
import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import cx from 'classnames'
import { useViewport } from 'hooks/useViewport'
import { WebButton } from 'components/WebButton'

type Props = {
  className?: string
  data: typeof zkShardingPageData.more
}

const More = ({ data: { title, description, content, contentFooter, footer }, className }: Props) => {
  const { isMobile } = useViewport()

  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <WhiteRectangle />
        <HeadingSection className={s.heading} title={title} description={description} />
        {!isMobile && <WhiteRectangle />}
      </div>

      <div className={s.right}>
        {!isMobile && <WhiteRectangle />}
        {/* <div className={s.content}>
						{content.map((el) => (
							<div className={s.box} key={el.title}>
								<Icon name={el.icon} className={s.icon} />
								<span className={s.title}>{el.title}</span>
								<p className={s.description}>{el.description}</p>
							</div>
						))}
					</div> */}

        <div className={s.contentFooterWrapper}>
          <p className={s.contentFooter}>{contentFooter}</p>
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

export default More
