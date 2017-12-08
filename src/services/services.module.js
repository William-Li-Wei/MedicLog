'use strict';

import medKitService from './medKit.service.js';
import planService from './plan.service.js';


const servicesModule = angular.module('mdServices', []);

servicesModule.service('medKitService', medKitService);
servicesModule.service('planService', planService);

export default servicesModule;
