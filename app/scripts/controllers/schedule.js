'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('ScheduleCtrl', function ($scope,Schedule) {
    $scope.tableSchedList = Schedule.scheduleList;
  });
