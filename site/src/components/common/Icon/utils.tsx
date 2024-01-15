import Logo from './icons/Logo'
import Dh from './icons/Dh'
import Linkedin from './icons/Linkedin'
import Twitter from './icons/Twitter'
import Github from './icons/Github'
import Telegram from './icons/Telegram'
import Discord from './icons/Discord'
import ArrowUp from './icons/ArrowUp'
import ArrowInCircle from './icons/ArrowInCircle'
import Key from './icons/Key'
import Lock from './icons/Lock'
import Lightning from './icons/Lightning'
import Pazzle from './icons/Pazzle'
import Shield from './icons/Shield'
import Bridges from './icons/Bridges'
import Gaming from './icons/Gaming'
import Ml from './icons/Ml'
import Oracles from './icons/Oracles'
import Rollup from './icons/Rollup'
import Cross from './icons/Cross'
import Squares from './icons/Squares'
import DevPortal from './icons/DevPortal'
import { SvgIconComponent } from './SvgIconComponent'
import Upload from './icons/Upload'

export const getIcon = (name: string): SvgIconComponent | null => {
  switch (name) {
    case 'logo':
      return Logo

    case 'dh':
      return Dh

    case 'linkedin':
      return Linkedin

    case 'twitter':
      return Twitter

    case 'github':
      return Github

    case 'telegram':
      return Telegram

    case 'discord':
      return Discord

    case 'dev-portal':
      return DevPortal

    case 'arrow-up':
      return ArrowUp

    case 'arrow-in-circle':
      return ArrowInCircle

    case 'key':
      return Key

    case 'lock':
      return Lock

    case 'lightning':
      return Lightning

    case 'pazzle':
      return Pazzle

    case 'shield':
      return Shield

    case 'bridges':
      return Bridges

    case 'gaming':
      return Gaming

    case 'ml':
      return Ml

    case 'oracles':
      return Oracles

    case 'rollup':
      return Rollup

    case 'cross':
      return Cross

    case 'squares':
      return Squares

    case 'upload':
      return Upload

    default:
      return null
  }
}
