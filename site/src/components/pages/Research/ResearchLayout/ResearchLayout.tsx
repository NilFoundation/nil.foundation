import React from 'react'
import s from './ResearchLayout.module.scss'
import { arrayOf, node } from 'prop-types'
import Container from 'components/Container'
import SideNavigation from 'components/SideNavigation'
import FooterAnimationSection from 'components/FooterAnimationSection'
import LastSection from 'components/LastSection'
import WhiteRectangle from 'components/WhiteRectangle'
import TagList from './TagList'
import { useRouter } from 'next/router'
import { MappedTag } from 'src/strapi/types/entities'
import { footerDataItems, footerDataMobileItems } from './footerData'
import { useViewport } from 'hooks/useViewport'

type ResearchLayoutProps = {
  children: React.ReactNode
  tags: MappedTag[]
}

const ResearchLayout = ({ children, tags }: ResearchLayoutProps) => {
  const router = useRouter()

  const activeTagSlug = router.query?.slug ?? ''

  const { isMobile } = useViewport()

  const onTagClickHandler = async (tagItem: MappedTag) => {
    if (tagItem.slug === activeTagSlug) {
      await router.push('/research')
      return
    }

    await router.push(`/research/tag/${tagItem.slug}`)
  }

  return (
    <Container className={s.container} id="footer_nav">
      <SideNavigation
        linkWrapperClassName={s.sideNavigationLinkWrapper}
        title="Research"
        className={s.sideNavigation}
        titleAnimation={false}
      >
        <TagList className={s.sideTagList} tags={tags} activeTagSlug={activeTagSlug} onTagClick={onTagClickHandler} />
      </SideNavigation>
      <div className={s.wrapper}>
        <div className={s.contentWrapper}>
          <section className={s.titleWrapper}>
            <h1 className={s.title}>Research</h1>
            <p className={s.description}>
              Our team’s latest work on trustless cloud data management, non-interactive zero-knowledge proofs,
              decentralized cryptography, and more.
            </p>
          </section>
          <section className={s.tagsWrapper}>
            <TagList tags={tags} activeTagSlug={activeTagSlug} onTagClick={onTagClickHandler} />
          </section>
          {children}
          <FooterAnimationSection
            items={isMobile ? footerDataMobileItems : footerDataItems}
            className={s.footerSection}
          />
        </div>
      </div>
      <FooterAnimationSection
        items={isMobile ? footerDataMobileItems : footerDataItems}
        className={s.footerSectionMobile}
      />
    </Container>
  )
}

export default ResearchLayout
