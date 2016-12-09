'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the project1App
 */
angular.module('project1App')
    .controller('DashboardCtrl', function($scope,$location) {
        $scope.isActive = function(route) {
            return route === $location.path();
        };
        $scope.inboxList = [{
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }];
        $scope.careerList = [{
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            position: 'Career 1'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            position: 'Career 1'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            position: 'Career 1'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            position: 'Career 1'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            position: 'Career 1'
        }];
        $scope.schedList = [{
            img: 'images/vessel1.jpg',
            name: 'B1',
            time: '1:00PM',
            appro: '2hrs',
            route: 'Route 1',
            reg: '100',
            stud: '80',
            sen: '70'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            time: '1:00PM',
            appro: '2hrs',
            route: 'Route 2',
            reg: '100',
            stud: '80',
            sen: '70'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            time: '1:00PM',
            appro: '2hrs',
            route: 'Route 3',
            reg: '100',
            stud: '80',
            sen: '70'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            time: '1:00PM',
            appro: '2hrs',
            route: 'Route 4',
            reg: '100',
            stud: '80',
            sen: '70'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            time: '1:00PM',
            appro: '2hrs',
            route: 'Route 5',
            reg: '100',
            stud: '80',
            sen: '70'
        }];
        $scope.shipList = [{
            img: 'images/vessel1.jpg',
            name: 'B1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            dimen: '(1,201 ft) x (161 ft) x 15.2 metres (50 ft).'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            dimen: '(1,201 ft) x  161 ft) x 15.2 metres (50 ft).'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            dimen: '(1,201 ft) x  161 ft) x 15.2 metres (50 ft).'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            dimen: '(1,201 ft) x  161 ft) x 15.2 metres (50 ft).'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            dimen: '(1,201 ft) x  161 ft) x 15.2 metres (50 ft).'
        }];

        $scope.newsList = [{
            id: 0,
            img: 'images/schedule.jpg',
            headline: 'Lorem Ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Dolor et',
            date: 'July 19, 2015'
        }, {
            id: 1,
            img: 'images/schedule.jpg',
            headline: 'Lorem Ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Dolor et',
            date: 'July 19, 2015'
        }, {
            id: 2,
            img: 'images/schedule.jpg',
            headline: 'Lorem Ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Dolor et',
            date: 'July 19, 2015'
        }, {
            id: 3,
            img: 'images/schedule.jpg',
            headline: 'Lorem Ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Dolor et',
            date: 'July 19, 2015'
        }, {
            id: 4,
            img: 'images/schedule.jpg',
            headline: 'Lorem Ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Dolor et',
            date: 'July 19, 2015'
        }, ];
    });
