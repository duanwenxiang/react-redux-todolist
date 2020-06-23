import { get } from 'axios'

export const getInfoList = () => {
  return get('http://jsonplaceholder.typicode.com/posts')
}