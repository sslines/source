/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:sideNav
 * @description
 * # sideNav
 */
angular.module('project1App')
  .directive('sideNav', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        $('#'+attrs.id).sideNav();
      }
    };
  });
