import axios, { InternalAxiosRequestConfig } from 'axios'
import config from './config'
import qs from 'qs'
import { StrapiParamters } from './types/parameters'

export const client = axios.create({
  baseURL: `${config.API_URL}`,
})

client.interceptors.request.use((configInterception: InternalAxiosRequestConfig) => {
  configInterception.headers.authorization = `bearer ${config.TOKEN}`
  return configInterception
})

export const queryList = async <T>(contentType: string, params: StrapiParamters = {}): Promise<T[]> => {
  const res = await client.get<{ data: T[] }>(`/${contentType}/`, {
    params: {
      populate: '*',
      pagination: {
        limit: -1,
      },
      ...params,
    },
    paramsSerializer: {
      serialize: (params) => {
        return qs.stringify(params)
      },
    },
  })
  return res.data.data
}
