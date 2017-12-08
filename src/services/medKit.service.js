'use strict';

export default function() {
    let _medKit = undefined;

    return {
        get: function() {
            if(!_medKit) {
                _medKit = JSON.parse(window.localStorage.getItem('medKit'));
                _medKit = _medKit || {
                    name: 'medKit',
                    pills: []
                }
            }

            return _medKit;
        },
        save: function(medKit) {
            if(!!medKit) {
                _medKit = angular.copy(medKit);
                window.localStorage.setItem('medKit', JSON.stringify(_medKit));
            }

            return _medKit;
        }
    }
}
