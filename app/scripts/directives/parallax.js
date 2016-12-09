/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:parallax
 * @description
 * # parallax
 */
angular.module('project1App')
  .directive('parallax', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        $('#'+attrs.parallax).parallax();
      }
    };
  });
