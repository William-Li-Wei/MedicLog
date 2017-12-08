'use sctrict';

export default function($scope, planService) {

    /****************** Initialization ******************/

    $scope.plan = angular.copy(planService.get());
    $scope.pageMenu = {
        title: 'Activity'
    };
};
