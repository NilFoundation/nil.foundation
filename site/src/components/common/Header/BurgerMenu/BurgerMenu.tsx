import { InferProps, bool } from 'prop-types'
import cx from 'classnames'
import { useRouter } from 'next/router'

import Button from 'components/Button'
import WhiteRectangle from 'components/WhiteRectangle'

import { links } from '../stub'

import s from './BurgerMenu.module.scss'

function BurgerMenu({ isOpen }: InferProps<typeof BurgerMenu.propTypes>) {
  const { asPath } = useRouter()

  return (
    <div className={cx(s.root, s.links, { [s.burgerOpen]: isOpen })}>
      <div className={cx(s.links, s.head)}>
        {links.main.map((link) => (
          <Button
            key={link.name}
            className={cx(s.mainLink, {
              [s.activeLink]: link.link === asPath,
            })}
            href={link.link}
          >
            {link.name}
          </Button>
        ))}
      </div>
      <div className={s.content}>
        <div>
          <div className={cx(s.links, s.right)}>
            {links.other.map((link) => (
              <Button
                key={link.name}
                className={cx(s.link, s.activeMainLink, {
                  [s.activeLink]: link.link === asPath,
                })}
                href={link.link}
              >
                {link.name}
              </Button>
            ))}
          </div>
          <WhiteRectangle className={s.box1} />
        </div>
      </div>
    </div>
  )
}

BurgerMenu.propTypes = {
  isOpen: bool,
}

export default BurgerMenu
