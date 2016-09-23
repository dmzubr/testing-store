'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('scenarioCreateCtrl', ['$scope', '$http', 'scenarioFactory', 'toastr', '$location', function ($scope,$http,scenarioFactory,toastr,$location){

   var _urlLink = 'http://localhost:8085/scenario'

   	function getScenarioData(){
      scenarioFactory.GetScenarioData()
      	.then(function(res){
      		console.log(res);
      		$scope.scenarioList = res;
      	}, function(error){
           toastr.error('Плохой код', 'Поправь его');

      	})	
    };

    function postDataToTable(scenarioData){
       if (!scenarioData.ScenarioId){
       	$http.post(_urlLink, scenarioData)
       	 .then(function(res){
       	 	//getScenarioData();
       	 	toastr.success('Ok', 'good');
       	 }, function(error){
       	 	toastr.error('Плохой код', 'Поправь его');

       	 })

       };

     	
        $location.path('/Scenario');
     	getScenarioData();
    };
    
    

   


    $scope.postDataToTable = postDataToTable;

  }]);
