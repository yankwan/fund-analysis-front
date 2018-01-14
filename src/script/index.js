import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import '../assets/style/index.scss';

import query_helper from './../script/utils/query_helper.service.js';
const app = angular.module('demo-app', [uirouter])
    .service('QueryHelper', query_helper);

/**
 * require.context();
 * https://webpack.js.org/guides/dependency-management/#require-context
 */

/**
 * 应用模块加载
 */
const modules = require.context('./../script', true, /\.module.index.js$/);

/**
 * modules('./xxx.module.index.js') === require('./xxx.module.index.js')
 */
modules.keys().forEach(modules);

/**
 * 公共组件加载
 */
let components = require.context('./../script/components/', true, /\.index.js$/);
components.keys().forEach(components);

// let utils = require.context('./../script/utils/', true, /\.index.js$/);
// components.keys().forEach(utils);