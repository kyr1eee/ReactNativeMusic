import {commonParam, options} from './config';
import axios from 'axios';

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';
  const query = Object.assign({}, commonParam, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  });

  return axios.get(url, {
    params: {
      ...query
    }
  });
}

export function getSingerDetail(mid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg';
  const query = Object.assign({}, commonParam, {
    platform: 'yqq',
    needNewCode: 0,
    singermid: singermid,
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1
  });
  
  return axios.get(url, {
    params: {
      ...query
    }
  });
}