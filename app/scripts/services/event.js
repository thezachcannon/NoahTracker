'use strict';

/**
 * @ngdoc service
 * @name noahTrackerApp.event
 * @description
 * # event
 * Factory in the noahTrackerApp.
 */
angular.module('noahTrackerApp')
  .factory('Event', ['$firebaseArray', function ($firebaseArray) {
    var ref = firebase.database().ref('/events');
    var obj = $firebaseArray(ref);
    return {
      writeEvent: function (dataToWrite) {
        if (dataToWrite.details) {
          return obj.$add({ date: dataToWrite.date, time: dataToWrite.time, type: dataToWrite.type, details: dataToWrite.details })
        }
        else{
          return obj.$add({date: dataToWrite.date, time: dataToWrite.time, type: dataToWrite.type})      
        }

      },
      getData: function () {
        return obj;
      },
      dataLoaded: function () {
        return obj.$loaded();
      }
    }
  }]);
