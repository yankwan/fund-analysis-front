import ctrl from './nav.controller.js';
import tpl from './nav.view.html';

class Directive {
    constructor() {
        return {
            restrict: 'E',
            replace: true,
            controller: ctrl,
            templateUrl: tpl
        }
    }

    static factory() {
        return new Directive();
    }
}

export default Directive;