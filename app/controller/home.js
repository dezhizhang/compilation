/*
 * @Author: your name
 * @Date: 2021-03-01 22:11:14
 * @LastEditTime: 2021-03-01 22:35:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /compilation/app/controller/home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    this.ctx.render('/index')
  }
}

module.exports = HomeController;
