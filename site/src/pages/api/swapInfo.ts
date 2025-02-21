import { NextApiRequest, NextApiResponse } from "next";
import { loadClient } from "src/loadClient";
import { HashRequest } from "./_types";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { hash } = HashRequest.parse(req.body);

    const info = await loadClient.request({
      method: 'nilloadgen_callInfo',
      params: [hash]
    });
    
    res.status(200).json({ tx: info });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
