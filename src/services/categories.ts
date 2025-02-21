import { PLATZI_API_URL } from "@/constants"

const getCategories = () => {
  return fetch(`${PLATZI_API_URL}/categories`)
    .then(response => {
      if (!response.ok) throw new Error('getCategories Error')
      return response.json()
    }
    )
}

export { getCategories, }