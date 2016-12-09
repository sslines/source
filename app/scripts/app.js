'use strict';

/**
 * @ngdoc overview
 * @name project1App
 * @description
 * # project1App
 *
 * Main module of the application.
 */
var app =
    angular
    .module('project1App', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ]);



app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index', {
            url: '/',
            views: {
                'mainView': {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                }
            }
        })
        .state('about', {
            url: '/about',
            views: {
                'mainView': {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl'
                }
            }
        })
        .state('schedule', {
            url: '/schedule',
            views: {
                'mainView': {
                    templateUrl: 'views/schedule.html',
                    controller: 'ScheduleCtrl'
                }
            }
        })
        .state('helpdesk', {
            url: '/helpdesk',
            views: {
                'mainView': {
                    templateUrl: 'views/helpdesk.html',
                    controller: 'FaqCtrl'
                }
            }
        })
        .state('contact', {
            url: '/contact',
            views: {
                'mainView': {
                    templateUrl: 'views/contact.html',
                    controller: 'ContactCtrl'
                }
            }
        })
        .state('careers', {
            url: '/careers',
            views: {
                'mainView': {
                    templateUrl: 'views/careers.html',
                    controller: 'CareerCtrl'
                }
            }
        })/*
        .state('dashboard', {
            url: '/dashboard',
            views: {
                'mainView': {
                    templateUrl: 'views/dashboard.html',
                    controller: 'DashboardCtrl'
                },
                'dashboardView@dashboard': {
                    templateUrl: 'views/dashboard-main.html',
                    controller: 'DashboardCtrl'
                }
            }
        })*/
        .state('dashboard', {
            url: '/dashboard',
            views: {
                'mainView': {
                    templateUrl: 'views/dashboard/dashboard.html',
                    controller: 'DashboardCtrl'
                },
                'dashboardView@dashboard': {
                    templateUrl: 'views/dashboard/dashboard-inbox.html',
                    controller: 'DashboardCtrl'
                }
            }
        })
        .state('dashboard.schedule', {
            url: '/schedule',
            views: {
                'dashboardView': {
                    templateUrl: 'views/dashboard/dashboard-schedule.html',
                    controller: 'DashboardCtrl'
                }
            }
        })
        .state('dashboard.news', {
            url: '/news',
            views: {
                'dashboardView': {
                    templateUrl: 'views/dashboard/dashboard-news.html',
                    controller: 'DashboardCtrl'
                }
            }
        })
        .state('dashboard.ships', {
            url: '/ships',
            views: {
                'dashboardView': {
                    templateUrl: 'views/dashboard/dashboard-ships.html',
                    controller: 'DashboardCtrl'
                }
            }
        });
});
app.config(['$compileProvider', function($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);

app.run(['$state', '$route', '$rootScope', '$location', function($state, $route, $rootScope, $location) {
    $state.transitionTo('index');
    var original = $location.path;
    $location.path = function(path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function() {
                $route.current = lastRoute;
                un();
            });
        }
        return original.apply($location, [path]);
    };
}]);
