import { CurrencySymbol } from "components/SwapInput/types";
import { createStore, createEffect, createEvent, combine, sample  } from "effector";
import { interval } from "patronum";

export const swap = createEvent();

export const swapFx = createEffect<{
    buyCurrency: CurrencySymbol,
    amount: string,
}, {
    hash: string
}>();

export type UniswapTokenInfo = {
    Addr: string,
    Name: string,
    Amount: string,
}

export type UniswapTransactionInfo = {
    External: boolean,
    Shard: number,
    From: string,
    To: string,
    Tokens: UniswapTokenInfo[],
    Success: boolean,
    Txs: UniswapTransactionInfo[],
    OutTxs: string[],
    Tx: string,
    Block: number,
}

export const infoFx = createEffect<{
    hash: string,
}, {
    txs: UniswapTransactionInfo[],
    done: boolean,
}>();

export const $swapError = createStore<string | null>(null);

export const $buyAmount = createStore<string>('');
export const $sellAmount = createStore<string>('0.1')

export const $buyCurrency = createStore<CurrencySymbol>('usdt');
export const setBuyCurrency = createEvent<CurrencySymbol>();


export const setSellAmount = createEvent<string>();

export const quoteFx = createEffect<{
    amount: string,
    buyCurrency: CurrencySymbol,
}, {amount: number}>();

export const $transactions = createStore<UniswapTransactionInfo[]>([]);
export const $sendedTransactionHash = createStore<string | null>(null);

export const $isSwapLoading = combine(swapFx.pending, $sendedTransactionHash, (pending, hash) => pending || hash !== null);

export const { tick, isRunning} = interval({
    start: swapFx.done,
    stop: sample({
        source: infoFx.doneData,
        clock: infoFx.done,
        filter: ({ done }) => done,
    }),
    leading: true,
    timeout: 1000,
})