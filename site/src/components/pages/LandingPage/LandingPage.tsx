import { Component } from 'react'
import { Community } from './Community/Community'
import { Intro } from './Intro/Intro'
import { Roadmap } from './Roadmap/Roadmap'
import { Sponsors } from './Sponsors/Sponsors'
import { Line } from './Line'
import { Uniswap } from './Uniswap/Uniswap'
import ClientOnly from './Uniswap/ClientOnly'

export const LandingPage = () => {
  return (
    <div>
      <Intro />
      <ClientOnly>
        <Uniswap />
      </ClientOnly>
      <Community />
      <Roadmap />
      <Line />
      <Sponsors />
    </div>
  )
}
