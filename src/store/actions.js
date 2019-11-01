import {ADD_COUNT, ADD_TO_CART} from './mutation-types'
export default {
    addCart({state, commit}, payload) {
        //测试find和findIndex方法
        // const arr = [2, 4, 8]
        // const res = arr.findIndex(item => item > 3)
        // console.log(res)
        //先判断cartList中是否已经存在该商品
        //空数组.find返回undefined，找不到符合条件也是返回undefined
        const oldProduct = state.cartList.find(item => item.iid === payload.iid)
         
        //有的话，oldProduct存的就是该商品对象，并且指向了那个对象。没有的话就是undefined
        if (oldProduct) { 
            // oldProduct.count ++
            commit(ADD_COUNT, oldProduct)
        } else {
            payload.count = 1
            // state.cartList.push(payLoad)
            commit(ADD_TO_CART, payload)
        }
        // console.log(state.cartList)
       
    }
}