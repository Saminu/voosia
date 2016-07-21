
var Application = angular.module ('Application',[]);

  Application.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.withCredentials = false;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);


Application.controller('bodyCtrl', ['$scope','$http','$location', function($scope, $http, $location){

    $scope.spinner = true;
    $scope.success = false;

    // getting query string
    var parseQueryString = function() {
        var str = window.location.search;
        var objURL = {};

        str.replace(
            new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
            function( $0, $1, $2, $3 ){
                objURL[ $1 ] = $3;
            }
        );
        return objURL;
    };

    var params = parseQueryString();

    $scope.bid_id = params["aid"];


// posting bid function and request payload
    $scope.postBid = function() {

        var req = {
            method: 'POST',
            url: 'https://test-rtb.quiddiportal.com/v1.0/trigger/',

            headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'X-Password': 'f35f7a3a-db24-401e-98bb-0ffb14f26142',
            'X-Username': 'voosia'
            },

            data: {"aid": $scope.bid_id, "request_type":"bgrrp_data"}
        };

        $http(req).
            success(function(data){
                $scope.affiliates = data;
            })
            .error(function(data){
            //    alert(data)
            })
            .finally(function(){
                $scope.spinner = false;
                $scope.success = true;
            });
    };
    $scope.postBid();

  //  console.log({"aid": $scope.bid_id, "request_type":"bgrrp_data"});

}]);
