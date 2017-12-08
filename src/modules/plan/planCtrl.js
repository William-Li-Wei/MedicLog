'use strict';

export default function($scope, medKitService,  planService) {
    /****************** Initialization ******************/

    $scope.mode = 'list';
    $scope.medKit = angular.copy(medKitService.get());
    $scope.plan = angular.copy(planService.get());
    $scope.planRulesOptions = {
        medicationList: $scope.medKit.pills,
        frequency: [1, 2, 3],
        quantity: [1, 2, 3]
    }

    const pageMenu = {
        list: {
            title: 'My Plan',
            leftButton: {
                text: 'Edit',
                icon: 'fa fa-pencil-square-o fa-2x',
                onClick: function() {
                    switchMode('edit');
                    $scope.planCopy = angular.copy($scope.plan);
                }
            },
            rightButton: {
                text: 'Add',
                icon: 'fa fa-plus-square-o fa-2x',
                onClick: function() {
                    switchMode('add');
                    $scope.newRule = {
                        medication: '',
                        form: '',
                        frequency: 1,
                        quantity: 1
                    };
                }
            }
        },
        add: {
            title: 'New Rule',
            leftButton: {
                text: 'Cancel',
                icon: 'fa fa-times fa-2x',
                onClick: function() {
                    $scope.newRule = undefined;
                    switchMode('list');
                }
            },
            rightButton: {
                text: 'Save',
                icon: 'fa fa-check fa-2x',
                onClick: function() {
                    if(!!$scope.newRule.medication) {
                        $scope.plan.rules.push($scope.newRule);
                        planService.save($scope.plan);

                    }
                    $scope.newRule = undefined;
                    switchMode('list');
                }
            }
        },
        edit: {
            title: 'Manage Rules',
            leftButton: {
                text: 'Cancel',
                icon: 'fa fa-times fa-2x',
                onClick: function() {
                    $scope.plan = angular.copy($scope.planCopy);
                    $scope.planCopy = undefined;
                    switchMode('list');
                }
            },
            rightButton: {
                text: 'Save',
                icon: 'fa fa-check fa-2x',
                onClick: function() {
                    planService.save($scope.plan);
                    $scope.planCopy = undefined;
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

    $scope.selectMedication = function(medication) {
        if(!!$scope.newRule) {
            $scope.newRule.medication = medication.name;
            $scope.newRule.form = medication.form;
        }
    }
    $scope.selectFrequency = function(frequency) {
        if(!!$scope.newRule) {
            $scope.newRule.frequency = frequency;
        }
    }
    $scope.selectQuantity = function(quantity) {
        if(!!$scope.newRule) {
            $scope.newRule.quantity = quantity;
        }
    }
    $scope.deleteRule = function(index) {
        $scope.plan.rules.splice(index, 1);
    }

};
