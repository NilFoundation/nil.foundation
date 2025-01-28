// import { PublicClient, WalletV1, FaucetClient, HttpTransport, LocalECDSAKeySigner, generateRandomPrivateKey, convertEthToWei, getShardIdFromAddress, Hex, } from "@nilfoundation/niljs";

// async function topUp({
//   address,
//   faucetClient,
//   client,
//   token = "NIL",
//   amount = 1e18,
// }: {
//   address: Hex;
//   faucetClient: FaucetClient;
//   client: PublicClient;
//   rpcEndpoint: string;
//   token?: string;
//   amount?: number;
// }): Promise<void> {

//   const faucets = await faucetClient.getAllFaucets();
//   const faucet = faucets[token];

//   await faucetClient.topUpAndWaitUntilCompletion(
//     {
//       faucetAddress: faucet,
//       walletAddress: address,
//       amount: amount,
//     },
//     client,
//   );
// }

// const PARALLEL = 2;

// export class Uniswap {
//     private static instance: Uniswap;

//     private wallets: WalletV1[] = [];
//     private routerAddress: string | null = null;
//     private factoryAddress: string | null = null;
//     private ethUsdtPair: string | null = null;
//     private ethUsdcPair: string | null = null;

//     static async getInstance() {
//         if (!Uniswap.instance) {
//             const uniswap = new Uniswap();
//             await uniswap.initialize();
//             Uniswap.instance = uniswap;
//         }
//         return Uniswap.instance;
//     }

//     constructor() {
//     }

//     async initialize() {
//         const config = {
//             transport: new HttpTransport({endpoint: "https://api.nil.foundation"}),
//         }
//         const publicClient = new PublicClient(config);
//         const faucet = new FaucetClient(config);

//         if (this.wallets.length < PARALLEL) {
//             for (let i=this.wallets.length; i<PARALLEL; i++) {
//                 const signer = new LocalECDSAKeySigner({
//                     privateKey: generateRandomPrivateKey(),
//                 });
//                 const salt =  BigInt(Math.floor(Math.random()*1000));
//                 const wallet = new WalletV1({
//                     client: publicClient,
//                     signer,
//                     salt,
//                     shardId: 1,
//                     pubkey: signer.getPublicKey(),
//                 });
//                 topUp({
//                     faucetClient: faucet,
//                     client: publicClient,
//                     address: wallet.address,
//                 })
//                 faucet.topUpAndWaitUntilCompletion({
//                     walletAddress: wallet.address,
//                     faucetAddress: :
//                     amount: Number(convertEthToWei(1)),
//                 });
//                 this.wallets.push(wallet);
//             }
//         }

//         for () {

//         }

//         await publicClient.initialize();
//         await wallet.initialize();
//         await faucet.initialize();

//         this.routerAddress = await publicClient.getRouterAddress();
//         this.factoryAddress = await publicClient.getFactoryAddress();
//         this.ethUsdtPair = await publicClient.getPairAddress("ETH", "USDT");
//         this.ethUsdcPair = await publicClient.getPairAddress("ETH", "USDC");
//     }
// }
