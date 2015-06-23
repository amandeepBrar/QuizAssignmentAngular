'use strict';

/**
 * @ngdoc function
 * @name deleteAppApp.controller:ResultCtrl
 * @description
 * # ResultCtrl
 * Controller of the deleteAppApp
 */
angular.module('deleteAppApp')
  .controller('ResultCtrl', function ($scope,$routeParams) {
    $scope.correct = $routeParams.correct;
    $scope.total = $routeParams.total;
  });
