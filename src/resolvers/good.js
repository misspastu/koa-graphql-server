const goodResolver = async (obj, args) => {
  let result = null
  const whereObj = {
    goods_online_status: 0,
    is_delete: 1
  }
  if (args.id) {
    whereObj.id = args.id
  } else if (args.goodsNum) {
    whereObj.goodsNum = args.goodsNum
  } else {
    return null
  }
  const model = await global.models.GoodsInfo.findOne({
    where: whereObj,
  })
  result = model.toJSON()
  return result
}
export default goodResolver