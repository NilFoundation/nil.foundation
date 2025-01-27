import s from './Roadmap.module.scss'
import cn from 'classnames'
import { StarIcon } from './StarIcon'
import { LimitedButton } from 'components/LimitedButton/LimitedButton'
import commonStyle from '../common.module.scss'
import { useViewport } from 'hooks/useViewport'
import { landingPageData } from 'stubs/landingPageData'

export const Roadmap = () => {
  const { isMobile } = useViewport()
  return (
    <div className={cn(s.roadmap)}>
      <div className={s.roadmap__text}>
        <h3 className={s.roadmap__title}>MAINNET 2025</h3>
        <p className={s.roadmap__title}>The time to join is now</p>
      </div>
      {isMobile ? (
        <div className={s.mobileTimeline}>
          <StarIcon />
          <div className={s.timeline__text}>
            <p className={s.timeline__date}>July 2024</p>
            <h3 className={s.timeline__title}>Devnet</h3>
            <p className={s.timeline__description}>Proof of concept, open to selected devs.</p>
          </div>
          <div className={cn(s.timeline__item, s.timeline__item_white)} />
          <StarIcon />
          <div className={s.timeline__text}>
            <p className={s.timeline__date}>November 2024</p>
            <h3 className={s.timeline__title}>Testnet</h3>
            <p className={s.timeline__description}>Join our Testnet early and start deploying on =nil;</p>
            <div>
              <LimitedButton primary>Join Testnet</LimitedButton>
            </div>
          </div>
          <div className={cn(s.timeline__item, s.timeline__item_grad)} />
          <StarIcon fill="#5B5B5B" />
          <div className={s.timeline__text}>
            <p className={s.timeline__date}>2025</p>
            <h3 className={s.timeline__title}>Mainnet Alpha </h3>
            <p className={s.timeline__description}>Shape the network for all kind of your needs</p>
          </div>
        </div>
      ) : (
        <div className={cn(s.timeline)}>
          <div className={cn(s.timeline__item, s.timeline__item_white)} />
          <StarIcon />
          <div className={cn(s.timeline__item, s.timeline__item_white)} />
          <StarIcon />
          <div className={cn(s.timeline__item, s.timeline__item_grad)} />
          <StarIcon fill="#5B5B5B" />
          <div className={cn(s.timeline__item, s.timeline__item_gray)} />
          <div className={cn(s.timeline__item, s.timeline__item_gray)} />
          <div className={s.timeline__invisible} />
          <div className={s.timeline__text}>
            <p className={s.timeline__date}>July 2024</p>
            <h3 className={s.timeline__title}>Devnet</h3>
            <p className={s.timeline__description}>Access for all developers to begin testing</p>
          </div>
          <div className={s.timeline__text}>
            <p className={s.timeline__date}>November 2024</p>
            <h3 className={s.timeline__title}>Testnet</h3>
            <p className={s.timeline__description}>Join our Testnet early and start deploying on =nil;</p>
            <div>
              <LimitedButton primary href={landingPageData.joinLink}>
                Start building with us
              </LimitedButton>
            </div>
          </div>
          <div className={s.timeline__text}>
            <p className={s.timeline__date}>2025</p>
            <h3 className={s.timeline__title}>Mainnet Alpha </h3>
            <p className={s.timeline__description}>Coming soon</p>
          </div>
          <div className={s.timeline__invisible} />
        </div>
      )}
    </div>
  )
}
