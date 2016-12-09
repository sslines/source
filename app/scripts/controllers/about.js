'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.vessels = [
    	{name: 'Name of Vessel',img:'images/vessel1.jpg', details: 'Here is some more information about this vessl that is only revealed once clicked on.'},
    	{name: 'Name of Vessel',img:'images/vessel2.jpg', details: 'Here is some more information about this vessl that is only revealed once clicked on.'},
    	{name: 'Name of Vessel',img:'images/vessel3.jpg', details: 'Here is some more information about this vessl that is only revealed once clicked on.'}
    ];
  });
