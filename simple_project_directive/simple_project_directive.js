var myApp = angular.module('myApp',[]);

myApp.controller('mainCtrl', function($scope){


    $scope.myOnSubmitHandler = function(){alert('ok')};//main function


});


myApp.directive('post', function(){
    return{
        link: function(scope, element, attrs){
            element.bind("keydown keypress", function ($event) {
                var keyCode = $event.which;// || $event.keyCode;

                if (keyCode==13){
                    scope.myOnSubmitHandler();
                };
                $event.preventDefault();
                return false;

                //debugger;
            });
        }
    };
});
