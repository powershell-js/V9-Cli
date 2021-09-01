/*
 * @Author: stjerne
 * @Date: 2021-07-22 15:47:21
 * @Description:生成相应模板
 */

const fs = require('fs-extra');
const ora = require('ora');

const oraIns = ora({
  text: '努力处理中···',
  spinner: 'dots',
  color: 'yellow',
  interval: 150,
});

function generateFile(templatePath, appName, isFile) {
  //解析模板地址
  const resourcePath = process.argv[1].replace('\\bin\\cmd', templatePath);
  //定义输出地址
  const outputPath = process.cwd() + '/' + appName;
  //加载动画开始
  oraIns.start();

  //存在重名文件时先将其删除
  isFile && fs.removeSync(outputPath);
  //克隆文件夹
  fs.copySync(resourcePath, outputPath);

  //加载动画开始
  oraIns.stop();
}

module.exports = generateFile;
