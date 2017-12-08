'use strict';

import './md-page-header.css';
import template from './md-page-header.html';


const pageHeaderDirective = angular.module('mdPageHeader', [])
    .directive('mdPageHeader', function() {
        return {
            restrict: 'E',
            template: template,
            scope: {
                'menu': '='
            }
        }
    })

export default pageHeaderDirective;
