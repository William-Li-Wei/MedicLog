'use strict';

export default function() {
    let _plan = undefined;

    return {
        get: function() {
            if(!_plan) {
                _plan = JSON.parse(window.localStorage.getItem('plan'));
                _plan = _plan || {
                    name: 'plan',
                    rules: []
                }
            }

            return _plan;
        },
        save: function(plan) {
            if(!!plan) {
                _plan = angular.copy(plan);
                window.localStorage.setItem('plan', JSON.stringify(_plan));
            }

            return _plan;
        }
    }
}
