'use strict'

import capitalizeFilter from './capitalize.filter.js';


const filtersModule = angular.module('mdFilters', []);

filtersModule.filter('capitalize', capitalizeFilter);

export default filtersModule;
