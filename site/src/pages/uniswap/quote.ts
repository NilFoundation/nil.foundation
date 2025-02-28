import { NextApiRequest, NextApiResponse } from 'next'
import { loadClient } from 'src/loadClient'
import { SwapRequest } from '../../_types'
import { convertEthToWei, toHex } from '@nilfoundation/niljs'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { fromToken, toToken, amount } = SwapRequest.parse(req.body)

    const wei = convertEthToWei(amount)

    const quote = await loadClient.request({
      method: 'nilloadgen_callQuote',
      params: [fromToken.toUpperCase(), toToken.toUpperCase(), toHex(wei)],
    })

    console.log(quote, typeof quote)

    res.status(200).json({ amount: quote / 10 ** 18 })
  } catch (error) {
    console.error('Quote error:', error)
    res.status(500).json({ error: 'Failed to get quote' })
  }
}
