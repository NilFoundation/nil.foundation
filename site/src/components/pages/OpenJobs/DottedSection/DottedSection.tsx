import React from 'react'
import WhiteRectangle from 'components/WhiteRectangle'
import Button from 'components/Button/Button'
import s from './DottedSection.module.scss'
import { useViewport } from 'hooks/useViewport'

const DottedSection = () => {
  const { isMobile } = useViewport()

  return (
    <section className={s.container}>
      <div>
        <WhiteRectangle className={s.whiteRectTop} />
        {isMobile && <WhiteRectangle className={s.whiteRectBottom} />}
      </div>
      <div className={s.titleWrapper}>
        <p className={s.title}>
          Interested in =nil; but don&apos;t&nbsp;see a&nbsp;fitting position? Contact us at{' '}
          <Button className={s.link} href="mailto:hr@nil.foundation">
            hr@nil.foundation
          </Button>
        </p>
        <WhiteRectangle className={s.whiteRectBottom} />
      </div>
      <div>
        <WhiteRectangle className={isMobile ? s.whiteRectBottom : s.whiteRectTop} />
      </div>
      {!isMobile && (
        <div className={s.subgrid}>
          <div>
            <WhiteRectangle className={s.whiteRectBottom} />
          </div>
          <div>
            <WhiteRectangle className={s.whiteRectTop} />
          </div>
        </div>
      )}
    </section>
  )
}

export default DottedSection
