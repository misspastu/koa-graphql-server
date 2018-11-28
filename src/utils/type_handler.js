/*
  audioBook: 有声书
  videoBook: 视频读书
  bookClub: 大咖领读
  course: 课程
  package: 畅享包
  ebook: 电子书
  globalSummaryBook: 极简全球阅读
  summaryAudioBook: 好书快听
  globalSummaryAudioBook: 阅读时差
  ad: 广告
  subject: 专题
  mix: 混合
  link: 外链
  category: 分类
  dailyAudio: 每日音频
  charge: 充值
  book: 图书
  coupon: 优惠券
  bookReview: 书评
  good: 商品
  bookDigest: 书摘
  all: 全部
  custom: 自定义
  bundle: 组合商品
*/
export default {
  getTypeNameByAdType: (adType) => {
    let result
    switch (adType) {
    case 0:
      result = 'book'
      break
    case 1:
      result = 'audioBook'
      break
    case 2:
      result = 'course'
      break
    case 3:
      result = 'bookClub'
      break
    case 4:
      result = 'package'
      break
    case 5:
      result = 'subject'
      break
    case 6:
      result = 'globalSummaryBook'
      break
    case 7:
      result = 'summaryAudioBook'
      break
    case 8:
      result = 'globalSummaryAudioBook'
      break
    case 9:
      result = 'ebook'
      break
    case 10:
      result = 'videoBook'
      break
    case 11:
      result = 'coupon'
      break
    case 13:
      result = 'bundle'
      break
    default:
      result = null
    }
    return result
  },
}