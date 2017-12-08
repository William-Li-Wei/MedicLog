'use strict';

export default function() {
    return function(input) {
        let output = input;
        if(input == 'cream' || input == 'powder') {
            output = 'gram';
        }
        return output.toLowerCase();
    }
}
