'use strict';

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
  interval: 150
});

function generateFile(templatePath, appName, isFile) {
  const resourcePath = process.argv[1].replace('\\bin\\cmd', templatePath);
  const outputPath = process.cwd() + '/' + appName;

  oraIns.start();

  isFile && fs.removeSync(outputPath);

  fs.copySync(resourcePath, outputPath);

  oraIns.stop();
}

module.exports = generateFile;