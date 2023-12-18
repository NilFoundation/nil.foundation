import { about } from './aboutPartData'
import { joinNil } from './joinPartData'

export const zkllvmPageData = {
  hero: {
    title: 'Experience the zkLLVM circuit compiler',
    description: 'Tap into the potential of a\xa0tool that simplifies proving application code to Ethereum.',
    info: 'Our compiler automatically transforms mainstream development languages into circuits for efficient proof generation.',
    list: [
      "Compile circuits from existing code, don't start from scratch",
      'Superior circuit performance with no zkVMs involved',
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
        description: 'Providing transparency to\xa0ML\xa0models',
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
    title: 'Why building zk\u2011enabled apps',
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
          'Proving computations with zero-knowledge increases protocol capacity and significantly cuts average time\xa0required\xa0to process an\xa0operation.\xa0',
      },
      {
        title: 'Enhance Privacy and Security',
        icon: 'key',
        description:
          'Zero-knowledge technology lets applications selectively share data with third parties, ensuring privacy without sacrificing the security and trust of your users.',
      },
    ],
  },
  fullCycle: {
    title: 'Full cycle solution\xa0for creating zk-enabled Ethereum apps',
    description:
      "In tandem with Proof Market, our decentralized marketplace for zkProof generation, zkLLVM provides end-to-end support for your application's lifecycle.",
    list: [
      {
        title: 'Fast-track proof generation setup',
        description:
          '=nil; toolchain establishes quick and robust proof generation pipeline, reducing time to market for zk-enabled apps.',
      },
      {
        title: 'Cost-effective decentralized proof generation',
        description:
          "Take advantage of an efficient decentralized proof generation process, reducing each proof's operational costs with zkLLVM circuits.",
      },
      {
        title: 'Incentives for circuit\xa0developers',
        description: 'Developers get rewards for adding new circuits that gain demand.',
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
