import axios from "axios";
import { Message } from "element-ui";
import { baseURL } from "@/config";

// 创建axios实例
const instance = axios.create({
  baseURL: baseURL("dev"),
  timeout: 5000
});

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    //   if (store.getters.token) {
    //     config.headers['X-Token'] = getToken()
    //   }
    return config;
  },
  error => {
    //对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    const res = response.data;
    if (response.status == 200) {
      return res;
    } else {
      return Promise.reject(new Error(res.message || "Error"));
    }
  },
  error => {
    // 对响应错误做点什么
    console.log("err" + error);
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);
export default instance;
