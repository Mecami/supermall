<template>
  <div class="bottom-bar">
      <div class="select-all">
          <check-button 
            class="check-button" 
            @click.native="selectAllClick"
            :is-check="isSelectAll"
            />
          <span>全选</span>
      </div>
      <div class="total">合计：{{totalPrice}}</div>
      <div class="calculate">去计算({{calculate}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            // isSelectAll: false
        }
    },
    components: {
        CheckButton
    },
    computed: {
        ...mapGetters(['cartList']),
        totalPrice() {
            return '￥' + this.cartList.filter(item => item.checked).reduce((preVal, item) => {
                return preVal + item.count * item.realPrice
            }, 0).toFixed(2)
        },
        calculate() {
            return this.cartList.filter(item => item.checked).reduce((preVal, item) => {
                return preVal + item.count
            }, 0) //这里记得要给个初始值！！！！！
        },
        isSelectAll() {
            //先判断是否是空数组，如果是，直接返回false
            if (this.cartList.length == 0) return false
            //注意空数组.every会返回ture
            //every方法是有1个不通过，就返回false,全部都通过才返回true
            return this.cartList.every(item => item.checked)
        }
    },
    methods: {
        selectAllClick() {
            if (this.isSelectAll) {
              this.cartList.forEach(item => item.checked = false)
            } else {
              this.cartList.forEach(item => item.checked = true)

            }
            // this.isSelectAll = !this.isSelectAll
            // this.$store.commit('selectOrAbandon')
            // // this.isSelectAll = !this.isSelectAll
            // // this.$store.commit('selectedAll',  this.isSelectAll)
            // // this.$emit('selectAll')
            // for(let item of this.cartList) {
            //     item.checked = this.selectAll
            // }
            
        }
    }
}
</script>

<style scoped>
    .bottom-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        background-color: #eee;
        color: #333;

        height: 48px;
        /* line-height: 40px; */
        font-size: 18px;
    }
    .check-button {
        margin: 0 10px;
    }
    .select-all {
        display: flex;
        align-items: center;
        width: 100px;
    }
    .bottom-bar .calculate {
        text-align: center;

        color: #fff;
        background-color: red;

        width: 100px;
        height: 100%;
        line-height: 48px;
    }
</style>