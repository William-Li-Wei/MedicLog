'use strict';

import './md-tab-bar.css';
import template from './md-tab-bar.html';


const tabBarDirective = angular.module('mdTabBar', [])
    .directive('mdTabBar', function($state) {
        return {
            restrict: 'E',
            template: template,
            scope: {},
            link: function(scope, element) {

                scope.state = $state;
                // generate tabs based on the states
                scope.tabs = _.chain($state.get())
                    .filter(function(state) { return !!state.meta; })
                    .map(function(state) {
                        return {
                            name: state.name,
                            icon: state.meta.icon,
                            title: state.meta.title,
                            order: state.meta.order
                        }
                    })
                    .orderBy('order', 'asc')
                    .value();

                /* ---------- Interactions --------- */
                scope.navigateTo = function(stateName) {
                    $state.go(stateName);
                }

            }
        }
    })

export default tabBarDirective;
