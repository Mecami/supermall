import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)
const state = {
    cartList: [],
    // selectedCount: this.$store.getters('selectedProdectCount'),
    selectAll: false
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
//导出，然后挂载到vue实例中
export default store