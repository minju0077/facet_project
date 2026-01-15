import api from '@/plugins/axiosinterceptor'

const mainfundList = async () => {
  const res = await api.get('/course/funding_list')
  console.log('index', res)
  return res.data
}

const fundescList = async () => {
  const res = await api.get('/course/funding_list')
  console.log('index', res)
  return res.data
}

export default { mainfundList, fundescList }
