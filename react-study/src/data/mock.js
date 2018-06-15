// 使用 Mock
var Mock = require('mockjs')
export default Mock.mock('/test', {     
  'name'  : '@name',
       'age|1-100': 100,
       'color'  : '@color'
});
