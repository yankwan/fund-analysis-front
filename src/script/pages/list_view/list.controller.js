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

        this.edaFundList = [];
    }

    /**
     * 加载Eda计划
     */
    loadEdaFundList() {
        alert('hello');
    }
}

export default Controller;