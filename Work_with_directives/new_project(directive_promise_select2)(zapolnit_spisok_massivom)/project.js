var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {



}]);


myApp.directive('mySelect2Directive', function ($http) {

    return {
        link: function (scope, element, attrs) {

            scope.info = [];
            scope.info_1 = [];

            scope.getListOfCurrencies = function () {

                var promise = $http.get('https://api.fixer.io/2000-01-03');
                promise.then(function (response) {

                    scope.info = response.data.rates;
                    scope.info_1 = Object.keys(scope.info);//возвращает массив из собственных перечисляемых свойств переданного объекта

                    $(element).select2({
                        data: scope.info_1
                    });

                });
            };

            scope.getListOfCurrencies();
        }
    }

});