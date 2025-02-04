'use client';

import s from './Uniswap.module.scss'
import commonStyle from '../common.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { SwapInput } from 'components/SwapInput/SwapInput'
import classNames from 'classnames'
import { CurrencySymbol } from 'components/SwapInput/types'
import { LimitedButton } from 'components/LimitedButton/LimitedButton'
import { Magic } from './Magic'
import { Cloud } from './Cloud'
import { useAnimate, motion, MotionConfig, Variants } from "motion/react"

const stages = {
  first: [
    <Cloud text='Browser' className='browser' initial={[0, 0]} key="browser" zoomed selected />,
    <Cloud text='Wallet' title='Shard 1' className='walelt' initial={['150%', 0]} key="shard_1" gray hidden />,
    <Cloud text='ETH / USDT' title='Shard 2' gray className='eth_usdt' initial={[0, '150%']} key="shard_2" hidden />,
    <Cloud text='ETH / USDC' title='Shard 3' gray className='eth_usdc' initial={['150%', '150%']} key="shard_3" hidden />,
    <motion.div key="message" className={s.message} variants={{
      idle: {
        opacity: 0,
        top: '90%',
        left: '50%',
        x: '-50%',
        y: '-100%'
      },
      loading: {
        opacity: [0, 0, 1, 1],
        left: '50%',
        x: '-50%',
        top: ['90%', '90%','90%', '60%'],
        y: '-50%',
        zoom: [1, 1, 1, 1],
        transition: {
            delay: 0.5,
            duration: 1,
            times: [0, 0.001, 0.5, 1]
        }
      }
    }}>Signed RPC Request</motion.div>
  ],
  second: [
    <Cloud text='Browser' className='browser' initial={[0, 0]} gray key="browser" />,
    <Cloud text='Wallet' title='Shard 1' className='walelt' initial={['150%', 0]} key="shard_1" />,
    <Cloud text='ETH / USDT' title='Shard 2' gray className='eth_usdt' initial={[0, '150%']} key="shard_2" />,
    <Cloud text='ETH / USDC' title='Shard 3' gray className='eth_usdc' initial={['150%', '150%']} key="shard_3" />,
    <motion.div key="message" className={s.message} animate={{
        opacity: 1,
        left: '0',
        x: 'calc(((190 / var(--screen-size)) * 100) * 1vw * (1/0.8))',
        top: '0',
        y: 'calc(((70 / var(--screen-size)) * 100) * 1vw * (1/0.8))',
        zoom: 0.8,
        transition: {
            duration: 0.5,
        }
    }}>RPC Request</motion.div>
  ],
  third: [
    <Cloud text='Browser' className='browser' initial={[0, 0]} gray key="browser" />,
    <Cloud text='Wallet' title='Shard 1' className='walelt' initial={['150%', 0]} key="shard_1" gray selected />,
    <Cloud text='ETH / USDT' title='Shard 2' gray className='eth_usdt' initial={[0, '150%']} key="shard_2" />,
    <Cloud text='ETH / USDC' title='Shard 3' gray className='eth_usdc' initial={['150%', '150%']} key="shard_3" />,
    <motion.div key="message" className={s.message} animate={{
        opacity: 1,
        left: '0',
        x: 'calc((((190 + 300 + 100 ) / var(--screen-size)) * 100) * 1vw * (1/0.8))',
        top: '0',
        y: 'calc(((70 / var(--screen-size)) * 100) * 1vw * (1/0.8))',
        zoom: 0.8,
        transition: {
            duration: 0.5,
            type: 'tween',
        }
      }}
    >RPC Request</motion.div>
  ],
}

export const Uniswap = () => {
  const [sell, setSell] = useState('0.01')
  const [buy, setBuy] = useState('')
  const [buyCurrency, setBuyCurrency] = useState<CurrencySymbol>('usdt')
  const [loading, setLoading] = useState(false)
  const [stage, setStage] = useState<keyof typeof stages>('first')

  const onSetSell = useCallback(
    async (value: string) => {
      setSell(value)
      setLoading(true)
      setBuy('0')
      setLoading(false)
    },
    [setSell, buyCurrency, setBuy, setLoading],
  )

  const onSetBuy = useCallback(
    async (value: string) => {
      setBuy(value)
      setLoading(true)
    },
    [setBuy, buyCurrency, setSell, setLoading],
  )

  const onSwap = useCallback((e: Event) => {
    e.preventDefault()
    setStage('first')
    setLoading(true)
    
    setTimeout(() => {
      setStage('second')
    }, 2000)
    setTimeout(() => {
      setStage('third')
    }, 4000)
    setTimeout(() => {
      setStage('second')
    }, 6000)
    setTimeout(() => {
      setStage('third')
    }, 8000)
  }, [setLoading])

  useEffect(() => {}, [])

  return (
    <div className={commonStyle.wrap}>
      <div className={s.title}>Check out how Uniswap v2 works on =nil;</div>
      <div className={s.blocks}>
        <div className={classNames(s.block, s.block__top, s.block__top_left)} />
        <div className={classNames(s.block, s.block__top, s.block__top_right)} />
        <div className={classNames(s.block, s.block__middle, s.block__middle_left, s.swap)}>
          <SwapInput
            disabled
            label="Sell"
            currencies={['eth']}
            selectedCurrency="eth"
            value={sell}
            onChange={onSetSell}
          />
          <SwapInput
            label="Buy"
            currencies={['usdt', 'usdc']}
            selectedCurrency={buyCurrency}
            value={buy}
            onChange={onSetBuy}
            onCurrencySelect={(currency) => setBuyCurrency(currency)}
          />
          <LimitedButton primary icon={<Magic />} className={s.swap__button} onClick={onSwap}>
            Swap
          </LimitedButton>
        </div>
        <motion.div 
        className={classNames(s.block, s.block__middle, s.block__middle_right, s.animation)}
        animate={loading ? 'loading' : 'idle'}
        variants={{
          idle: {
            opacity: 1,
          },
          loading: {
            opacity: 1
          }
        }}
        >
          {stages[stage]}
        </motion.div>
        <div className={classNames(s.block, s.block__bottom, s.block__bottom_left)} />
        <div className={classNames(s.block, s.block__bottom, s.block__bottom_right)} />
      </div>
    </div>
  )
}
