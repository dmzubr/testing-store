'use strict';

describe('Service: scenarioSharedDataService', function () {

  // load the service's module
  beforeEach(module('testerApp'));

  // instantiate service
  var scenarioSharedDataService;
  beforeEach(inject(function (_scenarioSharedDataService_) {
    scenarioSharedDataService = _scenarioSharedDataService_;
  }));

  it('should do something', function () {
    expect(!!scenarioSharedDataService).toBe(true);
  });

});
