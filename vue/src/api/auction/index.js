import api from '@/plugins/axiosinterceptor'

// get은 가져오기, post은 보낼때
const auctionList = async () => {
  const res = await api.get('/course/funding_list')
  console.log('index', res)
  return res.data
}

export default { auctionList }
