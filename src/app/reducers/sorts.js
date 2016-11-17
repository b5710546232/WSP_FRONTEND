const initialState = {
  sort_products:[]
}
const sorts = (state=initialState,action) => {
  switch (action.type) {
    case 'SORT_NONE':
      return Object.assign({}, state, {
      sort_products:action.products })

    case 'SORT_NAME_A':
      return Object.assign({}, state, {
      sort_products:action.products.sort((a, b) => (a.name.charCodeAt(0) - b.name.charCodeAt(0))) })

    case 'SORT_NAME_Z':
      return Object.assign({}, state, {
      sort_products:action.products.sort((a, b) => (b.name.charCodeAt(0) - a.name.charCodeAt(0))) })

    case 'SORT_PRICE_LOW':
      return Object.assign({}, state, {
      sort_products:action.products.sort((a, b) => (a.price - b.price)) })

    case 'SORT_PRICE_HIGH':
      return Object.assign({}, state, {
      sort_products:action.products.sort((a, b) => (b.price - a.price)) })

    default:
      return state
  }
}

export default sorts
