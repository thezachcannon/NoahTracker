'use strict';

/**
 * @ngdoc function
 * @name noahTrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noahTrackerApp
 */
angular.module('noahTrackerApp')
  .controller('MainCtrl', ['$scope','$location', 'Auth', function ($scope, $location, Auth) {
    $scope.login = function (){
      $scope.success = undefined;
      Auth.$signInWithEmailAndPassword($scope.email, $scope.password).then(function(data){
        $location.path('/about')
      }, function (error){
        $scope.error = error;
      })
    }
    $scope.forgotPassword = function (){
      $scope.error = undefined;
      Auth.$sendPasswordResetEmail($scope.email).then(function(data){
        $scope.success = 'Password reset email sent!'
      }, function(error){
        $scope.error = error;
      })
    }
  }]);
