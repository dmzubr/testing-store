'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:PlanCtrl
 * @description
 * # PlanCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('PlanCtrl',['$scope', '$http', 'planProvider', function ($scope, $http, planProvider) {
   
    function getDataPlan() {
			planProvider.GetDataPlan()// -> promise
	  		.then(function(res) {
	  			$scope.planList = res;
	  		}); 	
		}	
		
      getDataPlan();

  }]);
