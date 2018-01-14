/**
 * 列表页
 */

import listTemplate from './list.view.html';
import listCtrl from './list.controller.js';
import listService from './list.service.js';

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
    .service('ListService', listService);

export default app.name;