/**
 * Created by simba on 27/01/15.
 */
angular.module('Voosia', [
    'ngStorage'
])
    .controller('Sideform', function($scope,$localStorage){

        $scope.$storage = $localStorage.$default({
            x: 42
        });
        //    $scope.amount =  $localStorage.amount = "6000";
        $scope.amount = $localStorage.amount;
        $scope.duration = $localStorage.duration;
        $scope.firstname = $localStorage.firstname;
        $scope.lastname = $localStorage.lastname;

    })

.directive('cashNowForm', function() {
    return {
        templateUrl: '/templates/side-form.html'
    }

    });
