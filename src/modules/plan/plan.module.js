'use strict';

import template from './plan.html';
import planCtrl from './planCtrl.js';


const planModule = angular.module('mdPlan', []);

planModule.config(function($stateProvider) {
    $stateProvider
        .state('plan', {
            url: '/plan',
            template: template,
            controller: planCtrl,
            meta: {
                title: 'MedPlan',
                icon: 'fa fa-calendar fa-2x',
                order: 1
            }
        });
});

export default planModule;
