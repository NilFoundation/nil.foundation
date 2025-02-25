import cloudAsset from './assets/cloud.png'
import s from './Uniswap.module.scss'
import cn from 'classnames'
import { motion, Target, Variant, Variants } from 'motion/react'

export const Cloud = ({text, title, className, variants, initial}: {text: string, title?: string, className?: string, variants: Variants, initial?: Target}) => {
    
    return <motion.div 
    layout
    className={cn(s.cloud, className || '')}
    variants={variants}
    initial={initial}
    style={{
        maskImage: `url('${cloudAsset.src}')`,
    }}>
        {title && <p className={s.cloud__title}>{title}</p>}
        <div className={s.cloud__text}>{text}</div>
    </motion.div>
}