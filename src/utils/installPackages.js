/*
 * @Author: 汝星星
 * @Date: 2021-08-12 14:53:03
 * @Description:依赖下载
 */
const shell = require('shelljs');
const chalk = require('chalk');

const clearConsole = require('./clearConsole');

async function installPackages() {
  console.log(chalk.yellow('即将开始下载项目依赖'));
  const info = shell.exec(`yarn`);

  //结果
  if (info.stdout) {
    await clearConsole('green', `** 依赖下载成功 **`);
  } else {
    await clearConsole('red', `** 依赖下载失败 **`);
  }
}

module.exports = installPackages;
