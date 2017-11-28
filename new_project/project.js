var myApp = angular.module('myApp',[]);

myApp.controller('mainCtrl', function($scope){


    $scope.myOnSubmitHandler = function(){alert('ok')};//main function


});

myApp.directive('Directive', function(){
debudder;
    return {
        link: function(scope, element, attrs) {



            $(".my-select2-directive").select2()


        }

            //$('.my-select2-directive').select2()
        }


});