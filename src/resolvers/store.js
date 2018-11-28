const goodResolver = async (obj, args) => {
  console.log(args, 'args')
  console.log(global.models, 'global')
  let result = null
  let cache
  // const whereObj = {
  //   is_delete: 1
  // }
  if (cache) {
    result = JSON.parse(cache)
  } else {
    console.log('请求')
    const model = await global.models.GoodsInfo.findAll()
    result = model
    console.log(model, 'model')
  }
  return result
}
// module.exports = {
//   good: goodResolver
// }
export default goodResolver