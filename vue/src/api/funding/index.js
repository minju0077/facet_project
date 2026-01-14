import api from '@/plugins/axiosinterceptor'

const mainfundList = async () => {
  const res = await api.get('/ljh/main_funding.json')
  console.log('index', res)
  return res.data
}

const fundescList = async () => {
  const res = await api.get('/ljh/funding_desc.json')
  console.log('index', res)
  return res.data
}

export default { mainfundList, fundescList }
