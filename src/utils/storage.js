const INFO_KEY = 'hm_shopping_info'
const SEARCH = 'hm_shopping_search'

export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : { token: '', userId: '' }
}

export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

export const getSearch = () => {
  const result = localStorage.getItem(SEARCH)
  return result ? JSON.parse(result) : []
}

export const setSearch = (arr) => {
  localStorage.setItem(SEARCH, JSON.stringify(arr))
}
