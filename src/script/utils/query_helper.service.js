class Service {
    constructor($http, $q, $rootScope) {
        "ngInject";
        
        this._$http = $http;
        this._$q = $q;
        this._$rootScope = $rootScope;
    }

    get(url, params) {
        return this._requst('get', ...arguments);
    }

    post(url, data, config) {
        return this._requst('post', ...arguments);
    }

    delete(url, params) {
        return this._requst('delete', ...arguments);
    }

    put(url, data, config) {
        return this._requst('put', ...arguments);
    }

    /**
     * API请求函数
     * @param {*} method 
     * @param {*} url 
     * @param {*} data 
     * @param {*} config 
     */
    _requst(method, url, data, config) {
        const deferred = this._$q.defer();
        let request;

        url = process.env.NODE_ENV === 'dev' ? "/api" + url : url;

        console.log("the url is %s, node_env is %s", url, process.env.NODE_ENV);

        if(method === 'get' || method === 'delete') {
            request = this._$http[method](url, { params: data });
        } else {
            request = this._$http[method](url, data, config);  
        }
        request.success(data => {
            if (data.resultCode == '200') {
                deferred.resolve(data);
            } else {

                deferred.reject(data);
            }
        }).error(data => {
            deferred.reject(data);
        });

        return deferred.promise;
    }


    getEvn() {
        return env === 'dev' ? "/m2m" : '';
    }

    /**
     * For Testing
     */
    getMock(url, params) {
        return this._requstMock('get', ...arguments);
    }

    postMock(url, data, config) {
        return this._requstMock('post', ...arguments);
    }

    _requstMock(method, url, data, config) {
        const deferred = this._$q.defer();
        let request;
        if(method === 'get' || method === 'delete') {
            request = this._$http[method](url, { params: data });
        } else {
            request = this._$http[method](url, data, config);  
        }
        request.success(data => {
            if (data.resultCode == '200') {
                deferred.resolve(data);
            } else {
                deferred.promise.catch(data => {
                    this._ctgNotification(data);
                });
                deferred.reject(data);
            }
        }).error(data => {
            deferred.reject(data);
        }); 

        return deferred.promise;
    }

    _isString(obj) {
        return Object.prototype.toString.call(obj) === "[object String]"; 
    }
}

export default Service;