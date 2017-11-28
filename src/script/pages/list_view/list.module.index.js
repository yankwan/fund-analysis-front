/**
 * 列表页
 */

import listTemplate from './list.view.html';
import listCtrl from './list.controller.js';

const app = angular.module('demo-app')
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $stateProvider.state('list', {
            url: '/list',
            templateUrl: listTemplate,
            controller: listCtrl,
            controllerAs: 'vm'
        })

        $urlRouterProvider.otherwise('/list');
    })

export default app.name;