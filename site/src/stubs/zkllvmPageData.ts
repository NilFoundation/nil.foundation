import { about } from './aboutPartData'
import { joinNil } from './joinPartData'

export const zkllvmPageData = {
  hero: {
    title: 'Experience the zkLLVM circuit compiler',
    description: 'Tap into the potential of a tool that simplifies proving application code to Ethereum.',
    info: 'Our compiler automatically transforms mainstream development languages into circuits for efficient proof generation.',
    list: [
      `Compile circuits from existing code, don't start from scratch`,
      `Superior circuit performance with no zkVMs involved`,
      'Eliminates the need for custom zero-knowledge DSLs',
      'Effortless ongoing maintenance of circuits',
      'Proves C++, Rust, and other mainstream languages',
      'Speeds up proof generation with hardware acceleration',
    ],
  },
  accelerating: {
    title: 'Accelerating provable computation deployment',
    description:
      'zkLLVM streamlines circuit definition for both established and emerging zk use cases, ensuring rapid technology adoption.',
    content: [
      {
        icon: 'rollup',
        title: 'Rollups',
        description: 'Cutting costs and boosting Ethereum transactions',
        link: '/',
      },
      {
        icon: 'bridges',
        title: 'Bridges',
        description: 'Securing cross-protocol transactions to prevent fraud',
        link: '/',
      },
      {
        icon: 'oracles',
        title: 'Oracles',
        description: 'Verified in-EVM data and computations over it',
        link: '/',
      },
      {
        icon: 'ml',
        title: 'ML',
        description: 'Providing transparency to ML models',
        link: '/',
      },
      {
        icon: 'gaming',
        title: 'Gaming',
        description: 'Proving in-game progress and achievements',
        link: '/',
      },
    ],
    footer: {
      text: 'See documentation',
      link: 'https://docs.nil.foundation/zkllvm',
    },
  },
  zkProof: {
    title: 'Why building zk-enabled apps',
    content: [
      {
        title: 'Lower execution costs',
        icon: 'arrow-in-circle',
        description:
          'Leveraging zero-knowledge technology greatly reduces execution costs for in-EVM and other on-chain L1/L2 operations.',
      },
      {
        title: 'Boost data throughput',
        icon: 'lightning',
        description:
          'Proving computations with zero-knowledge increases protocol capacity and significantly cuts average time required to process an operation.',
      },
      {
        title: 'Enhance privacy and security',
        icon: 'key',
        description:
          'Zero-knowledge technology lets applications selectively share data with third parties, ensuring privacy without sacrificing the security and trust of your users.',
      },
    ],
  },
  fullCycle: {
    title: 'Full cycle solution for creating zk-enabled Ethereum apps',
    description: `zkLLVM circuit compiler helps to define proof statements with less effort, reducing implementation time and enhancing your Proof Market experience.`,
    list: [
      {
        title: 'High-quality circuits without the need to learn custom DSLS',
      },
      {
        title: 'Direct circuit compilation from C++, Rust, or other mainstream languages',
      },
      {
        title: 'Seamless integration with Proof Market for a smooth proof generation process',
      },
    ],
    footer: {
      text: 'Discover zkLLVM',
      link: '/',
    },
  },
  joinNil,
  about,
}

export const seoData = {
  title: '=nil; Foundation zkLLVM circuit compiler',
  description: 'Effortless high-performance circuit definition',
}
