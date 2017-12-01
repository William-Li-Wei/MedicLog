'use strict';

import template from './dashboard.html';
import dashboardCtrl from './dashboardCtrl.js';


const dashboardModule = angular.module('mdDashboard', []);

dashboardModule.config(function($stateProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            template: template,
            controller: dashboardCtrl,
            meta: {
                title: 'Dashboard',
                icon: 'fa fa-star fa-2x',
                order: 0
            }
        });
});

export default dashboardModule;
