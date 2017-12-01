'use strict';

import medKitService from './medKit.service.js';


const servicesModule = angular.module('mdServices', []);

servicesModule.service('medKitService', medKitService);

export default servicesModule;
