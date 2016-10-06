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
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
      })
      .when('/user/createuser', {
        templateUrl: 'views/createuser.html',
        controller: 'CreateuserCtrl', 
        })  
      .when('/plan', {
        templateUrl: 'views/plan.html',
        controller: 'PlanCtrl',
      })
      .when('/Scenario', {
        templateUrl: 'views/scenario.html',
        controller: 'scenarioCtrl'
      })
      .when('/Scenario/Create', {
        templateUrl: 'views/scenario-create.html',
        controller: 'scenarioCreateCtrl'
      })
      /*.when('/Scenario/Edit/:id', {
        templateUrl: 'views/scenario-edit.html',
        controller: 'scenarioEditCtrl'
      })*/
      .when('/Scenario/Edit/:id', {
        templateUrl: 'views/scenario-edit.html',
        controller: 'scenarioEditCtrl',
        
      })
      .otherwise({
        redirectTo: '/'
      });
  });
 
  
  /*angular.module('testerApp').config(function(toastrConfig) {
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
*/
