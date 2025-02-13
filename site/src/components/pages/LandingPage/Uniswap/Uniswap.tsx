'use client';

import s from './Uniswap.module.scss'
import commonStyle from '../common.module.scss'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { SwapInput } from 'components/SwapInput/SwapInput'
import classNames from 'classnames'
import { CurrencySymbol } from 'components/SwapInput/types'
import { LimitedButton } from 'components/LimitedButton/LimitedButton'
import { Magic } from './Magic'
import { Cloud } from './Cloud'
import { useAnimate, motion, MotionConfig, Variants } from "motion/react"
import { useScreenWidth } from 'hooks/useScreenWidth';
import { Network } from './Network';
import Lottie from 'lottie-react';

const cloudWidth = 256;
const cloudCoefficent = 2.03174603175;
const cloudHeight = cloudWidth / cloudCoefficent;
const defaultEasing = 'easeInOut';
const gap = 16;

const defaultBlockSize = 42;

const hiddenOpacity = 0;

const cloudPartInner = 1/10;

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
  }
]

const zoomCoefficient = 0.7;

const stages = [
      'first',
      'f2',
      'second',
      'third',
      'fourth',
      'fifth',
      'sixth',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
    ] as const;

export const Uniswap = () => {
  const [sell, setSell] = useState('0.01')
  const [buy, setBuy] = useState('')
  const [loading, setLoading] = useState(false)
  const [buyCurrency, setBuyCurrency] = useState<CurrencySymbol>('usdt')
  const [stage, setStage] = useState<'idle' | typeof stages[number]>('idle')
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
    }
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

  const size = (s: number) => ((s / 1400) * 100) * screenWidth / 100;


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

  const stageTime = 2000;

  const onSwap = useCallback((e: Event) => {
    e.preventDefault()
    for (const timer of timers.current) {
      clearTimeout(timer)
    }
    timers.current = []
    setLoading(true)
    
    for (let i=0; i<stages.length; i++) {
      const stage = stages[i]
      timers.current.push(setTimeout(() => {
        setStage(stage)
      }, stageTime*i))
    }
    timers.current.push(setTimeout(() => {
      setLoading(false)
    }, stageTime*stages.length))
  }, [setLoading])

  const defaultStage = 'idle'

  const animate = loading ? stage : defaultStage


  useLayoutEffect(() => {
    if (messageRef.current && txRef.current && notificationRef.current) {
      setMessageWH({
        rpc: {width: messageRef.current.offsetWidth, height: messageRef.current.offsetHeight}, 
        tx: {width: txRef.current.offsetWidth, height: txRef.current.offsetHeight},
        notification: {width: notificationRef.current.offsetWidth, height: notificationRef.current.offsetHeight},
      })
      console.log('messageRef.current.offsetWidth', messageRef.current.offsetWidth)
      console.log('messageRef.current.offsetHeight', messageRef.current.offsetHeight)
    }
    if (containerRef.current) {
      setContainerWH({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      })
      console.log('containerRef.current.offsetWidth', containerRef.current.offsetWidth)
    }
  }, [messageRef.current, screenWidth])

  

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
        <MotionConfig transition={{ease: defaultEasing, duration: 1}}>
        <motion.div 
        key={'animation'}
        className={classNames(s.block, s.block__middle, s.block__middle_right, s.animation)}
        animate={animate}
        
        >
          <motion.div className={s.animation__block} key={'block'}
          ref={containerRef}
          >
          <Cloud text='Browser' className='browser'
          initial={{
              ...defaultCloudPos[0],
              opacity: 1,
              zoom: 1,
              background: '#444',
              color: '#F1F1F1',
            }}

           variants={{
            idle: {
              ...defaultCloudPos[0],
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
              }
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
              ...defaultCloudPos[0],
              opacity: 1,
              background: '#F1F1F1',
              color: '#212121',
            },
            third: {
              ...defaultCloudPos[0],
              opacity: 1,
              background: '#444',
              color: '#F1F1F1',
            },
            fourth: {
              ...defaultCloudPos[0],
              opacity: 1,
              background: '#444',
              color: '#F1F1F1',
            },
            fifth: {
              ...defaultCloudPos[0],
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
            }
          }} key="browser" />
          <Cloud text='Wallet' title='Shard 1' className='walelt'  key="shard_1"
          initial={{
            ...defaultCloudPos[1],
            opacity: 1,
          }}
           variants={{
            idle: {
              ...defaultCloudPos[1],
              opacity: 1,
            },
            first: {
              ...defaultCloudPos[1],
              opacity: 0,
              zoom: 2,
            },
            f2: {
              ...defaultCloudPos[1],
              zoom: 2,
              opacity: 0,
              
            },
            second: {
              ...defaultCloudPos[1],
              opacity: 1,
              zoom: 1,
              background: '#444',
              color: '#F1F1F1',
            },
            third: {
              ...defaultCloudPos[1],
              opacity: 1,
              background: '#F1F1F1',
              color: '#212121',
            },
            fourth: {
              ...defaultCloudPos[1],
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
            }
          }}  />
          <Cloud text='ETH / USDT' title='Shard 2' className='eth_usdt'  key="shard_2"
          initial={{
              ...defaultCloudPos[2],
              opacity: 1,
          }}
          variants={{
            idle: {
              ...defaultCloudPos[2],
              opacity: 1,
            },
            first: {
              ...defaultCloudPos[2],
              zoom: 2,
              opacity: 0,
            },
            f2: {
              ...defaultCloudPos[2],
              zoom: 2,
              opacity: 0,
              
            },
            second: {
              ...defaultCloudPos[2],
              zoom: 1,
              opacity: 1,
            },
            third: {
              ...defaultCloudPos[2],
              opacity: 1,
            },
            fourth: {
              ...defaultCloudPos[2],
              opacity: 1,
            },
            fifth: {
              ...defaultCloudPos[2],
              opacity: hiddenOpacity,
            },
            seven: {
              opacity: 1,
              background: '#F1F1F1',
              color: '#212121',
            },
            eight: {
              opacity: hiddenOpacity,
            },
            nine: {
              opacity: 1,
              background: '#F1F1F1',
              color: '#212121',
            },
            thirteen: {
              opacity: hiddenOpacity,
            },
          }} />
          <Cloud text='ETH / USDC' title='Shard 3' className='eth_usdc'  key="shard_3"
          initial={{
            ...defaultCloudPos[3],
              opacity: 1,
          }}
          variants={{
            idle: {
              ...defaultCloudPos[3],
              opacity: 1,
            },
            first: {
              ...defaultCloudPos[3],
              zoom: 2,
              opacity: 0,
            },
            f2: {
              ...defaultCloudPos[3],
              zoom: 2,
              opacity: 0,
              
            },
            second: {
              ...defaultCloudPos[3],
              zoom: 1,
              opacity: 1,
            },
            third: {
              ...defaultCloudPos[3],
              zoom: 1,
              opacity: 1,
            },
            fourth: {
              ...defaultCloudPos[3],
              opacity: 1,
            },
            fifth: {
              ...defaultCloudPos[3],
              opacity: hiddenOpacity,
            },
            eight: {
              opacity: hiddenOpacity,
            },
            thirteen: {
              opacity: hiddenOpacity,
            },
          }} />
          <motion.div ref={messageRef} key="rpc" className={s.message}
            initial={{
              opacity: 0,
              x: (size(defaultCloudPos[1].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.rpc.width/2) / zoomCoefficient,
              y: (size(defaultCloudPos[1].y) + size(cloudHeight/2) - (messageWH.rpc.height*2)) / zoomCoefficient,
              zoom: zoomCoefficient,
            }}
           variants={{
            f2: {
              opacity: 1,
              x: containerWH.width/2 - messageWH.rpc.width/2,
              y: containerWH.height - messageWH.rpc.height*2,
              zoom: 1,
            },
            second: {
              opacity: 1,
              x: (defaultCloudPos[0].x + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.rpc.width/2) / zoomCoefficient,
              y: (defaultCloudPos[0].y + size(cloudHeight/2) - (messageWH.rpc.height/2)) / zoomCoefficient,
              zoom: zoomCoefficient,
            },
            third: {
              opacity: 1,
              x: (size(defaultCloudPos[1].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.rpc.width/2) / zoomCoefficient,
              y: (size(defaultCloudPos[1].y) + size(cloudHeight/2) - (messageWH.rpc.height/2)) / zoomCoefficient,
              zoom: zoomCoefficient,
            },
            fourth: {
              opacity: 0,
              x: (size(defaultCloudPos[1].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.rpc.width/2) / zoomCoefficient,
              y: (size(defaultCloudPos[1].y) + size(cloudHeight/2) - (messageWH.rpc.height*2)) / zoomCoefficient,
              zoom: zoomCoefficient,
            },
          }}>RPC Request</motion.div>
          <motion.div ref={notificationRef} key="notification" className={s.message}
            initial={{
              opacity: 0,
              x: (size(defaultCloudPos[1].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.rpc.width/2),
              y: (size(defaultCloudPos[1].y) + size(cloudHeight*2) - (messageWH.rpc.height/2)), 
            }}
           variants={{
            eleven: {
              opacity: 1,
              x: (size(defaultCloudPos[1].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.rpc.width/2) / zoomCoefficient,
              y: (size(defaultCloudPos[1].y) + size(cloudHeight/2) - (messageWH.rpc.height/2)) / zoomCoefficient,
              zoom: zoomCoefficient,
            },
            twelve: {
              opacity: 1,
              x: (size(defaultCloudPos[0].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.rpc.width/2) / zoomCoefficient,
              y: (size(defaultCloudPos[0].y) + size(cloudHeight/2) - (messageWH.rpc.height/2)) / zoomCoefficient,
              zoom: zoomCoefficient,
            },
            thirteen: {
              opacity: 0,
              x: (size(defaultCloudPos[0].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.rpc.width/2) / zoomCoefficient,
              y: (size(defaultCloudPos[0].y) + size(cloudHeight/2) - (messageWH.rpc.height/2)) / zoomCoefficient,
              zoom: zoomCoefficient,
            },
          }}>Notification</motion.div>
          <motion.div className={s.inclusion} ref={txRef}
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
              x: (size(defaultCloudPos[1].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.tx.width/2),
              y: (size(defaultCloudPos[1].y) + size(cloudHeight) + messageWH.tx.height),
              width: 'auto',
            },
            third: {
              opacity: 0,
              x: (size(defaultCloudPos[1].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.tx.width/2),
              y: (size(defaultCloudPos[1].y) + size(cloudHeight) + messageWH.tx.height),
              width: 'auto',
            },
            fourth: {
              opacity: 1,
              x: (size(defaultCloudPos[1].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.tx.width/2),
              y: (size(defaultCloudPos[1].y) + size(cloudHeight/2) - messageWH.tx.height/2),
              width: 'auto',
            },
            fifth: {
              opacity :1,
              x: 0,
              y: 0,
              height: size(44 + cloudHeight),
              width: size(cloudWidth *2),
            },
            sixth: {
              opacity: 1,
              x: (size(defaultCloudPos[1].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.tx.width/2),
              y: (size(defaultCloudPos[1].y) + size(cloudHeight/2) - messageWH.tx.height/2),
              width: 'auto',
            },
            seven: {
              opacity: 1,
              x: (size(defaultCloudPos[2].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.tx.width/2),
              y: (size(defaultCloudPos[2].y) + size(cloudHeight/2) - messageWH.tx.height/2),
              width: 'auto',
            },
            eight: {
              opacity: 1,
              x: 0,
              y: 0,
              height: size(44 + cloudHeight),
              width: size(cloudWidth *2),
            },
            nine: {
              opacity: 1,
              x: (size(defaultCloudPos[2].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.tx.width/2),
              y: (size(defaultCloudPos[2].y) + size(cloudHeight/2) - messageWH.tx.height/2),
              width: 'auto',
            },
            ten: {
              opacity: 1,
              x: (size(defaultCloudPos[1].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.tx.width/2),
              y: (size(defaultCloudPos[1].y) + size(cloudHeight/2) - messageWH.tx.height/2),
              width: 'auto',
            },
            eleven: {
              opacity: 0,
              x: (size(defaultCloudPos[1].x) + size(cloudWidth)  - size(cloudPartInner * cloudWidth) - messageWH.tx.width/2),
              y: (size(defaultCloudPos[1].y) + size(cloudHeight/2) - messageWH.tx.height*2),
              width: 'auto',
            },
          }}>
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
              y: -size(cloudHeight/2),
            },
            eight: {
              opacity: 1,
              left: '50%',
              top: '100%',
              x: '-50%',
              y: -size(cloudHeight/2),
            },
          }} />
          {animate === 'thirteen' && <motion.div style={{
            width: '100%',
            height: '100%',
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1
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
              animationData={{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":""},"fr":48,"ip":0,"op":100,"w":300,"h":300,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[141.5,157.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[11.136,21.089]],"o":[[0,0],[0,0],[0,0],[-5.211,-9.869]],"v":[[-26.875,0.75],[-4.219,22.75],[58.369,-39.92],[62.961,-74.703]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[83,83],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.623],"y":[1]},"o":{"x":[0.335],"y":[0]},"t":55,"s":[100]},{"t":80,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.137],"y":[1]},"o":{"x":[0.152],"y":[0]},"t":64,"s":[100]},{"t":80,"s":[76.5]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":246,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150.327,0],"ix":2},"a":{"a":0,"k":[5.556,0.327,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[143.791,143.791],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[5.556,0.327],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.533],"y":[1.037]},"o":{"x":[0.431],"y":[0]},"t":12,"s":[0]},{"t":92,"s":[231]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.397],"y":[1.103]},"o":{"x":[0.531],"y":[0]},"t":12,"s":[0]},{"t":87.869140625,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":246,"st":0,"bm":0}],"markers":[]}}
            />
            <div className={s.completion__text}>Swap completed</div>
</motion.div>}
          </motion.div>
          </motion.div>
          
        <motion.div></motion.div>
        </MotionConfig>
        <div className={classNames(s.block, s.block__bottom, s.block__bottom_left)} />
        <div className={classNames(s.block, s.block__bottom, s.block__bottom_right)} />
      </div>
    </div>
  )
}
