import { joinNil } from './joinPartData'

export const careersPageData = {
  intro: {
    title: 'Work at the forefront of zero-knowledge development',
    description: 'Be it from our Cyprus office, from home, or fully remote.',
  },
  joinUs: {
    title: 'Contribute to our cutting edge toolchain',
    cards: [
      {
        // TODO: add blog link
        linkTo: '/blog/post/database-management-system',
        title: '=nil; zkSharding',
        description:
          'A zkRollup that securely scales Ethereum to 60,000+ TPS through zkSharding, empowering web3 developers to build scalable, secure, and composable applications.',
        // text: 'Layer protocol allowing decentralized operation of Proof Market or any other application',
      },
      {
        linkTo: 'https://github.com/NilFoundation/proof-market-toolchain',
        title: 'Proof Market',
        description:
          'Decentralized marketplace for zero-knowledge proofs. Automatic generation of high-performance circuits for multiple protocols',
        // text: 'Outsourcing zkProof generation to optimize time & cost of zk implementation',
      },
      {
        linkTo: 'https://github.com/NilFoundation/zkllvm',
        title: 'zkLLVM',
        description:
          'Circuit compiler from C++, Rust, or other mainstream languages. Outsourcing zkProof generation to optimize time & cost of zk implementation',
        // text: 'Automatic generation of high-performance circuits for multiple protocols',
      },
      {
        linkTo: 'https://github.com/NilFoundation/crypto3',
        title: 'Placeholder & Crypto3 suite',
        description:
          'A highly flexible general-purpose zero-knowledge proof system and cryptography suite for fast and safe prototyping',
        // text: 'Tech & research baseline to enable high performance circuit definition',
      },
    ],
  },
  jobs: {
    title: 'Jobs',
    description: 'Work remotely, from home, or from our Cyprus office.',
    button: {
      text: 'See open positions',
      link: '/careers/jobs',
    },
  },
  test: {
    title: 'Test your skills',
    description: 'Want to check if this challenge aligns with your skills?',
    button: {
      text: 'Try yourself',
      link: '/',
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
  title: 'Careers at =nil; Foundation',
  description: 'Get to the forefront of zero-knowledge development',
}

export const jobsSeoData = {
  title: 'Jobs at =nil; Foundation',
  description: 'Join the team',
}
