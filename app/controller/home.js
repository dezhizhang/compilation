/*
 * @Author: your name
 * @Date: 2021-03-01 22:11:14
 * @LastEditTime: 2021-03-01 22:24:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /compilation/app/controller/home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'hi, egg';
    this.ctx.render('/index.html')
  }
}

module.exports = HomeController;
