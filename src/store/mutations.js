import {ADD_COUNT, ADD_TO_CART, CHANGE_PRODUCT_SELECT} from './mutation-types'
export default  {
    [ADD_COUNT](state, payload) {
        payload.count ++
    },
    [ADD_TO_CART](state, payload) {
        payload.checked = false
        state.cartList.push(payload)
    },
    [CHANGE_PRODUCT_SELECT](state, payload) {
        const obj = state.cartList.find((item) => {
            //注意细节！！！！！！
            return item.iid == payload //返回iid匹配的对象
        })
        obj.checked = !obj.checked
    },
  
  }