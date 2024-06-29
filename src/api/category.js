import reques from '@/utils/reques'

// 获取分类数据
export const getCategoryData = () => {
  return reques.get('/category/list')
}
