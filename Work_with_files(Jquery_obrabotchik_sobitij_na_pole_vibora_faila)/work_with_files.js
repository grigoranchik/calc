var myApp = angular.module('myApp',[]);

myApp.controller('mainCtrl',['$http', function($http){

    var files; // переменная. будет содержать данные файлов

    // заполняем переменную данными, при изменении значения поля file
    $('input[type=file]').on('change', function(){
        files = this.files;
        console.log(files);
    });

    $('.upload_files').on( 'click', function( event ){

        // создадим объект данных формы
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



    $('.save_files').on( 'click', function( event ) {

            var promise = $http.get('http://176.36.229.152:80/ignition/rest/files/download/');
            var got_file;
            promise.then(function (response) {
                got_file=response.data;
                console.log('saved_file:', got_file);
            });

    });

}]);
