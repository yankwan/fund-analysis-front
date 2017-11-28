import ctrl from './header.controller.js';
import tpl from './header.view.html';

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