import { about } from './aboutPartData'
import { joinNil } from './joinPartData'

export const homePageData = {
  hero: {
    title: 'Meet Proof Market',
    description:
      'A decentralized marketplace designed to expand the reach of zk technology and fast-track its adoption.',
  },
  win: {
    title: 'Driving proof generation value',
    description:
      'Operating as a traditional commodity marketplace, Proof Market offers distinct advantages for each market participant.',
    content: [
      {
        title: 'A shortcut for developers to establish a stable zkProof generation pipeline',
        list: [
          'Direct proof ordering for Ethereum applications',
          'Cost and time-effective proof generation process',
          'Accessible proof generation, outsourced and decentralized',
        ],
      },
      {
        title: 'Empowering proof generators with transparent market data',
        list: [
          'More orders from multiple requesters',
          'Market insights to optimize hardware profitability per order',
          'Opportunity to strike a balance between workload and earnings',
        ],
      },
    ],
    footer: {
      text: 'See Proof Market docs',
      link: 'https://docs.nil.foundation/proof-market',
    },
  },
  zkProof: {
    title: 'zkProof advantages for the industry',
    content: [
      {
        title: 'Scalability',
        icon: 'pazzle',
        description:
          'Ethereum (and similar L1s)  scalability is a critical challenge. zkProofs enable L2 solutions to verify computations, reducing costs and enhancing protocol throughput.',
      },
      {
        title: 'Security',
        icon: 'shield',
        description:
          'zkBridging secures cross-protocol transactions, preventing costly fraud. This improved transparency reduces corruption risks and encourages trustless fund exchange.',
      },
      {
        title: 'Privacy',
        icon: 'lock',
        description:
          'zkProofs can validate digital statements while safeguarding undisclosed information. Sharing data selectively, this technology ensures private interactions in various sensitive situations.',
      },
    ],
  },
  fullCycle: {
    title: 'Full cycle solution for creating zk-enabled Ethereum apps',
    description:
      'zkLLVM circuit compiler helps to define proof statements with less effort, reducing implementation time and enhancing your Proof Market experience.',
    list: [
      { title: 'High-quality circuits without the need to learn custom DSLS' },
      {
        title: 'Direct circuit compilation from C++, Rust, or other mainstream languages',
      },
      {
        title: 'Seamless integration with Proof Market for a smooth proof generation process',
      },
    ],
    footer: {
      text: 'Discover zkLLVM',
      link: '/zkLLVM',
    },
  },
  joinNil,
  about,
}

export const seoData = {
  title: '=nil; Proof Market',
  description: 'Marketplace for zero-knowledge proofs',
}
