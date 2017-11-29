var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {



}]);


myApp.directive('myPromiseDirective', function ($http, $q) {

    return {
        link: function (scope, element, attrs) {

            scope.getListOfCurrencies = function () {
                var promise = $http.get('https://api.fixer.io/2000-01-03');
                promise.then(function (response) {

                    var info = response.data.rates;
                    var info_1 = Object.keys(scope.info);
                });
            };

            var getListPromise = scope.getListOfCurrencies();
            getListPromise.then(function (listOfCurr) {
                $(element).select2({
                    data: scope.info_1
                });
            });
        }
    }

});