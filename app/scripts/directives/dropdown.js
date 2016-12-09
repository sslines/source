/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:dropdown
 * @description
 * # dropdown
 */
angular.module('project1App')
  .directive('dropdown', function () {
    return {
      restrict: 'A',
      link: function(scope, element) {
        $(element).dropdown();
      }
    };
  });
