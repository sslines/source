/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:modal
 * @description
 * # modal
 */
angular.module('project1App')
  .directive('modal', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
      	$(element).leanModal();
      }
    };
  });
