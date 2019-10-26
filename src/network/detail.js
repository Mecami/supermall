import {request} from './request'
//这个request函数是返回一个promise对象的
export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
//商品信息
export class Goods {
    constructor(itemInfo, shopInfo, columns) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.discountBgC = itemInfo.discountBgColor
        this.columns = columns
        this.services = shopInfo.services
        this.realPrice = itemInfo.lowNowPrice
    }
}

//店铺信息
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}

export class GoodsParam {
    constructor(info, rule) {
        this.image = info.images ? info.images[0] : ''
        this.infos = info.set
        this.sizes = rule.tables
    }
}