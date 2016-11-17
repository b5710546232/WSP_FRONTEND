export const sortNone = (products) => {
  return {
    type: 'SORT_NONE',
    products
  }
}

export const sortNameA = (products) => {
  return {
    type: 'SORT_NAME_A',
    products
  }
}

export const sortNameZ = (products) => {
  return {
    type: 'SORT_NAME_Z',
    products
  }
}

export const sortPriceLow = (products) => {
  return {
    type: 'SORT_PRICE_LOW',
    products
  }
}

export const sortPriceHigh = (products) => {
  return {
    type: 'SORT_PRICE_HIGH',
    products
  }
}
