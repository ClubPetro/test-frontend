import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const initializeAxios = (): void => {
  axios.defaults.headers['Content-Type'] = 'application/json'
  axios.defaults.headers['Accept'] = 'application/json'
  axios.interceptors.response.use((response: AxiosResponse) => response.data)
  axios.interceptors.request.use(
    async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
      const headers = { ...config.headers }
      return { ...config, headers }
    },
  )
}
