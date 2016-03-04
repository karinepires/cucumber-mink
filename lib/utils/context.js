
var context = {
	feature: null,
	scenario: null,
	step: null,
  setCurrentFeature: feature => {
  	context.feature = feature;
  },
  setCurrentScenario: scenario => {
  	context.scenario = scenario;
  },
  setCurrentStep: step => {
  	context.step = step;
  },
  getCurrentFeature: () => {
  	return context.feature;
  },
  getCurrentScenario: () => {
  	return context.scenario;
  },
  getCurrentStep: () => {
  	return context.step;
  }
};

module.exports = context;
