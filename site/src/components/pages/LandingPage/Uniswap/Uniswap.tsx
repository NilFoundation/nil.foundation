'use client'

import s from './Uniswap.module.scss'
import commonStyle from '../common.module.scss'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { SwapInput } from 'components/SwapInput/SwapInput'
import classNames from 'classnames'
import { LimitedButton } from 'components/LimitedButton/LimitedButton'
import { Magic } from './Magic'
import { Cloud } from './Cloud'
import { useAnimate, motion, MotionConfig, Variants, AnimatePresence } from 'motion/react'
import { useScreenWidth } from 'hooks/useScreenWidth'
import { Network } from './Network'
import Lottie from 'lottie-react'
import { useUnit } from 'effector-react'
import './init'
import {
  $buyAmount,
  $sellAmount,
  $buyCurrency,
  swapFx,
  setSellAmount,
  swap,
  setBuyCurrency,
  $isSwapLoading,
  $swapError,
  $transactions,
  setStage,
  $stage,
  guardedTransactions,
  loadedUniswap,
} from './model'
import { animationData, stages } from './const'
import { useViewport } from 'hooks/useViewport'

const cloudWidth = 256
const cloudWidthMobile = 128
const cloudCoefficent = 2.03174603175
const cloudHeight = cloudWidth / cloudCoefficent
const cloudHeightMobile = cloudWidthMobile / cloudCoefficent
const defaultEasing = 'easeInOut'
const gap = 16

const txView = (tx: string) => `${tx.slice(0, 8)}...${tx.slice(-4)}`

const defaultBlockSize = 42

const hiddenOpacity = 0

const cloudPartInner = 1 / 10

const defaultCloudPos = [
  {
    x: 0,
    y: 0,
  },
  {
    x: cloudWidth + gap,
    y: 0,
  },
  {
    x: 0,
    y: cloudHeight + gap,
  },
  {
    x: cloudWidth + gap,
    y: cloudHeight + gap,
  },
]

const defaultMobileCloudPos = [
  {
    x: 0,
    y: 0,
  },
  {
    x: cloudWidthMobile + gap,
    y: 0,
  },
  {
    x: 0,
    y: cloudHeightMobile + gap,
  },
  {
    x: cloudWidthMobile + gap,
    y: cloudHeightMobile + gap,
  },
]

const zoomCoefficient = 0.7

export const Uniswap = () => {
  const [sellAmount, buyAmount, buyCurrency, isLoading, swapError, transactions, stage] = useUnit([
    $sellAmount,
    $buyAmount,
    $buyCurrency,
    $isSwapLoading,
    $swapError,
    guardedTransactions,
    $stage,
  ])
  const { isMobile } = useViewport()
  
  const [messageWH, setMessageWH] = useState({
    rpc: {
      width: 0,
      height: 0,
    },
    tx: {
      width: 0,
      height: 0,
    },
    notification: {
      width: 0,
      height: 0,
    },
  })
  const messageRef = useRef<HTMLDivElement>(null)
  const txRef = useRef<HTMLDivElement>(null)
  const notificationRef = useRef<HTMLDivElement>(null)
  const timers = useRef<NodeJS.Timeout[]>([])
  const screenWidth = useScreenWidth()

  const [containerWH, setContainerWH] = useState({
    width: 0,
    height: 0,
  })
  const containerRef = useRef<HTMLDivElement>(null)

  const size = (s: number) => ((s / 1400) * 100 * screenWidth) / 100

  const onSetSell = useCallback(async (value: string) => {
    setSellAmount(value)
  }, [])

  const stageTime = 2000

  const onSwap = useCallback((e: Event) => {
    e.preventDefault()
    for (const timer of timers.current) {
      clearTimeout(timer)
    }
    timers.current = []
    swap()

    for (let i = 0; i < stages.length; i++) {
      const stage = stages[i]
      timers.current.push(
        setTimeout(() => {
          setStage(stage)
        }, stageTime * i),
      )
    }
  }, [])

  const defaultStage = 'idle'

  const animate = isLoading ? stage : defaultStage
  const convertedPos = (isMobile ? defaultMobileCloudPos : defaultCloudPos).map((pos) => ({
    x: size(pos.x),
    y: size(pos.y),
  }))

  useLayoutEffect(() => {
    if (messageRef.current && txRef.current && notificationRef.current) {
      setMessageWH({
        rpc: { width: messageRef.current.offsetWidth, height: messageRef.current.offsetHeight },
        tx: { width: txRef.current.offsetWidth, height: txRef.current.offsetHeight },
        notification: { width: notificationRef.current.offsetWidth, height: notificationRef.current.offsetHeight },
      })
    }
    if (containerRef.current) {
      setContainerWH({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      })
    }
  }, [screenWidth])
  useEffect(() => {
    loadedUniswap();
  }, [])

  const targetIndex = buyCurrency === 'usdt' ? 2 : 3

  return (
    <div className={commonStyle.wrap}>
      <div className={s.title}>Check out how Uniswap v2 works on =nil;</div>
      <div className={classNames(s.blocks, stage !=='idle' ? s.blocks__swap : '')}>
        <div className={classNames(s.block, s.block__top, s.block__top_left)} />
        <div className={classNames(s.block, s.block__top, s.block__top_right)} />
        <div className={classNames(s.block, s.block__middle, s.block__middle_left, s.swap)}>
          <SwapInput
            disabled
            label="Sell"
            currencies={['eth']}
            selectedCurrency="eth"
            value={sellAmount}
            onChange={onSetSell}
            error={swapError || undefined}
          />
          <SwapInput
            disabled={animate !== 'idle'}
            label="Buy"
            currencies={['usdt', 'usdc']}
            selectedCurrency={buyCurrency}
            value={buyAmount}
            onCurrencySelect={(currency) => setBuyCurrency(currency)}
          />
          <LimitedButton primary icon={<Magic />} className={s.swap__button} onClick={onSwap} disabled={isLoading}>
            Swap
          </LimitedButton>
        </div>
        <MotionConfig transition={{ ease: defaultEasing, duration: 1 }}>
          <motion.div
            key={'animation'}
            className={classNames(s.block, s.block__middle, s.block__middle_right, s.animation)}
            animate={animate}
          >
            <motion.div className={s.animation__block} key={'block'} ref={containerRef}>
              <Cloud
                text="Browser"
                className="browser"
                initial={{
                  ...convertedPos[0],
                  opacity: 1,
                  zoom: 1,
                  background: '#444',
                  color: '#F1F1F1',
                }}
                variants={{
                  idle: {
                    ...convertedPos[0],
                    opacity: 1,
                    zoom: 1,
                    background: '#444',
                    color: '#F1F1F1',
                  },
                  first: {
                    left: '50%',
                    top: '50%',
                    x: '-50%',
                    y: '-50%',
                    background: '#F1F1F1',
                    color: '#212121',
                    opacity: 1,
                    zoom: [1, 2],
                    transition: {
                      duration: 1,
                      times: [0, 1],
                    },
                  },
                  f2: {
                    left: '50%',
                    top: '50%',
                    x: '-50%',
                    y: '-100%',
                    background: '#F1F1F1',
                    color: '#212121',
                    opacity: 1,
                    zoom: 1,
                  },
                  second: {
                    ...convertedPos[0],
                    opacity: 1,
                    background: '#F1F1F1',
                    color: '#212121',
                  },
                  third: {
                    ...convertedPos[0],
                    opacity: 1,
                    background: '#444',
                    color: '#F1F1F1',
                  },
                  fourth: {
                    ...convertedPos[0],
                    opacity: 1,
                    background: '#444',
                    color: '#F1F1F1',
                  },
                  fifth: {
                    ...convertedPos[0],
                    opacity: hiddenOpacity,
                    background: '#444',
                    color: '#F1F1F1',
                  },
                  eight: {
                    opacity: hiddenOpacity,
                  },
                  twelve: {
                    background: '#F1F1F1',
                    color: '#212121',
                  },
                  thirteen: {
                    opacity: hiddenOpacity,
                  },
                }}
                key="browser"
              />
              <Cloud
                text="Wallet"
                title="Shard 1"
                className="walelt"
                key="shard_1"
                initial={{
                  ...convertedPos[1],
                  opacity: 1,
                }}
                variants={{
                  idle: {
                    ...convertedPos[1],
                    opacity: 1,
                  },
                  first: {
                    ...convertedPos[1],
                    opacity: 0,
                    zoom: 2,
                  },
                  f2: {
                    ...convertedPos[1],
                    zoom: 2,
                    opacity: 0,
                  },
                  second: {
                    ...convertedPos[1],
                    opacity: 1,
                    zoom: 1,
                    background: '#444',
                    color: '#F1F1F1',
                  },
                  third: {
                    ...convertedPos[1],
                    opacity: 1,
                    background: '#F1F1F1',
                    color: '#212121',
                  },
                  fourth: {
                    ...convertedPos[1],
                    background: '#F1F1F1',
                    color: '#212121',
                    opacity: 1,
                  },
                  sixth: {
                    background: '#F1F1F1',
                    color: '#212121',
                    opacity: 1,
                  },
                  eight: {
                    opacity: hiddenOpacity,
                  },
                  ten: {
                    background: '#F1F1F1',
                    color: '#212121',
                    opacity: 1,
                  },
                  eleven: {
                    background: '#F1F1F1',
                    color: '#212121',
                    opacity: 1,
                  },
                  thirteen: {
                    opacity: hiddenOpacity,
                  },
                }}
              />
              <Cloud
                text="ETH / USDT"
                title="Shard 2"
                className="eth_usdt"
                key="shard_2"
                initial={{
                  ...convertedPos[2],
                  opacity: 1,
                }}
                variants={{
                  idle: {
                    ...convertedPos[2],
                    opacity: 1,
                  },
                  first: {
                    ...convertedPos[2],
                    zoom: 2,
                    opacity: 0,
                  },
                  f2: {
                    ...convertedPos[2],
                    zoom: 2,
                    opacity: 0,
                  },
                  second: {
                    ...convertedPos[2],
                    zoom: 1,
                    opacity: 1,
                  },
                  third: {
                    ...convertedPos[2],
                    opacity: 1,
                  },
                  fourth: {
                    ...convertedPos[2],
                    opacity: 1,
                  },
                  fifth: {
                    ...convertedPos[2],
                    opacity: hiddenOpacity,
                  },
                  seven:
                    buyCurrency === 'usdt'
                      ? {
                          opacity: 1,
                          background: '#F1F1F1',
                          color: '#212121',
                        }
                      : {},
                  eight: {
                    opacity: hiddenOpacity,
                  },
                  nine:
                    buyCurrency === 'usdt'
                      ? {
                          opacity: 1,
                          background: '#F1F1F1',
                          color: '#212121',
                        }
                      : {},
                  thirteen: {
                    opacity: hiddenOpacity,
                  },
                }}
              />
              <Cloud
                text="ETH / USDC"
                title="Shard 3"
                className="eth_usdc"
                key="shard_3"
                initial={{
                  ...convertedPos[3],
                  opacity: 1,
                }}
                variants={{
                  idle: {
                    ...convertedPos[3],
                    opacity: 1,
                  },
                  first: {
                    ...convertedPos[3],
                    zoom: 2,
                    opacity: 0,
                  },
                  f2: {
                    ...convertedPos[3],
                    zoom: 2,
                    opacity: 0,
                  },
                  second: {
                    ...convertedPos[3],
                    zoom: 1,
                    opacity: 1,
                  },
                  third: {
                    ...convertedPos[3],
                    zoom: 1,
                    opacity: 1,
                  },
                  fourth: {
                    ...convertedPos[3],
                    opacity: 1,
                  },
                  fifth: {
                    ...convertedPos[3],
                    opacity: hiddenOpacity,
                  },
                  seven:
                    buyCurrency === 'usdc'
                      ? {
                          opacity: 1,
                          background: '#F1F1F1',
                          color: '#212121',
                        }
                      : {},
                  eight: {
                    opacity: hiddenOpacity,
                  },
                  nine:
                    buyCurrency === 'usdc'
                      ? {
                          opacity: 1,
                          background: '#F1F1F1',
                          color: '#212121',
                        }
                      : {},
                  thirteen: {
                    opacity: hiddenOpacity,
                  },
                }}
              />
              <motion.div
                ref={messageRef}
                key="rpc"
                className={s.message}
                initial={{
                  opacity: 0,
                  x:
                    (size(defaultCloudPos[1].x) +
                      size(cloudWidth) -
                      size(cloudPartInner * cloudWidth) -
                      messageWH.rpc.width / 2) /
                    zoomCoefficient,
                  y: (size(defaultCloudPos[1].y) + size(cloudHeight / 2) - messageWH.rpc.height * 2) / zoomCoefficient,
                  zoom: zoomCoefficient,
                }}
                variants={{
                  f2: {
                    opacity: 1,
                    x: containerWH.width / 2 - messageWH.rpc.width / 2,
                    y: containerWH.height - messageWH.rpc.height * 2,
                    zoom: 1,
                  },
                  second: {
                    opacity: 1,
                    x:
                      (defaultCloudPos[0].x +
                        size(cloudWidth) -
                        size(cloudPartInner * cloudWidth) -
                        messageWH.rpc.width / 2) /
                      zoomCoefficient,
                    y: (defaultCloudPos[0].y + size(cloudHeight / 2) - messageWH.rpc.height / 2) / zoomCoefficient,
                    zoom: zoomCoefficient,
                  },
                  third: {
                    opacity: 1,
                    x:
                      (size(defaultCloudPos[1].x) +
                        size(cloudWidth) -
                        size(cloudPartInner * cloudWidth) -
                        messageWH.rpc.width / 2) /
                      zoomCoefficient,
                    y:
                      (size(defaultCloudPos[1].y) + size(cloudHeight / 2) - messageWH.rpc.height / 2) / zoomCoefficient,
                    zoom: zoomCoefficient,
                  },
                  fourth: {
                    opacity: 0,
                    x:
                      (size(defaultCloudPos[1].x) +
                        size(cloudWidth) -
                        size(cloudPartInner * cloudWidth) -
                        messageWH.rpc.width / 2) /
                      zoomCoefficient,
                    y:
                      (size(defaultCloudPos[1].y) + size(cloudHeight / 2) - messageWH.rpc.height * 2) / zoomCoefficient,
                    zoom: zoomCoefficient,
                  },
                }}
              >
                RPC Request
              </motion.div>
              <motion.div
                ref={notificationRef}
                key="notification"
                className={s.message}
                initial={{
                  opacity: 0,
                  x:
                    size(defaultCloudPos[1].x) +
                    size(cloudWidth) -
                    size(cloudPartInner * cloudWidth) -
                    messageWH.rpc.width / 2,
                  y: size(defaultCloudPos[1].y) + size(cloudHeight * 2) - messageWH.rpc.height / 2,
                }}
                variants={{
                  eleven: {
                    opacity: 1,
                    x:
                      (size(defaultCloudPos[1].x) +
                        size(cloudWidth) -
                        size(cloudPartInner * cloudWidth) -
                        messageWH.rpc.width / 2) /
                      zoomCoefficient,
                    y:
                      (size(defaultCloudPos[1].y) + size(cloudHeight / 2) - messageWH.rpc.height / 2) / zoomCoefficient,
                    zoom: zoomCoefficient,
                  },
                  twelve: {
                    opacity: 1,
                    x:
                      (size(defaultCloudPos[0].x) +
                        size(cloudWidth) -
                        size(cloudPartInner * cloudWidth) -
                        messageWH.rpc.width / 2) /
                      zoomCoefficient,
                    y:
                      (size(defaultCloudPos[0].y) + size(cloudHeight / 2) - messageWH.rpc.height / 2) / zoomCoefficient,
                    zoom: zoomCoefficient,
                  },
                  thirteen: {
                    opacity: 0,
                    x:
                      (size(defaultCloudPos[0].x) +
                        size(cloudWidth) -
                        size(cloudPartInner * cloudWidth) -
                        messageWH.rpc.width / 2) /
                      zoomCoefficient,
                    y:
                      (size(defaultCloudPos[0].y) + size(cloudHeight / 2) - messageWH.rpc.height / 2) / zoomCoefficient,
                    zoom: zoomCoefficient,
                  },
                }}
              >
                Notification
              </motion.div>
              <motion.div
                className={s.inclusion}
                ref={txRef}
                initial={{
                  opacity: 0,
                  x: 0,
                  width: 'auto',
                }}
                variants={{
                  idle: {
                    opacity: 0,
                    x: 0,
                    width: 'auto',
                  },
                  first: {
                    opacity: 0,
                    y: 0,
                  },
                  f2: {
                    opacity: 0,
                    y: 0,
                  },
                  second: {
                    opacity: 0,
                    x:
                      size(defaultCloudPos[1].x) +
                      size(cloudWidth) -
                      size(cloudPartInner * cloudWidth) -
                      messageWH.tx.width / 2,
                    y: size(defaultCloudPos[1].y) + size(cloudHeight) + messageWH.tx.height,
                    width: 'auto',
                  },
                  third: {
                    opacity: 0,
                    x:
                      size(defaultCloudPos[1].x) +
                      size(cloudWidth) -
                      size(cloudPartInner * cloudWidth) -
                      messageWH.tx.width / 2,
                    y: size(defaultCloudPos[1].y) + size(cloudHeight) + messageWH.tx.height,
                    width: 'auto',
                  },
                  fourth: {
                    opacity: 1,
                    x:
                      size(defaultCloudPos[1].x) +
                      size(cloudWidth) -
                      size(cloudPartInner * cloudWidth) -
                      messageWH.tx.width / 2,
                    y: size(defaultCloudPos[1].y) + size(cloudHeight / 2) - messageWH.tx.height / 2,
                    width: 'auto',
                  },
                  fifth: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    height: size(44 + cloudHeight),
                    width: size(cloudWidth * 2),
                  },
                  sixth: {
                    opacity: 1,
                    x:
                      size(defaultCloudPos[1].x) +
                      size(cloudWidth) -
                      size(cloudPartInner * cloudWidth) -
                      messageWH.tx.width / 2,
                    y: size(defaultCloudPos[1].y) + size(cloudHeight / 2) - messageWH.tx.height / 2,
                    width: 'auto',
                  },
                  seven: {
                    opacity: 1,
                    x:
                      size(defaultCloudPos[targetIndex].x) +
                      size(cloudWidth) -
                      size(cloudPartInner * cloudWidth) -
                      messageWH.tx.width / 2,
                    y: size(defaultCloudPos[targetIndex].y) + size(cloudHeight / 2) - messageWH.tx.height / 2,
                    width: 'auto',
                  },
                  eight: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    height: size(44 + cloudHeight),
                    width: size(cloudWidth * 2),
                  },
                  nine: {
                    opacity: 1,
                    x:
                      size(defaultCloudPos[targetIndex].x) +
                      size(cloudWidth) -
                      size(cloudPartInner * cloudWidth) -
                      messageWH.tx.width / 2,
                    y: size(defaultCloudPos[targetIndex].y) + size(cloudHeight / 2) - messageWH.tx.height / 2,
                    width: 'auto',
                  },
                  ten: {
                    opacity: 1,
                    x:
                      size(defaultCloudPos[1].x) +
                      size(cloudWidth) -
                      size(cloudPartInner * cloudWidth) -
                      messageWH.tx.width / 2,
                    y: size(defaultCloudPos[1].y) + size(cloudHeight / 2) - messageWH.tx.height / 2,
                    width: 'auto',
                  },
                  eleven: {
                    opacity: 0,
                    x:
                      size(defaultCloudPos[1].x) +
                      size(cloudWidth) -
                      size(cloudPartInner * cloudWidth) -
                      messageWH.tx.width / 2,
                    y: size(defaultCloudPos[1].y) + size(cloudHeight / 2) - messageWH.tx.height * 2,
                    width: 'auto',
                  },
                }}
              >
                <div className={s.inclusion__title}>Block</div>
                <div className={s.inclusion__elements}>
                  <div className={s.inclusion__wrapper}>
                    <div className={s.inclusion__element}>Transaction</div>
                    <div className={s.inclusion__element}>attached token ({animate === 'eight' ? 'USDT' : 'ETH'})</div>
                    <div className={s.inclusion__plus}>+</div>
                  </div>
                </div>
              </motion.div>
              <Network
                initial={{
                  left: '50%',
                  top: '100%',
                  x: '-50%',
                  y: 0,
                  opacity: 0,
                }}
                variants={{
                  fifth: {
                    opacity: 1,
                    left: '50%',
                    top: '100%',
                    x: '-50%',
                    y: -size(cloudHeight / 2),
                  },
                  eight: {
                    opacity: 1,
                    left: '50%',
                    top: '100%',
                    x: '-50%',
                    y: -size(cloudHeight / 2),
                  },
                }}
              />
              {animate === 'thirteen' && (
                <motion.div
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className={s.completion}
                >
                  <Lottie
                    className={s.completion__animation}
                    style={{
                      width: '100%',
                      height: '80%',
                    }}
                    loop={false}
                    animationData={animationData}
                  />
                  <div className={s.completion__text}>Swap completed</div>
                </motion.div>
              )}
              
            </motion.div>
            <motion.div className={s.transactions} variants={{
                  fifth: {
                    opacity: 0,
                  },
                  eight: {
                    opacity: 0,
                  },
                }}>
                <AnimatePresence>
                  {transactions.map((tx, index) => <motion.div key={tx.Tx}
                    initial={{ opacity: 0, y: size(44) }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: size(44) }}
                    className={s.transactions__item}
                  >
                    {tx.External ? 'External t' : 'T'}ransaction 
                    <a href={`https://explore.nil.foundation${tx.Tx}`}>{txView(tx.Tx)}</a>
                    {' '}
                    {!tx.External ? (
                      index === 1 ? <>from <span className={s.transactions__info}>wallet</span></> : <>from <span className={s.transactions__info}>pair</span></>
                      ) : ''
                    }
                    {' '}
                    {!tx.External ? (index === 1 ? <>to <span className={s.transactions__info}>pair</span></> : <>to <span className={s.transactions__info}>wallet</span></>) : ''}
                    {tx.Tokens.length > 0 && <>{' '}({tx.Tokens.map((v) => {
                      return `${v.Name}: ${((+v.Amount) / 10 ** 18).toFixed(4)}`
                    }).join(', ')})</>}
                    </motion.div>)}
                </AnimatePresence>
              </motion.div>
          </motion.div>
        </MotionConfig>
        <div className={classNames(s.block, s.block__bottom, s.block__bottom_left)} />
        <div className={classNames(s.block, s.block__bottom, s.block__bottom_right)} />
      </div>
    </div>
  )
}
