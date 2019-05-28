import apiBase from "./apiBase.js";
import interfaces from "./interfaces.js";

export default{

  //获取轮播图
  getHomeBanner(params){
    const result = apiBase.request(interfaces.INTERFACE_GET_BANNER,params,"GET");
    return result;
  },
  //获取首页文章
  getHomeArticle(page,params){
    const result = apiBase.request("/article/list/" + page + "/json",params,"GET");
    return result;
  }, 
  uncollect(id, params) {
    const result = apiBase.request("/lg/uncollect_originId/" + id + "/json", params, "POST");
    return result;
  },
  collect(id, params) {
    const result = apiBase.request("/lg/collect/" + id + "/json", params, "POST");
    return result;
  },
  toLogin(params) {
    const result = apiBase.request(interfaces.INTERFACE_USER_LOGIN, params, "POST");
    return result;
  },
  toRegister(params) {
    const result = apiBase.request(interfaces.INTERFACE_REGISTER, params, "POST");
    return result;
  },
  getHotKey(params) {
    const result = apiBase.request(interfaces.INTERFACE_HOT_KEY, params, "GET");
    return result;
  },
}