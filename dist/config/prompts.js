'use strict';

/*
 * @Author: stjerne
 * @Date: 2021-07-22 13:54:25
 * @Description:命令行交互
 */
const chalk = require('chalk');

const PROMPTS = (isFile, appName) => {
  return {
    fileRepeat: {
      name: 'fileRepeat',
      type: 'list',
      message: `当前路径中已存在${isFile ? '文件' : '文件夹'}${chalk.bgBlue(' ' + appName + ' ')}，请确认操作：`,
      choices: [{
        name: '覆盖',
        value: 1
      }, {
        name: '退出',
        value: 0
      }]
    },

    appType: {
      name: 'appType',
      type: 'list',
      message: `请选择应用类型：`,
      choices: [{
        name: 'Web/H5应用',
        value: 'web'
      }, {
        name: `小程序应用`,
        value: 'wx'
      }]
    },

    scaffoldType: {
      web: {
        name: 'scaffoldType',
        type: 'list',
        message: `请选用预设模板类型：`,
        choices: [{
          name: `${chalk.bold('后台管理系统模板')} (Vue2 + Vuex + Vue-Router + axios + less + ele + dayjs)`,
          value: 'admin'
        }, {
          name: `${chalk.bold('基础模板')} (Vue2 + Vuex + Vue-Router + axios + less)`,
          value: 'basic'
        }]
      },
      wx: {
        name: 'scaffoldType',
        type: 'list',
        message: `请选用预设模板类型：`,
        choices: [{
          name: `UniApp（Vue2 + Vuex + Vue-Router + uView）${chalk.red('推荐使用HbuilderX运行发包')}`,
          value: 'uni'
        }]
      }
    },

    needCreateRepo: {
      name: 'needCreateRepo',
      type: 'confirm',
      message: `是否需要创建远程仓库：`
    },

    needInstallPackages: {
      name: 'needInstallPackages',
      type: 'confirm',
      message: `是否需要下载项目依赖：`
    }
  };
};
module.exports = PROMPTS;