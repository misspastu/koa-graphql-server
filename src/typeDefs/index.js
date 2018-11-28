// 把所有的类型都暴漏出来
const fs = require('fs')
const path = require('path')
console.log(path.join(__dirname, 'good.graphql'))
const types = [
  fs.readFileSync(path.join(__dirname, 'good.graphql'), 'utf8'),
  fs.readFileSync(path.join(__dirname, 'store.graphql'), 'utf8'),
  fs.readFileSync(path.join(__dirname, 'query.graphql'), 'utf8'),
  fs.readFileSync(path.join(__dirname, 'mutation.graphql'), 'utf8'),
  fs.readFileSync(path.join(__dirname, 'scalar.graphql'), 'utf8')
]
export default types
