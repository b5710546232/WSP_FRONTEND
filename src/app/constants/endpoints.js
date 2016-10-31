
if(process.env.NODE_ENV !== 'production'){
  const API  = 'http://localhost:8000/api/v1'
}
else{
  const API  = 'http://128.199.248.91:8000/api/v1'
}
export const LOGIN_ENDPOINT = API+'/u/login/'
export const USER_ENDPOINT = API+'/u/user/'
export const REGISTER_ENDPOINT = API+'/u/user/'
export const ADMIN_ENDPOINT = API+'/u/user/is_admin/'
export const CATEGORY_ENDPOINT = API+'/p/category/'
export const PRODUCT_ENDPOINT = API+'/p/product/'
export const PAYMENTMETHOD_ENDPOINT = API+'/t/method/'
export const CART_ENDPOINT = API+'/t/cart/'
export const ADDRESS_ENDPOINT = API+'/u/address/'
export const PROPERTY_ENDPOINT = API+'/t/property/'
export const ORDER_ENDPOINT = API+'/t/order/'
export const ADMIN_USER_ENDPOINT = API+'/m/user/'
export const ADMIN_ADDRESS_ENDPOINT = API+'/m/address/'
export const ADMIN_ITEMLINE_ENDPOINT = API+'/m/item_line/'
export const ADMIN_METHOD_ENDPOINT = API+'/m/method/'
export const ADMIN_PRODUCT_ENDPOINT = API+'/m/product/'
export const ADMIN_CATEGORY_ENDPOINT = API+'/m/category/'
export const ADMIN_ORDER_ENDPOINT = API+'/m/order/'
export const ITEMLINE_ENDPOINT = API+'/t/cart/lines/'
