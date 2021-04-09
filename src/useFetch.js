import {useState, useEffect} from 'react'
import axios from 'axios'

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancel = axios.CancelToken.source();
    setLoading(true)
    setTimeout(() => {
       axios
      .get(url, {
        cancelToken: cancel.token
      })
      .then(res => setData(res.data))
      .catch(err => setError(err.message))
      setLoading(false)
    }, 500)
   

   return () => cancel.cancel()
  }, [url])

  return {data, loading, error}
}
