'use strict';

import './resources/app.css';

import './modules/dashboard/dashboard.module.js';
import './modules/plan/plan.module.js';
import './modules/medKit/medKit.module.js';
import './modules/setting/setting.module.js';
import './components/components.module.js';
import './services/services.module.js';
import './filters/filters.module.js';


var app = angular.module('medicLog', [
    'ui.router',

    'mdDashboard',
    'mdPlan',
    'mdKit',
    'mdSetting',
    'mdComponents',
    'mdServices',
    'mdFilters'
]);

app.config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
});

