export const searchProduct = (products,text)=> {
  return {
    type: 'SEARCH_PRODUCT',
    products,
    text
  }
}
