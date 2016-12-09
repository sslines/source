/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:datepicker
 * @description
 * # datepicker
 */
angular.module('project1App')
  .directive('datepicker', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        $('#'+attrs.id).pickadate({
        	selectMonths: true,
        	selectYears: 30
        });
      }
    };
  });
