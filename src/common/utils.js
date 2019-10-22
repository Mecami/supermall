//这个文件放一下常用的工具
//防抖函数
export function debounce(func, delay) {
  let timer = null
  return function(...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this,args)
    }, delay);
  }
}