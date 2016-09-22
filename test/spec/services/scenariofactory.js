'use strict';

describe('Service: scenarioFactory', function () {

  // load the service's module
  beforeEach(module('testerApp'));

  // instantiate service
  var scenarioFactory;
  beforeEach(inject(function (_scenarioFactory_) {
    scenarioFactory = _scenarioFactory_;
  }));

  it('should do something', function () {
    expect(!!scenarioFactory).toBe(true);
  });

});
