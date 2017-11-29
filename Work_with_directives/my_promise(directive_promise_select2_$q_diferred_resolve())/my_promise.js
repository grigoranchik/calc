var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
$scope.varPastElem="hellboy";

$scope.selectElemPastElem = function(value){
    debugger;
    $scope.varPastElem=value;
};


}]);


myApp.directive('myPromiseDirective', function ($http, $q) {

    return {
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

                //listOfCurr.push('LOH');

                $(element).select2({
                    data: listOfCurr
                });

                //scope.global_var=document.listOfCurr;


            });
        }
    }

});