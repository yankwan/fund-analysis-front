class Service {
    constructor(QueryHelper) {
        'ngInject'
        this._QueryHelper = QueryHelper;
    }

    // api 请求测试
    qryEdaFundList() {
        return this._QueryHelper.get('/eda/fundList');
    }
}

export default Service;