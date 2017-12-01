'use strict';

export default function($scope, medKitService) {
    /* -------- Initialization -------- */
    $scope.medKit = angular.copy(medKitService.get());

    console.log($scope.medKit);

};
