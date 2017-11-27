angular.module("myApp", []).controller('valutCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.allChatMessages = [];
    $scope.newMessageText = null;
    $scope.newMessageFrom = null;

    $scope.onGetValuteClicked = function () {
        getChatMessages();
    };

    function getChatMessages() {

        document;
        window;

        var promise = $http.get('https://api.fixer.io/latest');  //https://api.fixer.io/latest
        promise.then(function (response) {

            var receivedData = response.data;
            var receivedRates = receivedData.rates;

            var eurToUsd = receivedRates.USD;
            debugger;
        });

        /*
        $.getJSON(
            // NB: using Open Exchange Rates here, but you can use any source!
            'https://openexchangerates.org/api/latest.json?app_id=[YOUR APP ID]',
            function(data) {
                // Check money.js has finished loading:
                if ( typeof fx !== "undefined" && fx.rates ) {
                    fx.rates = data.rates;
                    fx.base = data.base;
                } else {
                    // If not, apply to fxSetup global:
                    var fxSetup = {
                        rates : data.rates,
                        base : data.base
                    }
                }
            }
        );
        */


    }


}]);