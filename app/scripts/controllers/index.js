'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the project1App
 */
angular.module('project1App')
    .controller('IndexCtrl', function($scope, $location) {
        $scope.hideDiv = true;
        $scope.$on('$locationChangeStart', function() {
            /*console.log($location.path().indexOf('dashboard'));*/
            $scope.hideDiv = (($location.path().indexOf('dashboard') > -1) ? true : false);
        });
    });
