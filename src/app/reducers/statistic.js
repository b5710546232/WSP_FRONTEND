const initialState = {
  product : [],
  category : [],
  moneyProduct : [],
  userPayment : [],
  userOrder : [],
  userShipping : [],
  address : []
}

const statistic = (state=initialState,action)=>{
  // console.log('action',action.payload);
  switch(action.type) {
    case 'LOAD_STAT_PRODUCT_SUCCESS':
      return Object.assign({}, state, {
        product: action.payload.sort((a, b) => (a.id - b.id))
      })
    case 'LOAD_STAT_CATEGORY_SUCCESS':
      return Object.assign({}, state, {
        category: action.payload.sort((a, b) => (a.id - b.id))
      })
    case 'LOAD_STAT_MONEYPRODUCT_SUCCESS':
      return Object.assign({}, state, {
        moneyProduct: action.payload.sort((a, b) => (a.id - b.id))
      })
    case 'LOAD_STAT_USERPAY_SUCCESS':
      return Object.assign({}, state, {
        userPayment: action.payload.sort((a, b) => (a.id - b.id))
      })
    case 'LOAD_STAT_USERORDER_SUCCESS':
      return Object.assign({}, state, {
        userOrder:action.payload.sort((a, b) => (a.id - b.id))
      })
    case 'LOAD_STAT_USERSHIP_SUCCESS':
      return Object.assign({}, state, {
        userShipping: action.payload.sort((a, b) => (a.id - b.id))
    })
    case 'LOAD_STAT_ADDRESS_SUCCESS':
      return Object.assign({}, state, {
        address: action.payload.sort((a, b) => (a.id - b.id))
    })
    case 'LOGOUT':
      return initialState
    default :
      return state;
  }
}
export default statistic;
