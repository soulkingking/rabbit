import request from "@/utils/request";
import qs from 'qs';

export async function getLine() {
    const res= await request({
        url: "/datav/login",
        method: "post",
        data:qs.stringify({username:'admin',password:'admin'}),
        headers:{'Content-Type':'application/x-www-form-urlencoded'}
      });
  return res;
}
