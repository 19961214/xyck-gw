import axios from 'axios'
export default function ajax(url, data={}, method='post'){
  return new Promise((resolve) => {
    let Promise
    if (method==='GET') {
      Promise = axios.get(url,{params: data})
    }else {
      Promise = axios.post(url, data)
    }
    Promise.then(
      response => {
        resolve(response.data)
      },
      error => {
        alert('请求异常：'+error.message)
      }
    )
  })
}