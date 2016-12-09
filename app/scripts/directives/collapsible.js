/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:collapsible
 * @description
 * # collapsible
 */
angular.module('project1App')
    .directive('collapsible', function(Schedule) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                var schedList = Schedule.scheduleList;

                schedList.forEach(function(elem) {
                    var list = $('<li />').append('<div class="collapsible-header"><i class="material-icons">lens</i><span class="boat-name">' + elem.boat + '</span>'+'<span class="boat-route">' + elem.route + '</span>'+'</div>' +
                        '<div class="collapsible-body">'+
                        '<div class="container center">'+
                        	'<h4>Schedule</h4>'+
                        	'<table class="sched-table responsive bordered centered">'+
                        		'<thead>'+
									'<th>Date</th><th>Time</th><th>Approximation</th>'+
                        		'</thead>'+
                        		'<tbody>'+
                        			'<td>'+elem.date+'</td>'+
                        			'<td>'+elem.time+'</td>'+
                        			'<td>'+elem.appro+'</td>'+
                        		'</tbody>'+
                        	'</table>'+
                        	'<h4>Pricing</h4>'+
                        	'<table class="price-table responsive bordered centered">'+
                        		'<thead>'+
									'<th>Regular</th><th>Student</th><th>Senior</th><th>Promo</th>'+
                        		'</thead>'+
                        		'<tbody>'+
                        			'<td>'+elem.reg+'</td>'+
                        			'<td>'+elem.stud+'</td>'+
                        			'<td>'+elem.senior+'</td>'+
                        			'<td>'+elem.promo+'</td>'+
                        		'</tbody>'+
                        	'</table>'+
                        	'</div>'+
                        '</div>');
                    element.append(list);
                });

                $(element).collapsible();
            }
        };
    });
