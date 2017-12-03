var myApp = angular.module('myApp',[]);

myApp.controller('mainCtrl',['$http', function($http){
    var files;

    // заполняем переменную данными, при изменении значения поля file
    $('input[type=file]').on('change', function(){
        files = this.files;
        console.log(files);
    });

    //онклик на загрузку файл на сервер
    $('.upload_files').on( 'click', function( event ){
        var data = new FormData();
        data.append('file', files[0]);
        console.log(data);
        var promise = $http.post('http://176.36.229.152/ignition/rest/files/upload', data , {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });
        promise.then(function (){

        }).catch(function(error) {
            console.log(error.status);
        });
    });

}]);

myApp
    .filter('fileDateFilter', function() {
        return function(input) {
            return new Date(input).toString('dd.MM.yyyy HH:mm');;
        };
    });

//директива на отправку запроса на список файлов, вывода их ввиде списка ссылок
myApp.directive('mySelect2Directive', function ($http) {
    return {
        link: function (scope, element, attrs) {
            scope.info;
            scope.info_1 = [];
            scope.getList = function () {
                var promise = $http.get('http://176.36.229.152:80/ignition/rest/files/list');
                promise.then(function (response) {
                    scope.info = response.data.availableFilesList;
                    //for(i=0;i<scope.info.length;i++){
                      //  scope.info[i].availFileDateAddedMilliseconds=new Date(scope.info[i].availFileDateAddedMilliseconds).toString('dd.MM.yyyy HH:mm');
                    //};
                }).catch(function(error) {
                    console.log(error.status);
                });
            };
            scope.getList();
        }
    }
});
