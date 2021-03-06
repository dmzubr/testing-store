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
    

  	$scope.model = {
      idRoute: $routeParams.id
    };


    function getScenarioData(){
        
      scenarioFactory.GetScenarioData()
      	.then(function(res){
         var scenarioLists = [];
         scenarioLists = res;
            for(var i in scenarioLists){
              if(parseInt($scope.model.idRoute) === scenarioLists[i].ScenarioId){
              
                $scope.postScenario = scenarioLists[i]
                toastr.success('Меню загружено','Можно редактировать');
              }
            }
        }, function(error){
           toastr.error('Плохой код', 'Поправь его');

      	});	
      }


    function refreshScenarioData(){
     
      scenarioFactory.GetScenarioData()
        .then(function(res){
             
         $scope.postScenario = res;
            toastr.success('Меню загружено','Обновлено');
              
         }, function(error){
            toastr.error('Плохой код', 'Поправь его');

        })  
    }

    
    String.prototype.format = function() 
      { 
      var content = this; 
      for (var i=0; i < arguments.length; i++) 
      { 
      var replacement = '{' + i + '}'; 
      content = content.replace(replacement, arguments[i]); 
      } 
      return content; 
      }; 

     function editScenario(scenarioData){
    
        return $location.path('/Scenario/Edit/{0}'.format(scenarioData.ScenarioId));
               
           
      }
      
                         


      function saveDataScenario(scenarioData){          // Функция обновляет данные в БД
      
        var ScenarioId = $routeParams.id;  // Переменная, чтобы поймать ключ Id
        var _urlLink = helper.GetUrlLink() + '(' + ScenarioId + ')'
        debugger;
        var targetUrl = _urlLink;
        scenarioData.editLink = undefined;
          scenarioFactory.SaveDataScenario(targetUrl, scenarioData)
            .then(function(res){
                    refreshScenarioData()   
                    toastr.success('Go on this way', 'All fine');
              }, function(error){
                    toastr.error('Плохой код', 'Поправь его');
              });
       
          refreshScenarioData()
          $location.path('/Scenario');
      }


    
	   getScenarioData();
	   $scope.saveDataScenario = saveDataScenario; 
     $scope.editScenario = editScenario;

   

  }]);
