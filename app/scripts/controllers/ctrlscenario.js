'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:CtrlscenarioCtrl
 * @description
 * # CtrlscenarioCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('CtrlScenario', [ '$scope', 'scenarioFactory', function ($scope,scenarioFactory) {
    
    function getScenarioList(){
      scenarioFactory.GetScenarioList()
      	.then(function(res){
      		console.log(res);
      		$scope.scenarioList = res;
      	}, function(error){
           toastr.error('Плохой код', 'Поправь его');

      	})	
    };

    getScenarioList();


  }]);


 