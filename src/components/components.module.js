'use strict';

import './mdTabBar/mdTabBar.directive.js';
import './mdPageHeader/mdPageHeader.directive.js';
import './mdPillIcon/mdPillIcon.directive.js';


const componentsModule = angular.module('mdComponents', [
    'mdTabBar',
    'mdPageHeader',
    'mdPillIcon'
]);

export default componentsModule;
