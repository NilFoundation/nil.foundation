import { memo, useCallback, useMemo } from 'react'
import { InferProps, string } from 'prop-types'
import cx from 'classnames'
import gsap from 'gsap'

import { useViewport } from 'hooks/useViewport'

import Container from 'components/Container'
import Icon from 'components/Icon'
import WhiteRectangle from 'components/WhiteRectangle'
import Button from 'components/Button'
import SocialButton from 'components/SocialButton'

import { stub } from './stub'

import s from './Footer.module.scss'

function Footer({ className }: InferProps<typeof Footer.propTypes>) {
  const getYear = useMemo(() => new Date().getFullYear(), [])

  const scrollTop = useCallback(() => {
    gsap.to(window, { duration: 1, scrollTo: 0 })
  }, [])

  return (
    <div className={cx(s.root, className)}>
      <div className={s.head}>
        <Icon name="logo" />
        <WhiteRectangle />
      </div>
      <Container className={s.wrapper}>
        <div className={s.center}>
          <div>
            {stub.list.map((el) => (
              <div key={el.title} className={s.linksWrapper}>
                <div className={s.title}>{el.title}</div>
                <ul>
                  {el.links.map((item) => (
                    <li key={item.name} className={s.item}>
                      <Button href={item.link}>{item.name}</Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={s.socials}>
            {stub.socials.map((el) => (
              <div key={el.title} className={s.socialWrapper}>
                <div className={s.title}>{el.title}</div>
                <div className={s.icons}>
                  {el.icons.map((item) => (
                    <SocialButton key={item.icon} href={item.link} icon={item.icon} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={s.address}>
            {stub.corporate.map((el) => (
              <div key={el.title} className={s.socialWrapper}>
                <div className={s.title}>{el.title}</div>
                <div className={s.icons}>
                  {el.icons.map((item) => (
                    <SocialButton key={item.icon} href={item.link} icon={item.icon} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* <div className={s.address}>
            <div className={s.title}>{stub.address.title}</div>
            <div className={s.addressWrapper}>
              {stub.address.places.map((el) => (
                <div key={el.name} className={s.place}>
                  {el.name}
                </div>
              ))}
            </div>
          </div> */}
        </div>

        <div className={s.bottom}>
          <div className={s.copyright}>
            © All rights reserved. =nil; Foundation {getYear} |{' '}
            <span className={s.registerNumber}>nil LLC reg. number 389585</span>
          </div>
          <Button className={s.arrow} onClick={scrollTop}>
            <Icon name="arrow-up" />
          </Button>
        </div>
      </Container>
    </div>
  )
}

Footer.propTypes = {
  className: string,
}

export default memo(Footer)
