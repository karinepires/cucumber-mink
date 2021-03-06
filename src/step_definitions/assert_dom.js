/**
 * Dependencies
 */

import { expect } from 'chai';

/**
 * Private
 */

const seeText = function (expected) {
  return this.driver.html().then(html => {
    expect(html).to.contain(expected);
  });
};

const notSeeText = function (expected) {
  return this.driver.html().then(html => {
    expect(html).to.not.contain(expected);
  });
};

const matchText = function (regex) {
  return this.driver.html().then(html => {
    expect(html).to.match(new RegExp(regex));
  });
};

const notMatchText = function (regex) {
  return this.driver.html().then(html => {
    expect(html).to.not.match(new RegExp(regex));
  });
};

const elementContainsText = function (expected, selector) {
  return this.driver.html(selector).then(html => {
    expect(html).to.contain(expected);
  });
};

const elementNotContainsText = function (expected, selector) {
  return this.driver.html(selector).then(html => {
    expect(html).to.not.contain(expected);
  });
};

const elementsCount = function (expected, selector) {
  return this.driver.elementsCount(selector).then(count => {
    expect(count).to.equal(parseInt(expected, 10));
  });
};

const elementState = function (method, state) {
  return function (selector) {
    return this.driver[method](selector).then(isMethod => {
      expect(isMethod).to.equal(state);
    });
  };
};

/**
 * Interface
 */

export default [
  [/I should see "([^"]*)"$/, seeText],
  [/I should not see "([^"]*)"$/, notSeeText],
  [/I should see text matching (.+)$/, matchText],
  [/I should not see text matching (.+)$/, notMatchText],
  [/I should see (\d+) "([^"]*)" elements?$/, elementsCount],
  [/I should see "([^"]*)" in the "([^"]*)" element$/, elementContainsText],
  [/I should not see "([^"]*)" in the "([^"]*)" element$/, elementNotContainsText],
  [/I should see an? "([^"]*)" element$/, elementState('isVisible', true)],
  [/I should not see an? "([^"]*)" element$/, elementState('isVisible', false)],
  [/the "([^"]*)" element should be visible$/, elementState('isVisible', true)],
  [/the "([^"]*)" element should not be visible$/, elementState('isVisible', false)],
  [/the "([^"]*)" element should exist$/, elementState('isExisting', true)],
  [/the "([^"]*)" element should not exist$/, elementState('isExisting', false)],
  [/the "([^"]*)" field should be enabled$/, elementState('isEnabled', true)],
  [/the "([^"]*)" field should be disabled$/, elementState('isEnabled', false)],
  [/the "([^"]*)" checkbox should be checked$/, elementState('isChecked', true)],
  [/the checkbox "([^"]*)" (?:is|should be) checked$/, elementState('isChecked', true)],
  [/the "([^"]*)" checkbox should not be checked$/, elementState('isChecked', false)],
  [/the checkbox "([^"]*)" should (?:be unchecked|not be checked)$/, elementState('isChecked', false)],
  [/the checkbox "([^"]*)" is (?:unchecked|not checked)$/, elementState('isChecked', false)],
];
