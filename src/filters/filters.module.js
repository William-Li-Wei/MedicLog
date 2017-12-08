'use strict'

import capitalizeFilter from './capitalize.filter.js';
import medicationUnitFilter from './medicationUnit.filter.js';


const filtersModule = angular.module('mdFilters', []);

filtersModule.filter('capitalize', capitalizeFilter);
filtersModule.filter('medicationUnit', medicationUnitFilter);

export default filtersModule;
