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
    'ngTouch',
    'toastr'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Scenario', {
        templateUrl: 'views/scenario.html',
        controller: 'scenarioCtrl'
      })
      .when('/Scenario/Create', {
        templateUrl: 'views/scenarioCreate.html',
        controller: 'scenarioCreateCtrl'
      })
      .when('/Scenario/Edit/:id', {
        templateUrl: 'views/scenarioedit.html',
        controller: 'scenarioEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
 });
  
  angular.module('testerApp').config(function(toastrConfig) {
    angular.extend(toastrConfig, {
      autoDismiss: false,
      containerId: 'toast-container',
      maxOpened: 0,    
      newestOnTop: true,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      preventOpenDuplicates: false,
      target: 'body'
    });

  });
