import { socialLinks } from 'constants/socials'
import { joinNil } from './joinPartData'

export const aboutPageData = {
  hero: {
    title: 'Enabling scalable trustless computing with zero-knowledge',
    description:
      '=nil; Foundation is\xa0a\xa0pioneer in\xa0zero\u2011knowledge technology, dedicated to making zkProofs and trustless data management accessible for developers.',
    info: 'Our solutions facilitate scalable trustless computing and data access, organized in one flexible toolchain secured by Ethereum.',
    content: [
      {
        title: '2018',
        description: [
          {
            isDesktop:
              '=nil; Foundation established, aiming to implement best practices of database management systems to the crypto industry through research and development in\xa0applied\xa0cryptography.',
            isMobile:
              '=nil; Foundation established, aiming to implement best practices of database management systems to the crypto industry through research and development in\xa0applied cryptography.',
          },
        ],
      },
      {
        title: '2019',
        description: [
          {
            isDesktop:
              'Cementing the research focus on zero-knowledge technology to fit target product requirements and foster\na trustless ecosystem development.',
            isMobile:
              'Cementing the research focus on zero-knowledge technology to fit target product requirements and foster a trustless ecosystem development.',
          },
        ],
      },
      {
        title: '2020',
        description: [
          'First version of Crypto3 suite for essential cryptographic operations released.',
          'First public zkSharding prototype launches.\n\xa0',
        ],
      },
      {
        title: '2021',
        description: [
          "=nil; Placeholder proof system introduced, along with the industry's first zkBridges and consensus proofs.",
          'zkLLVM development initiated',
          'Grants received from Ethereum Foundation, Mina Foundation, and Solana Foundation.',
        ],
      },
      {
        title: '2022',
        description: [
          'First public investment round to support the release of Proof Market and zkLLVM, and facilitate zkSharding release.',
        ],
      },
      {
        title: '2023',
        description: [
          'Introduced Lorem Ipsum – Ethereum trustless data oracle to enable widespread zkBridging and secure data access.',
          'zkSharding cluster demo released.',
        ],
      },
    ],
    future: [
      {
        title: 'Q1 2024',
        description: 'zkSharding public deployment release.',
      },
    ],
    footer: {
      title: 'Stay in touch with our news',
      socials: [
        {
          icon: 'twitter',
          link: socialLinks.twitter,
        },
        {
          icon: 'linkedin',
          link: socialLinks.linkedin,
        },
      ],
    },
  },

  toolchain: {
    title: 'Robust toolchain to accelerate the development of zk-enabled applications',
    description:
      'Implementing zero-knowledge technology into products development and data management is now transparent and cost-effective.',
    content: [
      {
        id: 1,
        title: '=nil; zkSharding',
        description:
          'A zkRollup that securely scales Ethereum to 60,000+ TPS through zkSharding, empowering web3 developers to build scalable, secure, and composable applications.',
        link: '/blog/post/database-management-system',
        list: [
          {
            title: 'Layer protocol allowing decentralized operation of Proof Market or any other application',
          },
        ],
      },
      {
        id: 2,
        title: 'Proof Market',
        description:
          'Decentralized marketplace for zero-knowledge proofs. Automatic generation of high-performance circuits for multiple protocols',
        link: 'https://github.com/NilFoundation/proof-market-toolchain',
        list: [
          {
            title: 'Outsourcing zkProof generation to optimize time & cost of zk implementation',
          },
        ],
      },
      {
        id: 3,
        title: 'zkLLVM',
        description:
          'Circuit compiler from C++, Rust, or other mainstream languages. Outsourcing zkProof generation to optimize time & cost of zk implementation',
        link: 'https://github.com/NilFoundation/zkllvm',
        list: [
          {
            title: 'Automatic generation of high-performance circuits for multiple protocols',
          },
        ],
      },
      {
        id: 4,
        title: 'Placeholder & Crypto3 suite',
        description:
          'A highly flexible general-purpose zero-knowledge proof system and cryptography suite for fast and safe prototyping',
        link: 'https://github.com/NilFoundation/crypto3',
        list: [
          {
            title: 'Tech & research baseline to enable high performance circuit definition',
          },
        ],
      },
    ],
  },

  partners: {
    title: 'Partners',
    content: [
      {
        title: 'Partners',
        logos: [
          {
            url: '/images/partners/starkware.png',
          },
          {
            url: '/images/partners/mina.png',
          },
          {
            url: '/images/partners/polychain.png',
          },
          {
            url: '/images/partners/bcap.png',
          },
          {
            url: '/images/partners/hasu.jpg',
          },
          {
            url: '/images/partners/dao5.png',
          },
          {
            url: '/images/partners/mirana.png',
          },
          {
            url: '/images/partners/iosg.png',
          },
          {
            url: '/images/partners/p2p_logo.png',
          },
          {
            url: '/images/partners/fabric_logo.svg',
          },
        ],
      },
      {
        title: 'Grants',
        logos: [
          {
            url: '/images/partners/8.svg',
          },
          {
            url: '/images/partners/mina.png',
          },
          {
            url: '/images/partners/solana.png',
          },
        ],
      },
    ],
  },

  ourTeam: {
    title: 'Become part of our team',
    description: 'Learn more about our team and discover current open positions.',
    button: {
      text: 'Go to Careers page',
      link: '/careers',
    },
  },

  joinNil: {
    ...joinNil,
    content: {
      ...joinNil.content,
      right:
        'Join our fast-growing community to collaborate with experienced engineers ready to share their expertise on creating zk-enabled apps.',
    },
  },
}

export const seoData = {
  title: '=nil; Foundation',
  description: 'Zero-knowledge development & research',
}
