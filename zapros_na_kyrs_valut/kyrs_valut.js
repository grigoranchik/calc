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
        $(this).prependTo($(this).parent());




        var tr1,tr2;

        tr1= document.getElementsByTagName('tr')[1];
        tr2= document.getElementsByTagName('tr')[2];
        tr2=parentNode.insertBefore(tr[1],tr[2]);
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