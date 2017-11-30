var myApp = angular.module('myApp',[]);

myApp.controller('mainCtrl',['$scope','$window', function($scope,$window){
    $scope.text_remember="";

    //$scope.myOnSubmitHandler = function(){alert('ok')};//main function

    if ($window.localStorage.getItem('text') !== null) {

        $scope.text_remember = $window.localStorage.getItem('text');
    }


    $scope.$watch(function () {
        return $scope.text_remember;
    }, function (newValue, oldValue) {
        $window.localStorage.setItem('text',newValue);

    });





}]);