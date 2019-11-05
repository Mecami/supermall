import Toast from './Toast.vue'
const obj = {}
obj.install = function (Vue) {
    // console.log(Toast)
    //创建构成器
    //之前是Vue.extend({template:'<p>我是段落</p>',data(){return {message:'22'}}})
    const toastConstractor = Vue.extend(Toast)
    console.log(toastConstractor)
    //创建实例
    const toast = new toastConstractor()
    //挂载到元素上
    toast.$mount(document.createElement('div'))

    // console.log(toast.$el)
    //将Toast组件模板插入到body中
    //toast.$el就是Toast组件中的template标签中的那个元素
    document.body.appendChild(toast.$el)
    //在Vue的原型中添加$toast对象，让所有的组件中都可以直接使用
    Vue.prototype.$toast = toast
}
export default obj
