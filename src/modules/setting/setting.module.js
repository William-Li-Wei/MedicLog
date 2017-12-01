'use strict';

import template from './setting.html';
import settingCtrl from './settingCtrl.js';


const settingModule = angular.module('mdSetting', []);

settingModule.config(function($stateProvider) {
    $stateProvider
        .state('setting', {
            url: '/setting',
            template: template,
            controller: settingCtrl,
            meta: {
                title: 'Setting',
                icon: 'fa fa-cogs fa-2x',
                order: 3
            }
        });
});
