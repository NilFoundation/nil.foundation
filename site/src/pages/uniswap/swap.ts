import { NextApiRequest, NextApiResponse } from 'next'
import { loadClient } from 'src/loadClient'
import { SwapRequest } from '../../_types'
import { convertEthToWei, toHex } from '@nilfoundation/niljs'

const slippage = process.env.SLIPPAGE ? parseFloat(process.env.SLIPPAGE) : 0.95

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

    const expectedInWei = BigInt((quote * slippage).toString())

    const hash = await loadClient.request({
      method: 'nilloadgen_callSwap',
      params: [fromToken.toUpperCase(), toToken.toUpperCase(), toHex(wei), toHex(expectedInWei)],
    })

    res.status(200).json({ hash: hash })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
