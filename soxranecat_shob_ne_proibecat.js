/*
    if ($window.localStorage.getItem('text') !== null) {

        $scope.text_remember = $window.localStorage.getItem('text');
    }


    $scope.$watch(function () {
        return $scope.text_remember;
    }, function (newValue, oldValue) {
        $window.localStorage.setItem('text','newValue');



    });
    //$window.localStorage.getItem(key));





window.onload = function() {
    localStorage.setItem('text', '$scope.text_remember_for_LocalStorage');

    if (localStorage.getItem('bgcolor') !== null) {

        document.getElementsByTagName('body')[0].style.background = localStorage.getItem('bgcolor');
    }
    ;
    document.getElementById('green').onclick = function () {
        document.getElementsByTagName('body')[0].style.background = 'green';
        localStorage.setItem('bgcolor', 'green');

    }

    document.getElementById('red').onclick = function () {
        document.getElementsByTagName('body')[0].style.background = 'red';
        localStorage.setItem('bgcolor', 'red');

    }

};
*/
