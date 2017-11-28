angular.module("myApp", []).controller('valutCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.usdInPromise="";
    $scope.inputTextUSD = null;
    $scope.inputTextEUR = null;
    $scope.inputTextUSD_EUR= "соотношение USD/EUR";

    $scope.onGetValuteClicked = function () {

        //alert(typeof(parseFloat($scope.usdInPromise))+" "+ typeof(parseFloat($scope.usdInPromise)));
        //$scope.inputTextEUR=
        getChatMessages();

    };

    $scope.rekirovka= function(){

        /*
        var tr1,tr2;

        tr1= document.getElementsByTagName('a');
        tr2= document.getElementsByTagName('b');
        tr1=tr1.parentNode;
        tr1.insertBefore(tr1,tr2);
        */

        var parent = document.getElementById("tds");
        var tr2 = document.getElementById("tr2");
        var tr3 = document.getElementById("tr3");


        parent.insertBefore(tr3, tr2);

    };
    function getChatMessages() {

        var promise = $http.get('https://api.fixer.io/latest');  //https://api.fixer.io/latest
        promise.then(function (response) {

            $scope.inputTextUSD_EUR="1/"+ response.data.rates.USD;
            $scope.usdInPromise=response.data.rates.USD;
            $scope.inputTextEUR= (parseFloat($scope.inputTextUSD))*(parseFloat($scope.usdInPromise))+"";
            //debugger;
        });


    }


}]);