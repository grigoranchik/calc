/**
 * serviceForGetListOfFiles.getFilesListFromServer();
 * serviceForGetListOfFiles.serviceForGetListObj.listOfFiles;
 */
myApp.service('serviceForGetListOfFiles', ['$timeout', '$q', '$http', '$rootScope', function ($timeout, $q, $http, $rootScope) {

    var srv = this;

    srv.serviceForGetListObj = {
        listOfFiles: []
    };

    $rootScope.$on('myFilesListNeedsReloading', function (event, data) {
        srv.getFilesListFromServer();
    });

    srv.getFilesListFromServer = function () {

        var deferred = $q.defer();
        var promise = $http.get('http://176.36.229.152:80/ignition/rest/files/list');
        promise.then(function (response) {
            srv.serviceForGetListObj.listOfFiles = response.data.availableFilesList;

            deferred.resolve(srv.serviceForGetListObj.listOfFiles);
            if (response.data.availableFilesList.length==0){
                $rootScope.$broadcast('myFilesListChangingEvent_Shown_Text', true);
            }
            else{
                $rootScope.$broadcast('myFilesListChangingEvent_Shown_Text', false);
            };

        }).catch(function (error) {
            console.log(error.status);
            deferred.resolve(srv.serviceForGetListObj.listOfFiles);
        });

        return deferred.promise;
    };

}]);

