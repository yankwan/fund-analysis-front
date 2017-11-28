import angular from 'angular';
import uirouter from '@uirouter/angularjs';
// import 'bootstrap';

// import bootstrap
import '../assets/style/index.scss';

const app = angular.module('demo-app', [uirouter]);

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