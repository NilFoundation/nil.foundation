import s from './Intro.module.scss'
import commonStyles from '../common.module.scss'
import { useStyletron } from 'styletron-react'
import classNames from 'classnames'
import tree from './assets/x3_tree.png'
import { Arrow } from '../Arrow'
import { LimitedButton } from 'components/LimitedButton/LimitedButton'
import { landingPageData } from 'stubs/landingPageData'
import { useViewport } from 'hooks/useViewport'
import { Line } from '../Line'

const text = `=nil; is what Ethereum should have 
been – a sharded blockchain 
powered by ZK.`

const items: { title: string; description: string; link: string }[] = [
  {
    title: 'Lower transaction fees',
    description: 'Reduced fees thanks to decreased network congestion and optimized resource usage.',
    link: 'https://nil.foundation/blog/post/sharding_fee_models',
  },
  {
    title: 'On demand scaling',
    description: 'Unlock horizontal scaling with parallel transactions executed across shards.',
    link: 'https://nil.foundation/blog/post/nil_zkSharding#how',
  },
  {
    title: 'ZK-powered',
    description: 'Top-level security with a three-tier approach to verification.',
    link: 'https://nil.foundation/blog/post/nil_zkSharding#security',
  },
]

const indexToName: Record<number, string> = {
  0: 'left',
  1: 'middle',
  2: 'right',
}

const indexToStyle = (baseClass: string, index: number) => {
  return s[`${baseClass}_${indexToName[index]}`]
}

export const Intro = () => {
  const [css] = useStyletron()
  const { isMobile } = useViewport()
  return (
    <>
      <div className={s.intro}>
        <p className={s.pre}>{text}</p>
        <img className={s.tree} src={tree.src} alt="tree" />
        <p className={s.descr}>
          One network for all
          <br />
          <span className={s.descr__gray}>your projects</span>
        </p>
        <div className={s.buttons}>
          <LimitedButton arrow href={landingPageData.docsLink}>
            Read docs
          </LimitedButton>
          <LimitedButton primary href={landingPageData.joinLink}>
            Join testnet
          </LimitedButton>
        </div>
      </div>
      <div className={classNames(commonStyles.wrap, s.section__wrap)}>
        <div className={s.section}>
          {items.map((_, index) => {
            return <div className={classNames(s.item__top, indexToStyle('item__top', index))} key={index}></div>
          })}
          {items.map((item, index) => {
            return (
              <div className={classNames(s.item, indexToStyle('item__middle', index))} key={index}>
                <p className={s.item__title}>{item.title}</p>
                <p className={s.item__description}>
                  {item.description}{' '}
                  <a className={s.item__link} href={item.link}>
                    Learn&nbsp;more.
                  </a>
                </p>
              </div>
            )
          })}
          {items.map((_, index) => {
            return <div className={classNames(s.item__bottom, indexToStyle('item__bottom', index))} key={index}></div>
          })}
        </div>
      </div>
      <div className={classNames(s.enhance, commonStyles.wrap)}>
        <div className={s.enhance__promo}>An Ethereum L2 powered by zkSharding</div>
        <div className={s.enhance__info}>
          =nil; blends the scalability of appchains with the composability of a monolithic chain to enable super scale
          apps. <a href="https://nil.foundation/blog/post/nil_zkSharding">Learn about zkSharding.</a>
        </div>
      </div>
      {isMobile ? <Line /> : null}
    </>
  )
}
