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