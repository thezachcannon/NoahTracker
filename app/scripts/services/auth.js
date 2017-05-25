'use strict';

/**
 * @ngdoc service
 * @name noahTrackerApp.Auth
 * @description
 * # Auth
 * Factory in the noahTrackerApp.
 */
angular.module('noahTrackerApp')
  .factory('Auth', ['$firebaseAuth',
    function($firebaseAuth){
      return $firebaseAuth();
  }]);
