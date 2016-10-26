export const addFilter = (filters) => {
  return {
    type: 'ADD_FILTER',
    filters
  }
}

export const removeFilter = (filters) => {
  return {
    type: 'REMOVE_FILTER',
    filters
  }
}
