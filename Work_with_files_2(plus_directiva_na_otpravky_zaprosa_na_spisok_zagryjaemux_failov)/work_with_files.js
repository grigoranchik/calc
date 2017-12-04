var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', ['$http', '$scope', 'serviceForGetListOfFiles', function ($http, $scope, serviceForGetListOfFiles) {
    var files;

    $scope.availableFilesListObj = serviceForGetListOfFiles.serviceForGetListObj;

    serviceForGetListOfFiles.getFilesListFromServer();

    // заполняем переменную данными, при изменении значения поля file
    $('input[type=file]').on('change', function () {
        files = this.files;
        console.log(files);
    });

    //онклик на загрузку файл на сервер
    $('.upload_files').on('click', function (event) {
        var data = new FormData();
        data.append('file', files[0]);
        console.log(data);
        var promise = $http.post('http://176.36.229.152/ignition/rest/files/upload', data, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });
        promise.then(function () {
            serviceForGetListOfFiles.getFilesListFromServer();
        }).catch(function (error) {
            console.log(error.status);
        });
    });
}]);
