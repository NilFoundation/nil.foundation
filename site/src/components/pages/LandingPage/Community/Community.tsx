import React, { useState, useEffect, useMemo } from 'react'
import classNames from 'classnames'
import avatar1 from './assets/avatars/1.png'
import avatar2 from './assets/avatars/2.png'
import avatar3 from './assets/avatars/3.png'
import avatar4 from './assets/avatars/4.png'
import avatar5 from './assets/avatars/5.png'
import avatar6 from './assets/avatars/6.png'
import avatar7 from './assets/avatars/7.png'
import avatar8 from './assets/avatars/8.png'
import avatar9 from './assets/avatars/9.png'
import avatar10 from './assets/avatars/10.png'
import avatar11 from './assets/avatars/11.png'
import avatar12 from './assets/avatars/12.png'
import avatar13 from './assets/avatars/13.png'
import avatar14 from './assets/avatars/14.png'
import support1 from './assets/support/1.png'
import support2 from './assets/support/2.png'
import support3 from './assets/support/3.png'
import support4 from './assets/support/4.png'
import arrow from '../assets/arrow.svg'
import heart from './assets/heart.png'
import s from './Community.module.scss'
import commonStyle from '../common.module.scss'
import { LimitedButton } from 'components/LimitedButton/LimitedButton'
import { useViewport } from 'hooks/useViewport'
import { landingPageData } from 'stubs/landingPageData'

const supportImages = [support1.src, support2.src, support3.src, support4.src]
const desktopColumns = 17
const desktopRows = 7

const mobileColumns = 9
const mobileRows = 7

const desktopHoles: ([number, number] | null)[] = [null, [8, 8], [6, 10], [5, 11], [6, 10], [8, 8], null, null]
const mobileHoles: ([number, number] | null)[] = [null, [4, 4], [2, 6], [1, 7], [2, 6], [4, 4], null, null]

const avatars = [
  avatar1.src,
  avatar2.src,
  avatar3.src,
  avatar4.src,
  avatar5.src,
  avatar6.src,
  avatar7.src,
  avatar8.src,
  avatar9.src,
  avatar10.src,
  avatar11.src,
  avatar12.src,
  avatar13.src,
  avatar14.src,
]

const desktopAvatars = [
  [0, 5],
  [0, 12],
  [1, 10],
  [1, 14],
  [2, 3],
  [2, 13],
  [3, 15],
  [4, 2],
  [5, 1],
  [5, 4],
  [5, 9],
  [5, 15],
  [6, 5],
  [6, 12],
]

const mobileAvatars = [
  [0, 3],
  [0, 6],
  [1, 5],
  [1, 8],
  [2, 1],
  [2, 7],
  [4, 1],
  [5, 0],
  [5, 3],
  [5, 6],
  [5, 8],
  [6, 2],
  [6, 5],
]

const realDesktopAvatarsPosition: Record<number, string> = desktopAvatars.reduce((acc, [row, column], index) => {
  return {
    ...acc,
    [row * desktopColumns + column]: avatars[index],
  }
}, {})

const realMobileAvatarsPosition: Record<number, string> = mobileAvatars.reduce((acc, [row, column], index) => {
  return {
    ...acc,
    [row * mobileColumns + column]: avatars[index],
  }
}, {})

export const Community = () => {
  const { isMobile } = useViewport()
  const columns = isMobile ? mobileColumns : desktopColumns
  const rows = isMobile ? mobileRows : desktopRows
  const holes = isMobile ? mobileHoles : desktopHoles
  const realAvatarPosition = isMobile ? realMobileAvatarsPosition : realDesktopAvatarsPosition

  const tiles = useMemo(
    () =>
      Array.from({ length: rows * columns }, (_, i) => i).map((i) => {
        const x = i % columns
        const y = Math.floor(i / columns)
        const maybeHole = holes[y]
        if (maybeHole !== null) {
          const [left, right] = maybeHole
          if (x >= left && x <= right) {
            return (
              <a
                key={i}
                className={classNames(s.community__tile, s.community__tile_invisible, s.tile)}
                href={landingPageData.joinLink}
                aria-label="Empty community space"
              >
                <span style={{ display: 'none' }}>Empty community space</span>
              </a>
            )
          }
        }
        return (
          <a
            key={i}
            className={classNames(s.community__tile, s.tile)}
            href={landingPageData.joinLink}
            aria-label={realAvatarPosition[i] ? 'Community member tile' : 'Available community space'}
          >
            {realAvatarPosition[i] && (
              <img src={realAvatarPosition[i]} alt="Community member" className={s.tile__avatar} />
            )}
          </a>
        )
      }),
    [isMobile, rows, columns, holes, realAvatarPosition],
  )
  return (
    <div className={commonStyle.wrap}>
      <div className={s.info}>
        <p className={s.info__title}>Unified global state with zero fragmentation</p>
        <p className={s.info__description}>
          zkSharding combines a sharded architecture with zero knowledge security to enable horizontal scaling across a
          unified network of shards.
        </p>
      </div>
      <div className={s.blocks}>
        <div className={classNames(s.block, s.block__top, s.block__top_left)} />
        <div className={classNames(s.block, s.block__top, s.block__top_right)} />

        <a
          className={classNames(s.block, s.block__middle, s.block__middle_left)}
          href="https://explore.nil.foundation/sandbox"
        >
          <p className={s.block__title}>Explore the network</p>
          <p className={s.block__description}>Try and play with examples in the =nil; Sandbox</p>
        </a>
        <a className={classNames(s.block, s.block__middle, s.block__middle_right)} href={landingPageData.joinLink}>
          <p className={s.block__title}>Ready to build? Get started</p>
          <p className={s.block__description}>
            Join our Testnet and set up your environment with =nil; CLI and RPC node.
          </p>
        </a>

        <div className={classNames(s.block, s.block__bottom, s.block__bottom_left)} />
        <div className={classNames(s.block, s.block__bottom, s.block__bottom_right)} />
      </div>
      <div className={s.community}>
        <div className={s.community__title}>Join a growing community of dedicated developers</div>
        <div className={s.community__map}>
          {tiles}
          <div className={s.community__hole}>
            <p className={s.community__intitle}>300+</p>
            <p className={s.community__indescription}>developers onboarded</p>
          </div>
        </div>
        {isMobile && (
          <LimitedButton arrow primary className={s.community__button} href={landingPageData.anounceLink}>
            Join the community
          </LimitedButton>
        )}
      </div>
      <div className={s.join}>
        <img src={heart.src} className={s.join__heart} />
        <div className={s.join__block}>
          <h2 className={s.join__title}>Here to support you</h2>
          <p className={s.join__description}>
            Your feedback is crucial. We&apos;re building a network to serve ambitious, visionary developers and
            we&apos;ll help you build apps that can serve millions.
          </p>
          <div className={s.join__avatars}>
            {supportImages.map((avatar, index) => (
              <a className={s.tile} key={index} href={landingPageData.anounceLink}>
                <img
                  key={index}
                  src={avatar}
                  alt="Community Avatar"
                  className={classNames(s.join__avatar, s.tile__avatar)}
                />
              </a>
            ))}
            <a className={s.tile} href={landingPageData.anounceLink}>
              <div className={s.tile__dots}>
                <div className={s.tile__dot} />
                <div className={s.tile__dot} />
                <div className={s.tile__dot} />
              </div>
            </a>
          </div>
          <LimitedButton arrow primary className={s.join__button} href={landingPageData.anounceLink}>
            Get in touch
          </LimitedButton>
        </div>
      </div>
    </div>
  )
}
