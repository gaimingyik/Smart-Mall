import reques from '@/utils/reques'

export const getHome = () => {
  return reques.get('/page/detail', {
    params: {
      pageId: 0
    }
  })
}
