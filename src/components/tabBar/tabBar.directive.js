'use strict';

import './tab-bar.css';
import template from './tab-bar.html';


const tabBar = angular.module('mdComponents.tabBar', [])
    .directive('tabBar', function() {
        return {
            restrict: 'E',
            template: template
        }
    })

export default tabBar;
