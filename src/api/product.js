import reques from '@/utils/reques'

export const getPorduct = (obj) => {
  const { categoryId, goodsName, page } = obj
  return reques.get('/goods/list', {
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}
