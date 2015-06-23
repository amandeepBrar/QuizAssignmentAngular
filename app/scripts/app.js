'use strict';

/**
 * @ngdoc overview
 * @name deleteAppApp
 * @description
 * # deleteAppApp
 *
 * Main module of the application.
 */
angular
  .module('deleteAppApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/quiz/:name', {
        templateUrl: 'views/questions.html',
        controller: 'QuizCtrl'
      })
      .when('/result/:correct/:total', {
        templateUrl: 'views/result.html',
        controller: 'ResultCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
