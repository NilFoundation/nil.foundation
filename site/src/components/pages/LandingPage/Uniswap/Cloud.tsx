import cloudAsset from './assets/cloud.png'
import s from './Uniswap.module.scss'
import cn from 'classnames'
import { motion, Variant } from 'motion/react'

export const Cloud = ({text, gray, title, className, initial, selected, zoomed, hidden, duration}: {text: string, title?: string, gray?: boolean, className?: string, initial: [string|number, string|number], selected?: boolean, zoomed?: boolean, hidden?: boolean, duration?: number}) => {
    let animation: Variant = {
        opacity: 1,
        x: initial[0],
        y: initial[1],
        transition: {
            duration: duration || 0.5,
            ease: 'easeInOut',
        }
    };
    if (selected) {
        animation = {
            ...animation,
            backgroundColor: '#F1F1F1',
            color: '#212121',
        }
    }
    if (zoomed) {
        animation = {
            ...animation,
            x: '-50%',
            y: '-50%',
            left: '50%',
            top: '50%',
            scale: 1.5,
        }
    }
    if (hidden) {
        animation = {
            ...animation,
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }
    }
    
    return <motion.div 
    className={cn(s.cloud, gray ? s.cloud_gray : '', className || '')}
    variants={{
        idle: {
            opacity: 1,
            x: initial[0],
            y: initial[1],
        },
        loading: animation,
    }}
    style={{
        maskImage: `url('${cloudAsset.src}')`,
    }}>
        {title && <p className={s.cloud__title}>{title}</p>}
        <div className={s.cloud__text}>{text}</div>
    </motion.div>
}