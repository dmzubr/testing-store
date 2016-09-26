'use strict';

/**
 * @ngdoc overview
 * @name testerApp
 * @description
 * # testerApp
 *
 * Main module of the application.
 */
angular
  .module('testerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
      })
      .when('/CtrlScenario', {
        templateUrl: 'views/ctrlscenario.html',
        controller: 'CtrlScenario'
      })
      .otherwise({
        redirectTo: '/'
      });
  });