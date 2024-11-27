import { useCallback, useEffect, useMemo, useState } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'

import { useViewport } from 'hooks/useViewport'

import Icon from 'components/Icon'
import Container from 'components/Container'
import Button from 'components/Button'

import BurgerMenu from './BurgerMenu'

import s from './Header.module.scss'
import { links } from './stub'
import { Config } from 'src/strapi/types/Config'

type HeaderProps = {
  className?: string
  config: Config,
}

function Header({ className, config }: HeaderProps) {
  const router = useRouter()
  const { isMobile } = useViewport()

  const [isBurgerOpen, setBurgerOpen] = useState(false)

  const realLinks = useMemo(() => {
    if (config.isGlossaryOn) {
      return {
        ...links,
        other: [...links.other, { name: 'Glossary', link: '/glossary' }],
      }
    }
    return links
  }, [config])

  useEffect(() => {
    setBurgerOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname])

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.classList.add(s.hidden)
    } else {
      document.body.classList.remove(s.hidden)
    }
  }, [isBurgerOpen])

  const handleClickBurger = useCallback(() => {
    setBurgerOpen(!isBurgerOpen)
  }, [isBurgerOpen])

  return (
    <Container className={cx(s.root, className)}>
      <nav className={s.wrapper}>
        <Button href="/">
          <Icon name="logo" className={s.logo} />
        </Button>
        <div className={s.box}>
          {realLinks.other.map((el) => (
            <Button
              key={el.name}
              href={el.link}
              className={cx(s.otherLink, {
                [s.isActive]: router.asPath === el.link,
              })}
            >
              {el.name}
            </Button>
          ))}
        </div>
        {isMobile && (
          <>
            <div className={s.buttonsWrapper} onClick={handleClickBurger}>
              <Icon
                className={cx(s.burgerBtn, {
                  [s.isBurgerOpen]: isBurgerOpen,
                })}
                name="cross"
              />
              <Icon
                className={cx(s.burgerBtn, {
                  [s.isBurgerOpen]: !isBurgerOpen,
                })}
                name="squares"
              />
            </div>
            <BurgerMenu isOpen={isBurgerOpen} />
          </>
        )}
      </nav>
    </Container>
  )
}

export default Header
