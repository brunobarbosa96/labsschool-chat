import axios from 'axios'
import qs from 'qs'
import defaultsDeep from 'lodash.defaultsdeep'
import { validateRequest } from './interceptors'

const getConfig = () => ({
  headers: {
    Accept: 'application/json'
  },
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'indices' })
  }
})

const baseApi = (baseURL, config) => {
  const axiosApi = axios.create({
    mode: 'cors',
    baseURL,
    ...config
  })

  axiosApi.request = (path, options) => {
    const mergedOptions = defaultsDeep(options, getConfig())

    return axiosApi(path, mergedOptions)
      .then((resp) => {

        return resp.data
      })
      .catch((error) => {

        throw error
      })
  }

  axiosApi.interceptors.request.use(validateRequest)

  return axiosApi
}

export default baseApi
