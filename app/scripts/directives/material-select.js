/*global $:false*/
/*jshint camelcase: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:materialSelect
 * @description
 * # materialSelect
 */
angular.module('project1App')
  .directive('materialSelect', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        $(element).material_select();
      }
    };
  });
