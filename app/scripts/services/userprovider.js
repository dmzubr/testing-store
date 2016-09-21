'use strict';

/**
 * @ngdoc service
 * @name testerApp.userProvider
 * @description
 * # userProvider
 * Factory in the testerApp.
 */
angular.module('testerApp')
  .factory('userProvider', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
