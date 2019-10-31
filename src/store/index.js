import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCart(state, payLoad) {
            //测试find和findIndex方法
            // const arr = [2, 4, 8]
            // const res = arr.findIndex(item => item > 3)
            // console.log(res)
            //先判断cartList中是否已经存在该商品
            //空数组.find返回undefined，找不到符合条件也是返回undefined
            const oldProduct = state.cartList.find(item => item.iid === payLoad.iid)
             
            //有的话，oldProduct存的就是该商品对象，并且指向了那个对象。没有的话就是undefined
            if(oldProduct) {
                oldProduct.count ++
            } else {
                payLoad.count = 1
                state.cartList.push(payLoad)
            }
            // console.log(state.cartList)
           
        }
    }
})
//导出，然后挂载到vue实例中
export default store