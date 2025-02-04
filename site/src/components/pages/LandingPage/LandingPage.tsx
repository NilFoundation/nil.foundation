import { Component } from 'react'
import { Community } from './Community/Community'
import { Intro } from './Intro/Intro'
import { Roadmap } from './Roadmap/Roadmap'
import { Sponsors } from './Sponsors/Sponsors'
import { Line } from './Line'
import { Uniswap } from './Uniswap/Uniswap'
import ClientOnly from './Uniswap/ClientOnly'

const showUniswap = !!process.env.NEXT_PUBLIC_SHOW_UNISWAP

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <Intro />
        {showUniswap && <ClientOnly><Uniswap /></ClientOnly>}
        <Community />
        <Roadmap />
        <Line />
        <Sponsors />
      </div>
    )
  }

  static getLayout = (page: any) => page
}
