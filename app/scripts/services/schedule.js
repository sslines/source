'use strict';

/**
 * @ngdoc service
 * @name project1App.schedule
 * @description
 * # schedule
 * Service in the project1App.
 */
angular.module('project1App')
    .service('Schedule', function() {
        // AngularJS will instantiate a singleton by calling "new" on this function
        return {
            scheduleList: [{
                boat: 'B1',
                date: '2015-07-02',
                time: '1:00PM',
                appro: '2hrs',
                route: 'Lucena',
                reg: '100',
                stud: '80',
                senior: '70',
                promo: '30'
            }, {
                boat: 'B2',
                date: '2015-07-02',
                time: '1:00PM',
                appro: '2hrs',
                route: 'Lucena',
                reg: '100',
                stud: '80',
                senior: '70',
                promo: '30'
            }, {
                boat: 'B3',
                date: '2015-07-02',
                time: '1:00PM',
                appro: '2hrs',
                route: 'Lucena',
                reg: '100',
                stud: '80',
                senior: '70',
                promo: '30'
            }, {
                boat: 'B4',
                date: '2015-07-02',
                time: '1:00PM',
                appro: '2hrs',
                route: 'Lucena',
                reg: '100',
                stud: '80',
                senior: '70',
                promo: '30'
            }, {
                boat: 'B5',
                date: '2015-07-02',
                time: '1:00PM',
                appro: '2hrs',
                route: 'Lucena',
                reg: '100',
                stud: '80',
                senior: '70',
                promo: '30'
            }]
        };
    });
/*
Regular Daily Schedule
Lucena - Balanacan
2:30 Am
10:30 am
3:30 pm
11:30 pm


Bal - Luc
6:30am
11:30am
2:30pm
7:30pm




Fare
Regular 260php
Student 221php
Senior citizen 186php
Half-fare 130php
Discounted Rate 208php
Super Promo 50php

*/