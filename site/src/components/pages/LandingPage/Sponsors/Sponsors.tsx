import s from './Sponsors.module.scss'
import polichain from './assets/1-Polichain capital.svg'
import bcap from './assets/2-BCAP_logo.svg'
import dao from './assets/x3_3-dao5.png'
import iosg from './assets/x3_4-IOSG.png'
import bitscale from './assets/5-bitscale.svg'
import hasu from './assets/6-Hasu.svg'
import sergey from './assets/7-Sergey.svg'
import colin from './assets/8-Colin.svg'
import { useViewport } from 'hooks/useViewport'
import cn from 'classnames'

const sponsors = [
  { src: polichain.src, alt: 'Polichain Capital' },
  { src: bcap.src, alt: 'BCAP', className: s.bcap },
  { src: dao.src, alt: 'DAO5' },
  { src: iosg.src, alt: 'IOSG' },
  { src: bitscale.src, alt: 'Bitscale' },
  { src: hasu.src, alt: 'Hasu' },
  { src: sergey.src, alt: 'Sergey' },
  { src: colin.src, alt: 'Colin' },
]

export const Sponsors = () => {
  const { isMobile } = useViewport()
  return (
    <div className={s.sponsors}>
      <div className={s.sponsors__title}>Backed by</div>
      <div className={s.sponsors__container}>
        <div className={s.sponsors__list}>
          {/* Original list */}
          {sponsors.map((sponsor, index) => (
            <div className={s.sponsors__item} key={`original-${index}`}>
              <div
                className={cn(s.sponsors__img, sponsor.className || '')}
                style={{ backgroundImage: `url('${sponsor.src}')` }}
              />
            </div>
          ))}
          {/* Duplicate list for seamless infinite scroll */}
          {isMobile &&
            sponsors.map((sponsor, index) => (
              <div className={s.sponsors__item} key={`duplicate-${index}`}>
                <div
                  className={cn(s.sponsors__img, sponsor.className || '')}
                  style={{ backgroundImage: `url('${sponsor.src}')` }}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
