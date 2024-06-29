import reques from '@/utils/reques'

export const getGoods = (goodsId) => {
  return reques.get('/goods/detail', {
    params: {
      goodsId
    }
  })
}
