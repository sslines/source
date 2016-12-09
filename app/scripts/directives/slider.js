/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:slider
 * @description
 * # slider
 */
angular.module('project1App')
  .directive('slider', function () {
    return {
      restrict: 'A',
      link: function(scope, element) {
       	$(element).slider();
      }
    };
  });
