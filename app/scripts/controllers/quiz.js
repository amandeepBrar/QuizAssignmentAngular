'use strict';

/**
 * @ngdoc function
 * @name deleteAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the deleteAppApp
 */
angular.module('deleteAppApp')
  .controller('QuizCtrl', function ($scope,$http,$routeParams,$location) {
  	$scope.nameOfUsr = $routeParams.name;
  	$scope.questions = [];
  	$scope.index = 0;
    $http.get('quiz.json').success(function(resp){
    	$scope.questions = resp;
    });

    $scope.submitAnswer = function(){
    	if($scope.ans==$scope.questions[$scope.index].correct_answer)$scope.score++;
    	$scope.ans=null;
    	if($scope.index<$scope.questions.length-1){
    	$scope.index++;
    	} else{
    		$location.path('/result/'+$scope.score+'/'+$scope.questions.length);
    	}
    };

    $scope.score = 0;
  });
