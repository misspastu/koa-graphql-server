module.exports = (sequelize, DataTypes) => sequelize.define('tb_goods_info', {
  id: {type: DataTypes.BIGINT(20), autoIncrement: true, primaryKey: true},
  goodsNum: {type: DataTypes.STRING, field: 'goods_num'},
  name: {type: DataTypes.STRING, field: 'goods_name'},
}, {
  tableName: 'tb_goods_info',
  timestamps: false,
  getterMethods: {
    // createTime() {
    //   if (this.createTimeOriginal) {
    //     return this.createTimeOriginal.getTime() / 1000
    //   }
    //   return null
    // },
  }
})
