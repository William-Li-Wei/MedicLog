'use strict';

export default function($scope, medKitService) {

    /****************** Initialization ******************/

    $scope.mode = 'list';
    $scope.medKit = angular.copy(medKitService.get());
    $scope.medicationForms = ['tablet', 'capsule', 'powder', 'cream', 'spray', 'drops', 'tape'];

    const pageMenu = {
        list: {
            title: 'My MedKit',
            leftButton: {
                text: 'Edit',
                icon: 'fa fa-pencil-square-o fa-2x',
                onClick: function() {
                    switchMode('edit');
                    $scope.medKitCopy = angular.copy($scope.medKit);
                }
            },
            rightButton: {
                text: 'Add',
                icon: 'fa fa-plus-square-o fa-2x',
                onClick: function() {
                    switchMode('add');
                    $scope.newPill = {
                        name: '',
                        manufacturer: '',
                        form: 'tablet',
                        stock: 1
                    };
                }
            }
        },
        add: {
            title: 'Add Medicine',
            leftButton: {
                text: 'Cancel',
                icon: 'fa fa-times fa-2x',
                onClick: function() {
                    $scope.newPill = undefined;
                    switchMode('list');
                }
            },
            rightButton: {
                text: 'Save',
                icon: 'fa fa-check fa-2x',
                onClick: function() {
                    if(!!$scope.newPill.name) {
                        $scope.medKit.pills.push($scope.newPill);
                        medKitService.save($scope.medKit);

                    }
                    $scope.newPill = undefined;
                    switchMode('list');
                }
            }
        },
        edit: {
            title: 'Manage Medicine',
            leftButton: {
                text: 'Cancel',
                icon: 'fa fa-times fa-2x',
                onClick: function() {
                    $scope.medKit = angular.copy($scope.medKitCopy);
                    $scope.medKitCopy = undefined;
                    switchMode('list');
                }
            },
            rightButton: {
                text: 'Save',
                icon: 'fa fa-check fa-2x',
                onClick: function() {
                    medKitService.save($scope.medKit);
                    $scope.medKitCopy = undefined;
                    switchMode('list');
                }
            }
        }
    };

    function switchMode(mode) {
        $scope.mode = mode || $scope.mode;
        $scope.pageMenu = pageMenu[mode];
    }

    $scope.pageMenu = pageMenu.list;


    /****************** Interactions ******************/

    $scope.selectMedicationForm = function(form) {
        if(!!$scope.newPill) {
            $scope.newPill.form = form;
        }
    }
    $scope.deletePill = function(index) {
        $scope.medKit.pills.splice(index, 1);
    }

};
