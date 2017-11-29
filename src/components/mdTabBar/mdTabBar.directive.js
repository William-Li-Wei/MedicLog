'use strict';

import './md-tab-bar.css';
import template from './md-tab-bar.html';


const tabBar = angular.module('mdTabBar', [])
    .directive('mdTabBar', function() {
        return {
            restrict: 'E',
            template: template
        }
    })

export default tabBar;
