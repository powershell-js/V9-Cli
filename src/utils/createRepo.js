/*
 * @Author: 汝星星
 * @Date: 2021-08-12 14:41:37
 * @Description:创建远程仓库
 */

const shell = require('shelljs');

const clearConsole = require('./clearConsole');

async function createRepo(appName, repoUrl) {
  const projectUrl = `${repoUrl}/${appName}.git`;
  console.log('projectUrl: ', projectUrl);

  const info = shell.exec(`git push --set-upstream ${projectUrl} master`);

  //结果
  if (info.stdout) {
    await clearConsole('green', `** 远程仓库创建成功：${projectUrl} **`);
  } else {
    await clearConsole('red', `** 远程仓库创建失败 **`);
  }
}

module.exports = createRepo;
