'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:CareerCtrl
 * @description
 * # CareerCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('CareerCtrl', function ($scope, $filter) {
    $scope.careerList = [
     	{id: '0',title:'Career 1',desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor risus eu neque varius auctor. Cras non sollicitudin justo. Suspendisse pretium laoreet quam vitae ultrices. Donec augue lectus, sodales vitae ante id, pulvinar viverra purus. Suspendisse vel enim nunc. Morbi sed placerat ex. Nunc sit amet auctor quam.'},
     	{id: '1',title:'Career 2',desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor risus eu neque varius auctor. Cras non sollicitudin justo. Suspendisse pretium laoreet quam vitae ultrices. Donec augue lectus, sodales vitae ante id, pulvinar viverra purus. Suspendisse vel enim nunc. Morbi sed placerat ex. Nunc sit amet auctor quam.'},
     	{id: '2',title:'Career 3',desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor risus eu neque varius auctor. Cras non sollicitudin justo. Suspendisse pretium laoreet quam vitae ultrices. Donec augue lectus, sodales vitae ante id, pulvinar viverra purus. Suspendisse vel enim nunc. Morbi sed placerat ex. Nunc sit amet auctor quam.'},
     	{id: '3',title:'Career 4',desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor risus eu neque varius auctor. Cras non sollicitudin justo. Suspendisse pretium laoreet quam vitae ultrices. Donec augue lectus, sodales vitae ante id, pulvinar viverra purus. Suspendisse vel enim nunc. Morbi sed placerat ex. Nunc sit amet auctor quam.'},
     	{id: '4',title:'Career 5',desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor risus eu neque varius auctor. Cras non sollicitudin justo. Suspendisse pretium laoreet quam vitae ultrices. Donec augue lectus, sodales vitae ante id, pulvinar viverra purus. Suspendisse vel enim nunc. Morbi sed placerat ex. Nunc sit amet auctor quam.'}
    ];
    $scope.title = $scope.careerList[0].title;
    $scope.desc = $scope.careerList[0].desc;  
    $scope.changeCareer = function(id){
  			var career = $filter('filter')($scope.careerList, {id: id})[0];
  			$scope.title = career.title;	
  			$scope.desc = career.desc;
  		};
  });
