
//директива на отправку запроса на список файлов, вывода их ввиде списка ссылок
myApp.directive('mySelect2Directive', ['$http', 'serviceForGetListOfFiles', function ($http, serviceForGetListOfFiles) {
    return {
        link: function (scope, element, attrs) {

            var getListPromise = serviceForGetListOfFiles.getFilesListFromServer();
            getListPromise.then(function (listOfFiles) {
                //debugger;
            });

            //scope.info = serviceForGetListOfFiles.getFilesListFromServer();
            //отправить запрос на удаление файла
            scope.setDelete = function (elem) {
                var promise = $http.post('http://176.36.229.152:80/ignition/rest/files/delete/' + elem.availFileName, {}, {});
                promise.then(function (response) {
                    // debugger;
                    //scope.info = serviceForGetListOfFiles.getFilesListFromServer();
                }).catch(function (error) {
                    //debugger;
                    console.log(error.status);
                    //scope.info = serviceForGetListOfFiles.getFilesListFromServer();
                });
            };
        }
    }
}]);
