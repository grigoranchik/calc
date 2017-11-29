var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.selectedCurrencyByModel = null;
    $scope.varPastElem = "hellboy";

    $scope.$watch(function () {
        return $scope.selectedCurrencyByModel;
    }, function (newValue, oldValue) {
        $scope.varPastElem = newValue;
    });

}]);

myApp.directive('myPromiseDirective', function ($http, $q) {

    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            model: '=ngModel'
        },
        link: function (scope, element, attrs) {

            scope.getListOfCurrencies = function () {
                var deferred = $q.defer();

                var promise = $http.get('https://api.fixer.io/2000-01-03');
                promise.then(function (response) {

                    var info = response.data.rates;
                    var info_1 = Object.keys(info);
                    deferred.resolve(info_1);
                });

                return deferred.promise;
            };

            var getListPromise = scope.getListOfCurrencies();
            getListPromise.then(function (listOfCurr) {

                var selectElem = $(element);
                selectElem.select2({
                    data: listOfCurr
                });

                selectElem.on('change', function () {
                    var val = selectElem.val();
                    scope.$apply(function () {
                        scope.model = val;
                    });
                });

            });
        }
    }

});