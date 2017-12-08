//директива по использов. ф-ции на отправку запроса на список файлов, удаления файлов, и вывода их ввиде списка ссылок
myApp.service('serviceForDeleteFile', ['$http','$rootScope', function ($http,$rootScope) {

            this.setDelete = function (elem) {
                if (confirm("Вы действительно хотите удалить файл?")) {
                    $rootScope.$broadcast('myFilesListChangingEvent', true);
                    var promise = $http.post('http://176.36.229.152:80/ignition/rest/files/delete/' + elem.availFileName, {});
                    promise.then(function (response) {
                        $rootScope.$broadcast('myFilesListNeedsReloading');
                        $rootScope.$broadcast('myFilesListChangingEvent', false);
                    }).catch(function (error) {
                        $rootScope.$broadcast('myFilesListNeedsReloading');
                        $rootScope.$broadcast('myFilesListChangingEvent', false);
                    });
                } else {
                    alert("нехуй нажимать не подумав!")
                }
            };

}]);
