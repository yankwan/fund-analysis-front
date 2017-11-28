import headerDirective from './header.directive.js';

angular.module('demo-app')
    .directive('demoHeader', headerDirective.factory);