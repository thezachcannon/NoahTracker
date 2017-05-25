'use strict';

/**
 * @ngdoc function
 * @name noahTrackerApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the noahTrackerApp
 */
angular.module('noahTrackerApp')
  .controller('IndexCtrl', ['Auth', '$scope', '$location', function (Auth, $scope, $location) {
    Auth.$onAuthStateChanged(function(firebaseUser){
      if(firebaseUser){
        $scope.loggedIn = true;
      }
      else{
        $scope.loggedIn = false;
      }
    })
    $scope.logout = function () {
      Auth.$signOut();
      $location.path('/');
    }
  }]);
