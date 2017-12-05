'use strict';

export default function($scope, medKitService) {
    /* -------- Initialization -------- */
    $scope.medKit = angular.copy(medKitService.get());

    /*
    $scope.medKit.pills = [
        {
            name: 'Vitamin C',
            producer: 'Rosh',
            form: 'Tablet',
            stock: 46
        },
        {
            name: 'Fish Oil',
            producer: 'Double Heart',
            form: 'Capsule',
            stock: 32
        }
    ]
    */

    $scope.pageMenu = {
        title: 'My MedKit',
        leftButton: {
            text: 'Edit',
            icon: 'fa fa-pencil-square-o fa-2x',
            onClick: function() {

            }
        },
        rightButton: {
            text: 'Add',
            icon: 'fa fa-plus-square-o fa-2x',
            onClick: function() {

            }
        }
    }

};
