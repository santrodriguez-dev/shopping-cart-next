const PLATZI_API_URL = 'https://api.escuelajs.co/api/v1' // // https://fakeapi.platzi.com/
const OFFSET = 0
const LIMIT = 20

const SHOP_CATEGORIES_ID_MAP = new Map<string, number>()
SHOP_CATEGORIES_ID_MAP.set('Clothes', 1)
SHOP_CATEGORIES_ID_MAP.set('Shoes', 4)
SHOP_CATEGORIES_ID_MAP.set('Electronics', 2)
SHOP_CATEGORIES_ID_MAP.set('Miscellaneous', 5)

const SHOP_CATEGORIES = ['Clothes', 'Shoes', 'Electronics', 'Miscellaneous']


export { PLATZI_API_URL, OFFSET, LIMIT, SHOP_CATEGORIES, SHOP_CATEGORIES_ID_MAP }