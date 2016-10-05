'use strict';

/**
 * @ngdoc service
 * @name testerApp.helper
 * @description
 * # helper
 * Factory in the testerApp.
 */

 
      
angular.module('testerApp')
  .factory('helper', function () {
   

    function getUrlLink(){
      return 'http://localhost:8085/scenario';



    }

    

    return {
      GetUrlLink : getUrlLink
      
    };
  });
