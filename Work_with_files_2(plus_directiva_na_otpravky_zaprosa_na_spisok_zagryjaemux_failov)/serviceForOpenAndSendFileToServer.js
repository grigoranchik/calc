myApp.service('serviceForOpenAndSendFileToServer',['$rootScope','serviceForGetListOfFiles','$http', function($rootScope, serviceForGetListOfFiles, $http) {
    this.myFunc = function (x,boolean) {

            $rootScope.$broadcast('myFilesListChangingEvent', true);
            var data = new FormData();
            var Ident_file = false;
            data.append('file', x[0]);
            var availableFilesListObj=serviceForGetListOfFiles.serviceForGetListObj;
            if(boolean==true){
                for (var i = 0; i < availableFilesListObj.listOfFiles.length; i++) {
                    if (availableFilesListObj.listOfFiles[0].availFileName == x.availFileName) {
                        alert('файл с таким именем уже существует');
                        Ident_file = true;
                        return;
                    }
                };
            };
            if (Ident_file == true) {
                return;
            }

            var promise = $http.post('http://176.36.229.152/ignition/rest/files/upload', data, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            });
            promise.then(function () {
                $rootScope.$broadcast('myFilesListNeedsReloading');
                $rootScope.$broadcast('myFilesListChangingEvent', false);
                $rootScope.$broadcast('myFilesListChangingEvent_Shown_Text', false);
            }).catch(function (error) {
                console.log(error.status);
                $rootScope.$broadcast('myFilesListChangingEvent', false);
                $rootScope.$broadcast('myFilesListChangingEvent_Shown_Text', false);
            });
        return;
    }
}]);