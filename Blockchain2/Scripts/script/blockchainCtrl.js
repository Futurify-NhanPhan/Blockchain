var myApp = angular.module('myApp', []);

myApp.controller('blockchainCtrl', ['$scope', '$http', function ($scope, $http) {

    //$http.get("/Home/Search").success(function (res) {

    //    $scope.segments = res.Segments;



    //}).error(function () {
    //    alert('error');
    //});
    $scope.roles = [
        {
            Id:0, Name:"User"
        },
        {
            Id: 1, Name: "Bank A"
        },
        {
            Id: 2, Name: "Band B"
        },
    ];
    $scope.transaction = {};
    $scope.checkInfo = function () {
        if ($scope.role == 0) {
            $scope.transaction= { TransactionId: "aa1", Data: {Name: "Nhân", MedicalHistory:"ABC", Address: "Viet Nam"}}
        }
        if ($scope.role == 1) {
            $scope.transaction = { TransactionId: "aa1", Data: {Name: "Nhân",  Address: "Viet Nam" }}
        }
        if ($scope.role == 2) {
            $scope.transaction = { TransactionId: "aa1", Data: null }
        }
    }


}]);

