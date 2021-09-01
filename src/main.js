/*
 * @Author: stjerne
 * @Date: 2021-07-05 16:57:41
 * @Description:脚手架入口文件
 */
const program = require('commander');
const chalk = require('chalk');

program.version(require('../package').version);

program
  .command('create <appName>')
  .description('创建一个新项目')
  .action((name, options) => {
    if (process.argv.slice(3).length > 1) {
      console.log(chalk.yellow('\n 文件名中请勿包含空格！'));
    }
    const create = require('./command/create');
    create(name);
  });

program.parse(process.argv);
