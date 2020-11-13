
import axios from 'axios'

const request = axios.create({
    baseURL:'http://ttapi.research.itcast.cn/'
})

request.interceptors.request.use(
    config => {
      // 每次发送请求之前判断vuex中是否存在token
      // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
      // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
      const user = JSON.parse(sessionStorage.getItem("user"))
      if( user ){
          user.token && (config.headers.Authorization = `Bearer ${user.token}`);
      }
      
      return config;
    },
    error => {
      return Promise.error(error);
    }
  );

request.interceptors.response.use((response )=>{
    return response
})

export default request;




