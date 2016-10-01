'use strict';

/**
 * @ngdoc function
 * @name testerApp.controller:ScenarioeditCtrl
 * @description
 * # ScenarioeditCtrl
 * Controller of the testerApp
 */
angular.module('testerApp')
  .controller('scenarioEditCtrl', ['$scope', '$http', 'scenarioFactory', 'toastr', '$routeParams', '$location', 'scenarioSharedDataService', 'helper', function ($scope,$http,scenarioFactory,toastr,$routeParams,$location,scenarioSharedDataService,helper) {
    
  	//var _urlLink = 'http://localhost:8085/scenario';


    function getScenarioData(){
      scenarioFactory.GetScenarioData()
      	.then(function(res){
      		console.log(res);
      		$scope.scenarioList = res;
      	}, function(error){
           toastr.error('Плохой код', 'Поправь его');

      	})	
    };

    function ShowDataScenario(){
      // $scope.postScenario = scenarioSharedDataService.getList();
      $scope.postScenario.ScenarioId === '1';
      $scope.postScenario.Name === 'kk';
    };
   
  
    /*function saveDataScenario(scenarioData){          // Функция обновляет данные в БД
	//var getData.ScenarioId = $routeParams["id"];
		var ScenarioId = $routeParams["id"];  // Переменная, чтобы поймать ключ Id
		_urlLink = _urlLink + '(' + ScenarioId + ')'
       
       var targetUrl = _urlLink;
       scenarioData.editLink = undefined; 
       $http.put(targetUrl, scenarioData)
        .then(function(res){
          getScenarioData()
          debugger;
         toastr.success('Go on this way', 'All fine');
        }, function(error){
          toastr.error('Плохой код', 'Поправь его');
        });

        
     	getScenarioData();
        $location.path('/Scenario');
    }*/


      function saveDataScenario(scenarioData){          // Функция обновляет данные в БД
      //var getData.ScenarioId = $routeParams["id"];
        var ScenarioId = $routeParams["id"];  // Переменная, чтобы поймать ключ Id
        var _urlLink = helper.GetUrlLink() + '(' + ScenarioId + ')'
        debugger;
        var targetUrl = _urlLink;
        scenarioData.editLink = undefined;
        scenarioFactory.SaveDataScenario(targetUrl, scenarioData)
          .then(function(res){
            getScenarioData();

         toastr.success('Go on this way', 'All fine');
        }, function(error){
          toastr.error('Плохой код', 'Поправь его');
        });
         

          var path = $location('/scenario/edit/{0}'.format(scenarioData.scenarioId));
         // $console.debugger(path);
          colsole.log(path);
          getScenarioData();
          //$location.path('/Scenario');
      }


     ShowDataScenario();
	   getScenarioData();
	   $scope.saveDataScenario = saveDataScenario;

  }]);
