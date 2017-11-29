var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl',['$scope', '$http', function ($scope,$http) {
    $scope.info=[];
    $scope.info_1=[];


    $scope.getListOfCurrencies = function() {


        var promise = $http.get('https://api.fixer.io/2000-01-03');
        promise.then(function (response) {

            $scope.info=response.data.rates;
            $scope.info_1=Object.keys($scope.info);
            //console.log(typeof($scope.info_1[0]));

            debugger;

        });


    };//main function


}]);



myApp.directive('mySelect2Directive', function () {

    return {
        link: function (scope, element, attrs) {
            scope.getListOfCurrencies();
            //debugger;
            $(element).select2();

            $(element).select2({
                data: scope.info_1
            });

        }
    }

});