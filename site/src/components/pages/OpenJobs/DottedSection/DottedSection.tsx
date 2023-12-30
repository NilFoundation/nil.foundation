import React from 'react'
import DottedCard from 'components/DottedCard'
import WhiteRectangle from 'components/WhiteRectangle'
import Button from 'components/Button/Button'
import s from './DottedSection.module.scss'

const whiteRectangleLineMarginTop = 224

const whiteRectangleLineMobileMarginTop = 60

const whiteRectangleLineData = [
  { id: 1, margin: 0, flexBasis: 275.5 },
  { id: 2, margin: 0, flexBasis: 275.5 },
  { id: 3, margin: 96, flexBasis: 275 },
  { id: 4, margin: 66, flexBasis: 259 },
]

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
      </DottedCard>
    </section>
  )
}

export default DottedSection

          // <WhiteRectangleLine
          //   marginTop={isMobile ? whiteRectangleLineMobileMarginTop : whiteRectangleLineMarginTop}
          //   data={isMobile ? whiteRectangleLineMobileData : whiteRectangleLineData}
          // />
