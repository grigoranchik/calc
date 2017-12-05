//директива по использов. ф-ции на отправку запроса на список файлов, удаления файлов, и вывода их ввиде списка ссылок
/**
 *
 */
myApp.directive('myDeleteFileDirective', ['$http', 'serviceForGetListOfFiles', function ($http, serviceForGetListOfFiles) {
    return {
        link: function (scope, element, attrs) {

            //отправить запрос на удаление файла
            scope.setDelete = function (elem) {

                if (confirm("Вы действительно хотите удалить файл?")) {

                    $('.hide').css({
                        'display': 'block'
                    });
                    //debugger;
                    var promise = $http.post('http://176.36.229.152:80/ignition/rest/files/delete/' + elem.availFileName, {});
                    promise.then(function (response) {
                        serviceForGetListOfFiles.getFilesListFromServer();
                        $('.hide').css({
                            'display': 'none'
                        });

                    }).catch(function (error) {
                        serviceForGetListOfFiles.getFilesListFromServer();
                        console.log(error.status);
                        $('.hide').css({
                            'display': 'none'
                        });
                    });

                } else {
                    alert("нехуй нажимать не подумав!")

                }

            };
        }
    }
}]);
