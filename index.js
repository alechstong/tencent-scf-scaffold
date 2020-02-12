// 云函数入口文件
// @ts-ignore
const cloud = require('wx-server-sdk');

cloud.init({
  // use whatever env initted in the client
  env: cloud.DYNAMIC_CURRENT_ENV,
});

// 云函数入口函数
exports.main = async (event /*context*/) => {
  const wxContext = cloud.getWXContext();
  let { userInfo, a, b } = event;
  // TEMP
  console.log(userInfo);
  let sum = a + b;

  return {
    sum,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  };
};

