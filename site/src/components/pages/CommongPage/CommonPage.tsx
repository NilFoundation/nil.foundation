import cx from 'classnames'
import { useRouter } from 'next/router'

import { useViewport } from 'hooks/useViewport'

import Container from 'components/Container'
import Icon from 'components/Icon'
import SocialButton from 'components/SocialButton'
import Button from 'components/Button'

import SideNavigation from 'components/SideNavigation'
import s from './CommonPage.module.scss'
import 'katex/dist/katex.min.css'
import katex from 'katex'

import type { JoinNilBaseData } from 'pages/ProofMarket/JoinNil/JoinNilBaseData'
import ToggleButton from 'components/ToggleButton'
import { useEffect, useLayoutEffect } from 'react'

type ArrowButtonProps = {
  className?: string
}

type CommonPageProps = {
  page: {
    title: string
    content: string
  }
  content: {
    joinNil: JoinNilBaseData
  }
}

const CommonPage = ({ page, content }: CommonPageProps) => {
  const router = useRouter()
  const { isMobile } = useViewport()

  useLayoutEffect(() => {
    // use katex for every script with type math/tex anything start with it
    const mathElements = document.querySelectorAll('script[type^="math/tex"]')
    mathElements.forEach((element) => {
      const tex = element.textContent || ''
      // if element has mode display span should be inline element
      const el = document.createElement('span')
      el.style.display = 'inline-block'
      if (element.getAttribute('type') === 'math/tex; mode=display') {
        el.style.display = 'block'
      }
      try {
        katex.render(tex, el, {
          displayMode: true,
        })
        element.replaceWith(el)
      } catch (e) {
        console.error(e)
      }
    })
  }, [page])

  return (
    <Container className={s.container} id="footer_nav">
      <div className={s.root}>
        <div className={s.content}>
          <div className={cx(s.head, s.marginBlock)}>
            <div className={cx(s.content, s.wrapper)}>
              <h1 className={cx(s.title, s.blogTitle, s.marginBlock)}>{page.title}</h1>
            </div>
          </div>
          <div className={cx(s.main, s.content)} dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
      </div>
    </Container>
  )
}

export default CommonPage
