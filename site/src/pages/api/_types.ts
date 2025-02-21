import { z } from 'zod';

export const SwapRequest = z.object({
  fromToken: z.string(),
  toToken: z.string(),
  amount: z.number(),
});

export const HashRequest = z.object({
    hash: z.string(),
});