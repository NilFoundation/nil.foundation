// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiResponse } from 'next'

export default function handler(res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' })
}
