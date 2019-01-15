export default class Singer {

  // 构造此类为了获得歌手图片URI
  constructor({mid, name, nameIndex}) {
    this.mid = mid;
    this.name = name;
    this.img = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${mid}.jpg?max_age=2592000`;
  }
}