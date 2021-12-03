
let isProd = process.env.NODE_ENV === 'production';
let publicPath = '/vue3-basic';
let configObj = {
  lintOnSave: false,
  publicPath
};
module.exports = configObj;
