import { FC } from 'react'
import cn from 'classnames'
import styles from './Roadmap.module.scss'

export const StarIcon: FC<{ className?: string; fill?: string }> = ({ className, fill }) => (
  <svg
    width="41"
    height="41"
    viewBox="0 0 41 41"
    className={cn(styles.timeline__star, className)}
    fill={fill || '#F1F1F1'}
  >
    <path d="M20.7212 0.876221C22.8583 10.8285 30.6326 18.6028 40.5849 20.74C30.6326 22.8771 22.8583 30.6514 20.7212 40.6037C18.584 30.6514 10.8097 22.8771 0.857422 20.74C10.8097 18.6028 18.584 10.8285 20.7212 0.876221Z" />
  </svg>
)
