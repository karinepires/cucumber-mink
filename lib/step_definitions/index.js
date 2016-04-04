/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Arnaud Dezandee
 *
 * Authors:
 *     Arnaud Dezandee <dezandee.arnaud@gmail.com>
 */

var Ext = require('./ext');

///////////////////

function utility() {
  this.Given(/^I wait (\d+) seconds?$/,                                         Ext.Utility.wait);
  this.Given(/^the viewport is (\d+)px width and (\d+)px height$/,              Ext.Utility.viewport);
  this.Given(/^I take a screenshot$/,                                           Ext.Utility.takeScreenshot);
  this.Given(/^I take a screenshot "([^"]*)"$/,                                 Ext.Utility.takeScreenshotFilename);
  this.Given(/^I wait for "([^"]*)" to have content$/,                          Ext.Utility.waitForText);
  this.Given(/^I wait for "([^"]*)" to not have content$/,                      Ext.Utility.waitForNotText);
  this.Given(/^I wait for "([^"]*)" to contain "([^"]*)"$/,                     Ext.Utility.waitForContain);
  this.Given(/^I wait for "([^"]*)" to not contain "([^"]*)"$/,                 Ext.Utility.waitForNotContain);
  this.Given(/^I wait for "([^"]*)" to match ([^"]*)$/,                         Ext.Utility.waitForMatch);
  this.Given(/^I wait for "([^"]*)" to not match ([^"]*)$/,                     Ext.Utility.waitForNotMatch);
  this.Given(/^I wait for "([^"]*)" to be (?:selected|checked)$/,               Ext.Utility.waitForSelected);
  this.Given(/^I wait for "([^"]*)" to (?:not be selected|be unchecked|not be checked)$/,Ext.Utility.waitForNotSelected);
  this.Given(/^I wait for "([^"]*)" to exist$/,                                 Ext.Utility.waitForExist);
  this.Given(/^I wait for "([^"]*)" to not exist$/,                             Ext.Utility.waitForNotExist);
  this.Given(/^I wait for "([^"]*)" to be enabled$/,                            Ext.Utility.waitForEnabled);
  this.Given(/^I wait for "([^"]*)" to (?:be disabled|not be enabled)$/,        Ext.Utility.waitForDisabled);
  this.Given(/^I wait for "([^"]*)" to have a value$/,                          Ext.Utility.waitForValue);
  this.Given(/^I wait for "([^"]*)" to have no value$/,                         Ext.Utility.waitForNotValue);
  this.Given(/^I wait for "([^"]*)" to be visible$/,                            Ext.Utility.waitForVisible);
  this.Given(/^I wait for "([^"]*)" to (?:be invisible|not be visible)$/,       Ext.Utility.waitForInvisible);
  this.Given(/^I wait for "([^"]*)" to have the value "([^"]*)"$/,              Ext.Utility.waitForValueContain);
  this.Given(/^I wait for "([^"]*)" to not have the value "([^"]*)"$/,          Ext.Utility.waitForValueNotContain);
  this.Given(/^I wait for "([^"]*)" to match the value ([^"]*)$/,               Ext.Utility.waitForValueMatch);
  this.Given(/^I wait for "([^"]*)" to not match the value ([^"]*)$/,           Ext.Utility.waitForValueNotMatch);

  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to have content$/,                          Ext.Utility.waitForTextTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to not have content$/,                      Ext.Utility.waitForNotTextTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to contain "([^"]*)"$/,                     Ext.Utility.waitForContainTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to not contain "([^"]*)"$/,                 Ext.Utility.waitForNotContainTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to match ([^"]*)$/,                         Ext.Utility.waitForMatchTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to not match ([^"]*)$/,                     Ext.Utility.waitForNotMatchTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to be (?:selected|checked)$/,               Ext.Utility.waitForSelectedTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to (?:not be selected|be unchecked|not be checked)$/,Ext.Utility.waitForNotSelectedTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to exist$/,                                 Ext.Utility.waitForExistTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to not exist$/,                             Ext.Utility.waitForNotExistTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to be enabled$/,                            Ext.Utility.waitForEnabledTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to (?:be disabled|not be enabled)$/,        Ext.Utility.waitForDisabledTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to have a value$/,                          Ext.Utility.waitForValueTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to have no value$/,                         Ext.Utility.waitForNotValueTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to be visible$/,                            Ext.Utility.waitForVisibleTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to (?:be invisible|not be visible)$/,       Ext.Utility.waitForInvisibleTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to have the value "([^"]*)"$/,              Ext.Utility.waitForValueContainTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to not have the value "([^"]*)"$/,          Ext.Utility.waitForValueNotContainTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to match the value ([^"]*)$/,               Ext.Utility.waitForValueMatchTimeout);
  this.Given(/^I wait (\d+) seconds? for "([^"]*)" to not match the value ([^"]*)$/,           Ext.Utility.waitForValueNotMatchTimeout);
}

function navigation() {
  this.Given(/^I browse "([^"]*)"$/,                                            Ext.Navigation.baseUrl);
  this.When(/^I am on (?:|the )homepage$/,                                      Ext.Navigation.root);
  this.When(/^I go to (?:|the )homepage$/,                                      Ext.Navigation.root);
  this.When(/^I am on "([^"]*)"$/,                                              Ext.Navigation.browse);
  this.When(/^I go to "([^"]*)"$/,                                              Ext.Navigation.browse);
  this.When(/^I reload the page$/,                                              Ext.Navigation.refresh);
  this.When(/^I move backward one page$/,                                       Ext.Navigation.back);
}

function action() {
  this.When(/^I click on "([^"]*)"$/,                                           Ext.Action.click);
  this.When(/^I press "([^"]*)"$/,                                              Ext.Action.press);
  this.When(/^I follow "([^"]*)"$/,                                             Ext.Action.follow);
  this.When(/^I hover "([^"]*)" element$/,                                      Ext.Action.hover);
  this.When(/^I submit "([^"]*)" form$/,                                        Ext.Action.submit);
}

function form() {
  this.When(/^I fill in "([^"]*)" with "([^"]*)"$/,                             Ext.Form.fillField);
  this.When(/^I fill in "([^"]*)" with:$/,                                      Ext.Form.fillField);
  this.When(/^I fill in the following:$/,                                       Ext.Form.fillFieldsHash);
  this.When(/^I select "([^"]*)" from "([^"]*)"$/,                              Ext.Form.selectOption);
  this.When(/^I check "([^"]*)"$/,                                              Ext.Form.checkOption);
  this.When(/^I uncheck "([^"]*)"$/,                                            Ext.Form.uncheckOption);
  this.When(/^I attach "([^"]*)" to "([^"]*)"$/,                                Ext.Form.attachFile);
}

function assertUrl() {
  this.Then(/^I should be on "([^"]*)"$/,                                       Ext.Assert.Url.equal);
  this.Then(/^I should be on (?:|the )homepage$/,                               Ext.Assert.Url.root);
  this.Then(/^the url should match (.+)$/,                                      Ext.Assert.Url.match);
  this.Then(/^the url parameter should match (.+)$/,                            Ext.Assert.Url.queryMatch);
  this.Then(/^the url hash should match (.+)$/,                                 Ext.Assert.Url.hashMatch);

  this.Then(/^I wait for the url to be "([^"]*)"$/,                             Ext.Assert.Url.waitForURLEqual);
  this.Then(/^I wait for the url to match (.+)$/,                               Ext.Assert.Url.waitForURLMatch);
  this.Then(/^I wait for the url parameter to match (.+)$/,                     Ext.Assert.Url.waitForURLQueryMatch);
  this.Then(/^I wait for the url hash to match (.+)$/,                          Ext.Assert.Url.waitForURLHashMatch);

  this.Then(/^I wait (\d+) seconds? for the url to be "([^"]*)"$/,              Ext.Assert.Url.waitForURLEqualTimeout);
  this.Then(/^I wait (\d+) seconds? for the url to match (.+)$/,                Ext.Assert.Url.waitForURLMatchTimeout);
  this.Then(/^I wait (\d+) seconds? for the url parameter to match (.+)$/,      Ext.Assert.Url.waitForURLQueryMatchTimeout);
  this.Then(/^I wait (\d+) seconds? for the url hash to match (.+)$/,           Ext.Assert.Url.waitForURLHashMatchTimeout);
}

function assertDom() {
  this.Then(/^I should see "([^"]*)"$/,                                         Ext.Assert.Dom.containsText);
  this.Then(/^I should not see "([^"]*)"$/,                                     Ext.Assert.Dom.notContainsText);
  this.Then(/^I should see text matching (.+)$/,                                Ext.Assert.Dom.matchesText);
  this.Then(/^I should not see text matching (.+)$/,                            Ext.Assert.Dom.notMatchesText);
  this.Then(/^I should see (\d+) "([^"]*)" elements?$/,                         Ext.Assert.Dom.elementsCount);
  this.Then(/^I should see "([^"]*)" in the "([^"]*)" element$/,                Ext.Assert.Dom.elementContainsText);
  this.Then(/^I should not see "([^"]*)" in the "([^"]*)" element$/,            Ext.Assert.Dom.elementNotContainsText);
  this.Then(/^I should see an? "([^"]*)" element$/,                             Ext.Assert.Dom.elementVisible);
  this.Then(/^I should not see an? "([^"]*)" element$/,                         Ext.Assert.Dom.elementNotVisible);
  this.Then(/^the "([^"]*)" element should be visible$/,                        Ext.Assert.Dom.elementVisible);
  this.Then(/^the "([^"]*)" element should not be visible$/,                    Ext.Assert.Dom.elementNotVisible);
  this.Then(/^the "([^"]*)" element should exist$/,                             Ext.Assert.Dom.elementExist);
  this.Then(/^the "([^"]*)" element should not exist$/,                         Ext.Assert.Dom.elementNotExist);
}

function assertForm() {
  this.Then(/^the "([^"]*)" current option contain "([^"]*)"$/,                 Ext.Assert.Form.selectContains);
  this.Then(/^the "([^"]*)" field should contain "([^"]*)"$/,                   Ext.Assert.Form.fieldContains);
  this.Then(/^the "([^"]*)" field should not contain "([^"]*)"$/,               Ext.Assert.Form.fieldNotContains);
  this.Then(/^the "([^"]*)" field should be enabled$/,                          Ext.Assert.Form.fieldEnabled);
  this.Then(/^the "([^"]*)" field should be disabled$/,                         Ext.Assert.Form.fieldDisabled);
  this.Then(/^the "([^"]*)" checkbox should be checked$/,                       Ext.Assert.Form.checkboxChecked);
  this.Then(/^the checkbox "([^"]*)" (?:is|should be) checked$/,                Ext.Assert.Form.checkboxChecked);
  this.Then(/^the "([^"]*)" checkbox should not be checked$/,                   Ext.Assert.Form.checkboxNotChecked);
  this.Then(/^the checkbox "([^"]*)" should (?:be unchecked|not be checked)$/,  Ext.Assert.Form.checkboxNotChecked);
  this.Then(/^the checkbox "([^"]*)" is (?:unchecked|not checked)$/,            Ext.Assert.Form.checkboxNotChecked);
}

///////////////////

module.exports.register = function(Mink) {
  utility.call(Mink);
  navigation.call(Mink);
  action.call(Mink);
  form.call(Mink);
  assertUrl.call(Mink);
  assertDom.call(Mink);
  assertForm.call(Mink);
};
