<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
      <div class="sizes">
          <div class="sizes-type" v-for="(itemType, index1) in paramInfo.sizes[0]" :key="index1">
              <div class="sizes-item" v-for="(item, index2) in itemType" :key="index2">
                  {{item | zeroFilter}}
              </div>
          </div>
      </div>

      <div class="infos">
          <div class="infos-type" v-for="(item, index) in paramInfo.infos" :key="index">
              <div class="infos-type-name">
                  {{item.key}}
              </div>
              <div class="infos-type-value">
                  {{item.value}}
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        paramInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    
    filters: {
        zeroFilter(val) {
             
            return val === '0' ? '-' : val
        }
    }

}
</script>

<style scoped>
    .param-info {
        padding: 10px 12px;
        border-bottom: 5px solid #ddd;
    }
    .sizes {
        border-bottom: 2px solid #ddd;
    }
    .sizes-type, .infos-type {
        color: #333;
        font-size: 16px;
        border-bottom: 1px solid #ddd;
        display: flex;
         
        line-height: 220%;

    }
    .sizes-item, .infos-type-name {
        flex: 1;
    }
     
    .infos-type-value {
        flex: 3;
        color:  rgb(248, 130, 159);
    }
</style>