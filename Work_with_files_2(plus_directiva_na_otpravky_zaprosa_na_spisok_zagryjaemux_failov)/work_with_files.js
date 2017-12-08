var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', ['$http', '$scope', 'serviceForGetListOfFiles','serviceForOpenAndSendFileToServer','serviceForRename_files','serviceForDeleteFile','$timeout', function ($http, $scope, serviceForGetListOfFiles, serviceForOpenAndSendFileToServer,serviceForRename_files,serviceForDeleteFile,$timeout) {

    $scope.ng_model_value_of_text_from_name_searching;
    $scope.ng_model_value_of_date_from_date_searching;

    $scope.isAjaxLoaderShown = false;
    $scope.isAjaxLoaderShown_Text_null = false;
    // Слуханим ивенти
    $scope.$on('myFilesListChangingEvent', function (event, data) {
        $scope.isAjaxLoaderShown = data;
    });
    $scope.$on('myFilesListChangingEvent_Shown_Text', function (event, data) {
        $scope.isAjaxLoaderShown_Text_null = data;
    });

    $scope.availableFilesListObj = serviceForGetListOfFiles.serviceForGetListObj;
    $scope.$emit('myFilesListNeedsReloading');

    //онклик на загрузку и отправку файл на сервер
    $('input[type=file]').on('change', function () {
        serviceForOpenAndSendFileToServer.myFunc(this.files,true);
    });

    //запуск ф-ции удаление файла
    $scope.setDelete = function(x){
        serviceForDeleteFile.setDelete(x);
    };

    //запуск ф-ции переименования выбранного файла
    $scope.timerStart = function(fileObject){
        $scope.promiseObj = $timeout(function(){
            return serviceForRename_files.myFunc_rename(fileObject);
        }, 1000);
    };
    $scope.timerStop = function(){
        $timeout.cancel($scope.promiseObj);
    };








}]);
