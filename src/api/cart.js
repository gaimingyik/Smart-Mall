import reques from '@/utils/reques'

export const AddCart = (goodsId, goodsNum, goodsSkuId) => {
  return reques.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}
// 获取购物车列表
export const getCart = () => {
  return reques.get('/cart/list')
}
// 购物车商品更新
export const setCartCount = (goodsId, goodsNum, goodsSkuId) => {
  return reques.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}
// 删除购物车商品
export const reveCartCounts = (cartIds) => {
  return reques.post('/cart/clear', {
    cartIds
  })
}
