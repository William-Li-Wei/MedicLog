import 'jquery';
import 'angular';

import './components/components.module.js';


var app = angular.module('medicLog', [
    'ui.router',

    'mdComponents'
]);

app.config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
});

