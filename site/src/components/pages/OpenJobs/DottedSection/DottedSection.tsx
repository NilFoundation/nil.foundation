import React from 'react'
import DottedCard from 'components/DottedCard'
import WhiteRectangle from 'components/WhiteRectangle'
import Button from 'components/Button/Button'
import s from './DottedSection.module.scss'

const DottedSection = () => {
  return (
    <section className={s.container}>
      <DottedCard className={s.dottedCard} isHeadLine>
        <div className={s.wrapper}>
          <div className={s.titleWrapper}>
            <p className={s.title}>
              Interested in =nil; but don&apos;t&nbsp;see a&nbsp;fitting position? Contact us at{' '}
              <Button className={s.link} href="mailto:hr@nil.foundation">
                hr@nil.foundation
              </Button>
            </p>
            <WhiteRectangle className={s.line} />
          </div>
        </div>
        <WhiteRectangle className={s.bottomLine} />
      </DottedCard>
    </section>
  )
}

export default DottedSection
