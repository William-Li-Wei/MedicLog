'use strict';

const pillIconDirective = angular.module('mdPillIcon', [])
    .directive('mdPillIcon', function() {
        return {
            restrict: 'E',
            template: '<i ng-class="icon"></i>',
            scope: {
                form: '=',
                size: '=?'
            },
            link: function($scope) {
                const formIconMap = {
                    'tablet': 'flaticon-medicine-1',
                    'capsule': 'flaticon-pills-1',
                    'powder': 'flaticon-medicine-6',
                    'cream': 'flaticon-cream-1',
                    'spray': 'flaticon-spray-1',
                    'drops': 'flaticon-eye-drops',
                    'tape': 'flaticon-band-aid'
                };

                $scope.size = $scope.size || '1x';
                $scope.icon = formIconMap[$scope.form] || formIconMap.tablet;
                $scope.icon += ' fa-' + $scope.size;
            }
        }
    });

export default pillIconDirective;
