// 该文件如果和package.json在同级目录 将会被vue-cli自动检测并且加载
module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
    },
  },
};
