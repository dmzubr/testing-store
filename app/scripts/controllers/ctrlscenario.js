'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:CtrlscenarioCtrl
 * @description
 * # CtrlscenarioCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('CtrlScenario', [ '$scope', '$http','scenarioFactory', function ($scope,$http,scenarioFactory) {
    
  	var _urlLink = 'http://localhost:8085/scenario'

    function getScenarioList(){
      scenarioFactory.GetScenarioList()
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
       	 	getScenarioList();
       	 	toastr.success('Ok', 'good');
       	 }, function(error){
       	 	toastr.error('Плохой код', 'Поправь его');

       	 })

       };
     	

    };

    function _getUrlScenario(getData){
       return _urlLink + '(' + getData.ScenarioId + ')'
       console.log(_urlLink);
    };

    function deleteScenario(deletedScenario) { 
        //debugger; 
        var targetUrl = _getUrlScenario(deletedScenario); 
        //console.log('targetUrl is ' + targetUrl); 

        $http.delete(targetUrl) 
	        .then(function(res) { 
	        	angular.forEach($scope.scenarioList, function(element, index) { 
	        		if (element == deletedScenario) 
	        		$scope.scenarioList.splice(index, 1); 
					debugger; 		
	        	}); 
        		toastr.success('Ok', 'good');
        		}, function(error) { 
        			//bugger; 
       				 toastr.error('Плохой код', 'Поправь его');
        		   }); 
    } 

    getScenarioList();
    $scope.postDataToTable = postDataToTable;
    $scope.deleteScenario = deleteScenario;


  }]);


 