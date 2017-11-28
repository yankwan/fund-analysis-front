/**
 * about页
 */

import aboutTemplate from './about.view.html';
import aboutCtrl from './about.controller.js';

const app = angular.module('demo-app')
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider.state('about', {
            url: '/about',
            templateUrl: aboutTemplate,
            controller: aboutCtrl,
            controllerAs: 'vm'
        })
    })

export default app.name;