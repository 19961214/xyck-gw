import ajax from './ajax.js';
const BASE = 'https://prm.xyck.com'
//搜索页面初始化数据
// export const reqRotItem = () => ajax(BASE+`/xhr/search/init.json`)
// //关键字
// export const reqSeachList = (value) => ajax(BASE+`xhr/search/searchAutoComplete.json`,{keywordPrefix:value})
// //识物
// export const reqTopic = (num,datas) => ajax(BASE+`/topic/v1/find/recAuto.json`,{page:num , size:datas})
export const getData = (data) => ajax(BASE+`/business/contact/addInfo`,data)