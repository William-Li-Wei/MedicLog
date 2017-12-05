'use strict';

import './mdTabBar/mdTabBar.directive.js';
import './mdPageHeader/mdPageHeader.directive.js';


const componentsModule = angular.module('mdComponents', [
    'mdTabBar',
    'mdPageHeader'
]);

export default componentsModule;
