let API  = 'http://128.199.176.240:8000/api/v1'
if(process.env.NODE_ENV !== 'production'){
  console.log('development')
  // API  = 'http://128.199.248.91:8080/api/v1'
   API = 'http://localhost:8000/api/v1'
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
export const DESIGN_ENDPOINT = API+'/d/design/'
export const BOTTLE_ENDPOINT = API+'/d/bottle/'
export const LOGO_ENDPOINT = API+'/d/logo/'
export const BANNER_ENDPOINT = API+'/d/banner/'
export const STATISTIC_ENDPOINT = API+'/m/stat/'
export const ADMIN_DESIGN_ENDPOINT = API+'/m/design/'
export const ADMIN_BOTTLE_ENDPOINT = API+'/m/bottle/'
export const ADMIN_BANNER_ENDPOINT = API+'/m/banner/'
export const ADMIN_LOGO_ENDPOINT = API+'/m/logo/'
