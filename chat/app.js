angular.module("myApp",[]).controller('ignitionMsgCtrl', ['$scope', '$timeout', '$http', '$q', function ($scope, $timeout, $http, $q) {

	$scope.allChatMessages = [];
	$scope.sound_switch= false;
    $scope.newMessageText = null;
	$scope.newMessageFrom = null;
	
	$scope.existingMessageText;
	$scope.existingMessageFrom;

    $scope.onSendNewMessageClicked = function () {
        sendMessageToChat();
    };

    function getChatMessages() {
        var promise = $http.get('https://176.36.229.152/ignition/rest/messages/list');
		var history_resp;
        promise.then(function (response) {
			//alert($scope.allChatMessages.lengt);
			//alert(response.data.availableMessagesList.length);
			
			if ($scope.allChatMessages.length<response.data.availableMessagesList.length){
				if ($scope.sound_switch==true){
					var audio=new Audio();
					audio.src='Sound_ICQ.mp3';
					audio.play();
				};
			};
			
            $scope.allChatMessages = response.data['availableMessagesList'];
			$scope.sound_switch=true;						
			
			
        });
    }
	
	
	$(document).ready(function() {
     $("body").keypress(function(e) {
          if (e.which == 13) {
              sendMessageToChat();
          }
		  
     });
	});
	
	
	
	

    function sendMessageToChat() {
        var promise = $http.post('https://176.36.229.152/ignition/rest/messages/send', {newMessageText: $scope.newMessageText, newMessageFrom: $scope.newMessageFrom}, {});
        promise.then(function (response) {
            getChatMessages();
        });
    }

    getChatMessages();
	
	setInterval(getChatMessages, 5000);
	//setTimeout(func,1000);
}]);