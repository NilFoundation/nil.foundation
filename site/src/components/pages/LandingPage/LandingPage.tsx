import { Component } from 'react'
import { Community } from './Community/Community'
import { Intro } from './Intro/Intro'
import { Roadmap } from './Roadmap/Roadmap'
import { Sponsors } from './Sponsors/Sponsors'
import { Line } from './Line'

export const LandingPage = () => {
  return (
    <div>
      <Intro />
      <Community />
      <Roadmap />
      <Line />
      <Sponsors />
    </div>
  )
}
