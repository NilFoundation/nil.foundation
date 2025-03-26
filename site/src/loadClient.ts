import { Client, HTTPTransport, RequestManager } from '@open-rpc/client-js'

const fetcher: typeof fetch = (url, options) => {
  return fetch(url, { ...options })
}

const transport = new HTTPTransport(process.env.LOAD_ENDPOINT || '', {
  fetcher,
})

const requestManager = new RequestManager([transport])
export const loadClient = new Client(requestManager)
