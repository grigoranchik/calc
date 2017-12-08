myApp.service('serviceForRename_files', ['serviceForOpenAndSendFileToServer', 'serviceForDeleteFile', '$http', '$rootScope', function (serviceForOpenAndSendFileToServer, serviceForDeleteFile, $http, $rootScope) {
    this.myFunc_rename = function (fileName) {

        bootbox.prompt({
            size: "small",
            title: "хотите поменять имя файла?",
            callback: function (result) {
                if (result == null) {
                    return
                }
                else {

                    var promise = $http.get('http://176.36.229.152:80/ignition/rest/files/download/' + fileName.availFileName);
                    promise.then(function (response) {


                        var fileContent = response.data;
                        debugger;

                        var data = new FormData();
                        data.append('file', x[0]);

                        var promise1 = $http.post('http://176.36.229.152/ignition/rest/files/upload', data, {
                            transformRequest: angular.identity,
                            headers: {'Content-Type': undefined}

                        });
                        debugger;
                        promise1.then(function () {
                            $rootScope.$broadcast('myFilesListNeedsReloading');
                            $rootScope.$broadcast('myFilesListChangingEvent', false);
                            $rootScope.$broadcast('myFilesListChangingEvent_Shown_Text', false);
                        }).catch(function (error) {
                            console.log(error.status);
                            $rootScope.$broadcast('myFilesListChangingEvent', false);
                            $rootScope.$broadcast('myFilesListChangingEvent_Shown_Text', false);
                        });
                    });
                    /*
                    debugger;
                    //fileName.availFileName=result + fileName.availFileName.substring(fileName.availFileName.indexOf('.'));
                    //fileName.$$hashKey= "";
                    serviceForOpenAndSendFileToServer.myFunc(fileName,false);
                    debugger;
                    //fileName.availFileName=availFileName;
                    //serviceForDeleteFile.setDelete(fileName);
                    debugger;
                    */
                    return;
                }
            }
        })
        return;
    }
}]);