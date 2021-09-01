'use strict';

/*
 * @Author: stjerne
 * @Date: 2021-07-20 15:06:20
 * @Description:cli-create命令
 */
const fs = require('fs-extra');

const shell = require('shelljs');
const chalk = require('chalk');
const inquirer = require('inquirer');

const prompts = require('../config/prompts');
const clearConsole = require('../utils/clearConsole');
const generateFile = require('../utils/generateFile');
const createRepo = require('../utils/createRepo');
const installPackages = require('../utils/installPackages');

async function create(appName, options) {
  const nameRepeat = fs.existsSync(`./${appName}`);
  const isFile = nameRepeat ? fs.statSync(`./${appName}`).isFile() : false;
  const newPrompts = prompts(isFile, appName);

  //检查名称是否重复
  if (nameRepeat) {
    const { fileRepeat } = await inquirer.prompt(newPrompts['fileRepeat']);
    if (!fileRepeat) return;
  }

  //清屏显示版本
  await clearConsole('yellow', `** ${require('../../package').name} version:${require('../../package').version} **`);

  //询问
  const { appType } = await inquirer.prompt(newPrompts['appType']);

  const { scaffoldType } = await inquirer.prompt(newPrompts['scaffoldType'][appType]);

  const templatePath = `/template/${appType}/${scaffoldType}`;

  //根据询问结果生成模板至本地
  generateFile(templatePath, appName, isFile);

  shell.cd(appName);

  const { needCreateRepo } = await inquirer.prompt(newPrompts['needCreateRepo']);
  const repoUrl = `http://192.168.89.229:12345/front`;
  needCreateRepo && createRepo(appName, repoUrl);

  if (appType === 'web') {
    const { needInstallPackages } = await inquirer.prompt(newPrompts['needInstallPackages']);
    needInstallPackages && installPackages();
  }

  console.log(chalk.green.bold('项目创建完毕。'));
}

module.exports = {
  create: (...args) => {
    return create(...args).catch(err => {
      console.log(chalk.red('项目创建出错：', err));
    });
  }
};