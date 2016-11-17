export const searchProduct = (products,text)=> {
  return {
    type: 'SEARCH_PRODUCT',
    products,
    text
  }
}

export const createSearchProduct = (products)=> {
  return {
    type: 'CREATE_SEARCH_PRODUCT',
    products
  }
}
