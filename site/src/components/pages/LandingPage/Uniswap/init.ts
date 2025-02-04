import { combine, sample } from 'effector'
import {
  $buyAmount,
  $buyCurrency,
  $mobilePage,
  $sellAmount,
  $sendedTransactionHash,
  $swapError,
  $transactions,
  hidePage,
  infoFx,
  loadedUniswap,
  quoteFx,
  resetTransactionHash,
  setBuyCurrency,
  setSellAmount,
  swap,
  swapFx,
  tick,
  UniswapTransactionInfo,
} from './model'

$sellAmount.on(setSellAmount, (_, value) => value)

$buyCurrency.on(setBuyCurrency, (_, value) => value)

$swapError.reset([swapFx, quoteFx])

$swapError.on(swapFx.failData, (_, error) => error.message)

swapFx.use(async ({ buyCurrency, amount }) => {
  console.log('swapFx')

  const result = await fetch('/uniswap/swap', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      fromToken: 'eth',
      toToken: buyCurrency,
      amount: parseFloat(amount),
    }),
  })

  const json = await result.json()
  return json
})

sample({
  source: combine({
    buyCurrency: $buyCurrency,
    amount: $sellAmount,
  }),
  clock: swap,
  target: swapFx,
})

sample({
  clock: [$sellAmount, $buyCurrency, loadedUniswap],
  source: combine({
    buyCurrency: $buyCurrency,
    amount: $sellAmount,
  }),
  target: quoteFx,
})

$buyAmount.on(quoteFx.doneData, (_, data) => {
  return data.amount.toString()
})

quoteFx.use(async ({ buyCurrency, amount }) => {
  const result = await fetch('/uniswap/quote', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      fromToken: 'eth',
      toToken: buyCurrency,
      amount: parseFloat(amount),
    }),
  })
  const json = await result.json()
  return json
})

const flatTxs = (tx: UniswapTransactionInfo): UniswapTransactionInfo[] => {
  const arr = [tx]
  let cur = 0
  while (cur < arr.length) {
    const current = arr[cur]
    if (current.Txs.length > 0) {
      arr.push(...current.Txs)
    }
    cur++
  }
  return arr
}

infoFx.use(async ({ hash }) => {
  const result = await fetch('/uniswap/swapInfo', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      hash,
    }),
  })

  const json = await result.json()

  if (result.status !== 200) {
    throw new Error(json.error)
  }

  const txs = flatTxs(json.tx)

  const outputCount = txs.reduce((acc, tx) => {
    return acc + ((tx.OutTxs && tx.OutTxs.length) || 0)
  }, 0)
  const outputMinedCount = txs.reduce((acc, tx) => {
    return acc + tx.Txs.length
  }, 0)

  return {
    txs: txs,
    done: outputCount === outputMinedCount,
  }
})

sample({
  source: $sendedTransactionHash,
  clock: tick,
  fn: (hash) => {
    return {
      hash: hash!,
    }
  },
  filter: (data) => data !== null,
  target: infoFx,
})

$sendedTransactionHash.on(swapFx.doneData, (_, data) => data.hash)
$sendedTransactionHash.reset(swapFx)
$sendedTransactionHash.reset(resetTransactionHash)
$transactions.reset(swapFx)
$transactions.on(infoFx.doneData, (_, data) => {
  return data.txs
})

sample({
  clock: infoFx.done,
  filter: infoFx.doneData.map(({ done }) => done),
  target: resetTransactionHash,
})

$mobilePage.on(swapFx, () => true)
$mobilePage.on(hidePage, () => false)
