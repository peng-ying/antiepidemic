// 封装axios
import axios from 'axios'

// 请求超时时间
const http = axios.create({ timeout: 5000 });
// axios.defaults.timeout = 5000;

// http.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 请求拦截器
http.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.error(error);
})

// 响应拦截器
http.interceptors.response.use(
  response => {
      if (response.status === 200) {
          return Promise.resolve(response.data); //返回接口具体数据
      } else {
          return Promise.reject(response);
      }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        case 401:
          console.log('请登录')
          break;
        // 403 token过期
        case 403:
          console.log('登陆过期，请重新登录')
          // setTimeout(() => {
          //     router.replace({
          //         path: '/login',
          //         query: {
          //             redirect: router.currentRoute.fullPath
          //         }
          //     });
          // }, 1000);
          break;
        // 404请求不存在
        case 404:
          console.log('请求不存在')
          break;
        // 其他错误，直接抛出错误提示
        default:
          console.log(error.response.data.message)
      }
      return Promise.reject(error.response);
    }
  }
);

export default http;
