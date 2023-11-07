import { about } from './aboutPartData'
import { joinNil } from './joinPartData'

export const zkShardingPageData = {
  hero: {
    title: 'Scale starting at 60,000 TPS',
    description:
      'By implementing dynamic zkSharding, =nil; enables secure parallel execution of transactions across shards operating independently. ',
    info: 'As the number of these dedicated shards grows, so does the maximum Ethereum throughput, linearly.',
    list: [
      `Compile circuits from existing code, don't start from scratch`,
      'Superior circuit performance with no zkVMs involved',
      'Eliminates the need for custom zero-knowledge DSLs',
      'Effortless ongoing maintenance of circuits',
      'Proves C++, Rust, and other mainstream languages',
      'Speeds up proof generation with hardware acceleration',
    ],
  },
  more: {
    title: 'More than just another zkRollup',
    description:
      'zkSharding facilitates scalable transaction processing and data availability, all without fragmenting liquidity or economic security.',

    contentFooter:
      'Separate decentralized shards compose a single execution layer. The main shard at the top validates transactions across all shards and proves them to Ethereum.',

    footer: {
      text: 'Learn more',
      link: 'https://nil.foundation/blog/post/nil_zkSharding',
    },
  },

  secure: {
    title: 'Secure by design, safe in fact',
    description:
      'With great scale comes great responsibility, and =nil; offers an unparalleled security setup, ensuring safety remains at the forefront to match this commitment.',
    content: [
      {
        icon: 'lightning',
        title: 'zkLLVM-secured zkEVM',
        description:
          'Circuits, compiled automatically from C++, adhere to the precise implementation of Ethereum production-used evmone. This enables our zkEVM1 auditability and eliminates human errors in circuits.',
        link: '/',
      },
      {
        icon: 'oracles',
        title: 'Decentralized from day\u00A01',
        description:
          "From its launch, =nil; will be decentralized to ensure censorship resistance. As the number of nodes involved increases, Ethereum's maximal throughput scales linearly.",
        link: '/',
      },
      {
        icon: 'lock',
        title: 'Secured by Ethereum',
        description:
          'Utilizing Ethereum liquidity and TVL, =nil; establishes robust data and liveness security. This guarantees cluster availability and fortifies the safety of the underlying liquidity.',
        link: '/',
      },
    ],
    footer: {
      text: 'See the overview',
      link: 'https://cms.nil.foundation/uploads/zk_Sharding_Manifesto_8286652990.pdf',
    },
  },

  cherries: {
    title: 'Cherries on top of the scale',
    description:
      "Scale alone doesn't define our vision, which aims to redefine application experiences, ensuring unparalleled capabilities to truly elevate Ethereum's potential.",
    content: [
      {
        title: 'Full composability at zero cost',
        description:
          'As all shards form integral parts of a singular execution layer, applications on =nil; will benefit from complete composability, free of security compromises or additional zkBridges fees.',
      },
      {
        title: 'Transparent Ethereum data access',
        description:
          'A shard within =nil; operates as an Ethereum full node, granting applications trustless read access to all in-EVM data — all at no charge and without the need for migration.',
      },
      {
        title: 'Breaking modularity’s drawbacks',
        description:
          'With full in-EVM data access and unified liquidity, zkSharding enhances Ethereum capabilities, contrasting the fragmented liquidity and siloed environments caused by modularity.',
      },
    ],
  },
  joinNil,
  about,
}

export const seoData = {
  title: '=nil; zkSharding for Ethereum',
  description: 'Secure Ethereum scaling to 60,000+ TPS through zkSharding',
}
