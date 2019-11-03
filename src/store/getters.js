export default {
    cartLength(state) {
        return state.cartList.length
    },
    cartList(state) {
        return state.cartList
    },
    selectAll(state) {
        return state.selectAll
    },
    selectedCount(state) {
        return state.selectedCount
    }
}