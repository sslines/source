'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('MainCtrl', function ($scope) {
    $scope.featuredNews = [
      {img:'images/schedule.jpg',title:'Title of the News',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elementum massa. Aliquam cursus laoreet dolor, ac ullamcorper diam ullamcorper vestibulum. Etiam risus massa, dapibus a commodo pharetra, imperdiet sit amet metus. '},
      {img:'images/schedule.jpg',title:'Title of the News',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elementum massa. Aliquam cursus laoreet dolor, ac ullamcorper diam ullamcorper vestibulum. Etiam risus massa, dapibus a commodo pharetra, imperdiet sit amet metus. '},
      {img:'images/schedule.jpg',title:'Title of the News',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elementum massa. Aliquam cursus laoreet dolor, ac ullamcorper diam ullamcorper vestibulum. Etiam risus massa, dapibus a commodo pharetra, imperdiet sit amet metus. '},
      {img:'images/schedule.jpg',title:'Title of the News',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elementum massa. Aliquam cursus laoreet dolor, ac ullamcorper diam ullamcorper vestibulum. Etiam risus massa, dapibus a commodo pharetra, imperdiet sit amet metus. '},
      {img:'images/schedule.jpg',title:'Title of the News',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elementum massa. Aliquam cursus laoreet dolor, ac ullamcorper diam ullamcorper vestibulum. Etiam risus massa, dapibus a commodo pharetra, imperdiet sit amet metus. '}
    ];
  });
