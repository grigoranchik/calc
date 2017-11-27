angular.module("myApp",[]).controller('ignitionMsgCtrl', ['$scope', function ($scope) {

    $scope.allChatMessages = [];
    $scope.newMessageText = null;
    $scope.newMessageFrom = null;

    $scope.existingMessageText;
    $scope.existingMessageFrom;

    $scope.onSendNewMessageClicked = function () {
        //alert('hi');
        getChatMessages();
    };

    function getChatMessages() {
        var promise = $http.get('https://api.fixer.io/latest?symbols=33,44');
        //alert('hi');

        promise.then(function (response) {

            alert(response.data.this.base);



        });
    }


}]);