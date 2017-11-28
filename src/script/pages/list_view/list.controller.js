/**
 * list page
 */

import style from './list.scss';

class Controller {
    constructor($scope) {
        // 通过ng-annotate
        "ngInject"; 
        this._scope = $scope;
        this.style = style;
    }
}

export default Controller;