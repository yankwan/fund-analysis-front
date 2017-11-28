import navDirective from './nav.directive.js';

angular.module('demo-app')
    .directive('demoNav', navDirective.factory)