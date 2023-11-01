import Container from 'components/Container'

import SideNavigation from 'components/SideNavigation'
import FooterAnimationSection from 'components/FooterAnimationSection'
import Button from 'components/Button'
import LastSection from 'components/LastSection'
import WhiteRectangle from 'components/WhiteRectangle'
import s from './Glossary.module.scss'
import { MappedGlossary } from 'src/strapi/types/entities'
import { footerDataItems, footerDataMobileItems } from 'pages/Research/ResearchLayout/footerData'

type GlossaryProps = {
  data: {
    letter: MappedGlossary[]
  }
}

const Glossary = ({ data }: GlossaryProps) => {
  return (
    <Container className={s.container}>
      <SideNavigation title="Glossary" className={s.sideNavigation} titleAnimation={false} />
      <div className={s.root}>
        <div className={s.pageContent}>
          <div className={s.info}>
            <div className={s.textWrapper}>
              <h1 className={s.pageTitle}>Glossary of Terms</h1>
            </div>
            <div className={s.textWrapper}>
              <p className={s.pageSubtitle}>
                Whether you&apos;re new to the field or seeking a quick refresher, this glossary will help you navigate
                the world of zkProofs and understand the terminology commonly used in our platform.
              </p>
            </div>
          </div>
          <div className={s.glossary}>
            <ul className={s.glossaryContainer}>
              {Object.keys(data).map((el) => (
                <li className={s.primer} key={el}>
                  <div className={s.primerContainer}>
                    <p className={s.letter}>{el}</p>
                    <ul className={s.wordsContainer}>
                      {Object.values(data[el as 'letter']).map((word) => (
                        <li key={word.word} className={s.word}>
                          <Button href={`/glossary/${word.slug}`}>{word.word}</Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <FooterAnimationSection items={footerDataItems} className={s.footerSection} />
        </div>
      </div>
      <FooterAnimationSection items={footerDataMobileItems} className={s.footerSectionMobile} />
      <div id="footer_nav" />
    </Container>
  )
}

export default Glossary
