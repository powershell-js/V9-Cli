'use strict';

/*
 * @Author: stjerne
 * @Date: 2021-07-22 15:08:10
 * @Description:清屏
 */

const readline = require('readline');
const chalk = require('chalk');

function clearConsole(color, content) {
  if (process.stdout.isTTY) {
    const blank = '\n'.repeat(process.stdout.rows);
    console.log(blank);
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
    if (content) {
      console.log(chalk.bold[color](content));
    }
  }
}

module.exports = clearConsole;