import axios from 'axios'
 export function request (config){
  //  创建axios实例
  const instance=axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    time:5000
  })
  // axios的拦截器
  // 请求拦截的作用
  instance.interceptors.request.use(config=>{
    // console.log(config)
    // 比如config中的一些信息不符合服务器的要求
    // 比如每次 发送网络请求时，都希望在界面中显示一个请求的图标
    // 3某些网络请求（比如登录（token）），必须携带一些特殊信息
    return config
  },err=>{
    console.log(err)
  })
  // 响应拦截
  instance.interceptors.response.use(res=>{
    return res.data 
  },err=>{
    console.log(err);
  }) 
  // 发送真正的网络请求
  return instance(config)
 }