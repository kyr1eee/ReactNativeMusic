import axios from 'axios';
import { commonParam, options } from './config'

export async function getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
    return axios.get(url, {
        params: {
            ...commonParam,
            ...options,
            platform: 'h5',
            uin: 0,
            needNewCode: 1
        }
    });
}