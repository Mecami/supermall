import {request} from './request.js'

//请求轮播图和推荐商品
export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}
//请求商品列表数据
export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params: {
            type,
            page
        }
    })
}
