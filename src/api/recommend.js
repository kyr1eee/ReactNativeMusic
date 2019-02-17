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

export async function getPopularList() {
    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';
    const params = Object.assign({}, commonParam, {
      platform: 'yqq',
      hostUin: 0,
      needNewCode: 0,
      categoryId: 10000000,
      sortId: 5,
      sin: 0,
      ein: 29,
      rnd: Math.random(),
      format: 'json'
    });
    return axios.get(url, {
            headers: {
              Referer: 'https://y.qq.com/',
              Host: 'c.y.qq.com'
             },
             params
          });
}

export async function getCdInfo(disstid) {
    const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg';
    const params = Object.assign({}, commonParam, {
        disstid,
        type: 1,
        json: 1,
        utf8: 1,
        onlysong: 0,
        platform: 'yqq',
        hostUin: 0,
        needNewCode: 0,
        g_tk: 222282923
    });
    return axios.get(url, {
        headers: {
            Referer: 'https://y.qq.com/',
            Host: 'c.y.qq.com'
        },
        params
    });
};

