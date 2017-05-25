'use strict';

/**
 * @ngdoc function
 * @name noahTrackerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the noahTrackerApp
 */
angular.module('noahTrackerApp')
  .controller('AboutCtrl', ['$scope', '$uibModal', 'EVENT_TYPES', 'Event', function ($scope, $uibModal, EVENT_TYPES,Event) {
    init();
    function init(){
      Event.dataLoaded().then(function(data){
        $scope.events = data;
        console.log(data);

      },function (){

      } )
    }
    $scope.openAddNewEventModal = function () {
      var modalInstance = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'NewEventModalCtrl',
        resolve: {
        }
      })
      modalInstance.result.then(function () {

      }, function () {
        console.log('Modal Dismissed')
      })
    }
  }])
  .controller('NewEventModalCtrl', ['$uibModalInstance', '$scope', 'EVENT_TYPES', 'Event', function ($uibModalInstance, $scope, EVENT_TYPES, Event) {
    $scope.event_types = EVENT_TYPES;
    $scope.save = function () {
      $scope.event.date = new Date().toLocaleDateString();
      $scope.event.time = new Date().toLocaleTimeString();
      Event.writeEvent($scope.event).then(function (data) { $uibModalInstance.close(); }, function (error) { console.log(error) })
    }
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    }
  }]);
