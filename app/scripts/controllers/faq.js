'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:FaqCtrl
 * @description
 * # FaqCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('FaqCtrl', function ($scope, Faq, $filter) {
  		$scope.faqList = Faq.faqList;

  		$scope.changeFaq = function(id){
  			var faq = $filter('filter')(Faq.faqList, {id: id})[0];
  			$scope.title = faq.title;	
  			$scope.desc = faq.description;
  		};
  });
