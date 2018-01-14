/**
 * list page
 */

import style from './list.scss';

class Controller {
    constructor($scope, ListService) {
        // 通过ng-annotate
        "ngInject"; 
        this._scope = $scope;
        this.style = style;
        this.ListService = ListService;

        this.edaFundList = [];
    }

    /**
     * 加载Eda计划
     */
    loadEdaFundList() {
        console.log("load Eda fund.....");
        this.ListService.qryEdaFundList().then(data => {
            console.log("data is %j", data);
        })
    }
}

export default Controller;