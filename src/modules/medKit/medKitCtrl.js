'use strict';

export default function($scope, medKitService) {
    /* -------- Initialization -------- */
    $scope.medKit = angular.copy(medKitService.get());

    $scope.medKit.pills = [
        {
            name: 'Vitamin C',
            producer: 'Rosh',
            form: 'tablet',
            stock: 46
        },
        {
            name: 'Fish Oil',
            producer: 'Double Heart',
            form: 'spray',
            stock: 32
        }
    ];
    console.log($scope.medKit);

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
