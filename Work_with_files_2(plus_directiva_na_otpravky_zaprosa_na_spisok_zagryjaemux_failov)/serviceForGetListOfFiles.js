/**
 *
 */
myApp.service('serviceForGetListOfFiles', ['$timeout', '$q', '$http', function ($timeout, $q, $http) {

    var srv = this;

    srv.serviceForGetListObj = {
        listOfFiles: []
    };

    srv.getFilesListFromServer = function () {
        var deferred = $q.defer();

        var promise = $http.get('http://176.36.229.152:80/ignition/rest/files/list');
        promise.then(function (response) {
            srv.serviceForGetListObj.listOfFiles = response.data.availableFilesList;
            deferred.resolve(srv.serviceForGetListObj.listOfFiles);
        }).catch(function (error) {
            console.log(error.status);
            deferred.resolve(srv.serviceForGetListObj.listOfFiles);
        });

        return deferred.promise;
    };

}]);

