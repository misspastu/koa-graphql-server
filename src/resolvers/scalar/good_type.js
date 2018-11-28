import { GraphQLScalarType } from 'graphql'
import typeHandler from '../../utils/type_handler'

const GoodTypeResolver = new GraphQLScalarType({
  name: 'GoodType',
  description: '商品类型 1audioBook有声书 2videoBook视频读书 3bookClub大咖领读 4course课程 5package畅享包 6ebook电子书 7globalSummaryBook极简全球阅读 8charge充值 9summaryAudioBook好书快听 10globalSummaryAudioBook阅读时差 11bundle组合商品',
  parseValue(value) {
    return typeHandler.getTypeNameByAdType(value)
  },
  serialize(value) { // 打印给客户端
    return typeHandler.getTypeNameByAdType(value)
  },
  parseLiteral(ast) { // 检查类型
    return typeHandler.getTypeNameByAdType(ast.value)
  }
})
export default GoodTypeResolver