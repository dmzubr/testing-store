'use strict';

/**
 * @ngdoc service
 * @name testerApp.scenarioSharedDataService
 * @description
 * # scenarioSharedDataService
 * Service in the testerApp.
 */
angular.module('testerApp')
  .service('scenarioSharedDataService', function () {
    
    var myList = [];

    var addList = function(newObject){
    	myList.push(newObject);

    };

    var getList = function(){
    	return myList;

    };

    return {
    addList: addList,
    getList: getList
 	};


  });
