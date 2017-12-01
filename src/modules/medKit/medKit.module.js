'use strict';

import template from './med-kit.html';
import medKitCtrl from './medKitCtrl.js';


const medKitModule = angular.module('mdKit', []);

medKitModule.config(function($stateProvider) {
    $stateProvider
        .state('medKit', {
            url: '/medKit',
            template: template,
            controller: medKitCtrl,
            meta: {
                title: 'MedKit',
                icon: 'fa fa-medkit fa-2x',
                order: 2
            }
        });
});

export default medKitModule;
