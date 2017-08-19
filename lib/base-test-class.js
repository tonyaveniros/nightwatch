/*
 * This is an the "base class" from which test inherit.
 * See /tests for examples of tests which inherit from this base class.
 * If you need a common setup/teardown (eg: for resetting the state of
 * a mock server, for example), put it in before() and after() in the base
 * class below. All inheritors will get this functionality.
 */

//var Base = require("testarmada-magellan-nightwatch/lib/base-test-class");
var Base = require("testarmada-nightwatch-extra/lib/base-test-class");
var util = require("util");
//var url = require("url");
//var getDrydock = require("./../drydock/launch");
//var argv = require("yargs").argv;
var url = "http://www.weather.gov/"; /* the global variable for the url*/
var timeout = 5000;
var data = require("./../lib/custom_commands/someTestData");
var selectors = require("../lib/pages/selectors.js");
var helperFunctions = require("./../lib/custom_commands/helperFunctions.js");
var studentCreated = require("../conf/studentCreated.js");


var dateOfTestExecuted = new Date();

var TuttiAutomatedTestingBaseClass = function (steps) {
  // call super-constructor
  Base.call(this, steps);
};

util.inherits(TuttiAutomatedTestingBaseClass, Base);

TuttiAutomatedTestingBaseClass.prototype = {
  before: function (client) {
  	this.timeout = timeout;
  	this.url = url; /* note that the URL is declared as global, on line 15
  	but needs to be added to the Base Class Prototype*/
	this.city = "Los Angeles"; // try adding your city here
	this.vacation = "Paris, France - April 2006";
	this.selectors = selectors.assessmentTab;
	this.helperFunctions = helperFunctions;

	
	/*
    this.client.drydock =
      getDrydock(
        url.parse(client.launchUrl).hostname,
        argv.mocking_port);

    this.client.drydock.start(function () {
      // call super-after
      Base.prototype.before.call(this, client);
    });
    */
  },

  after: function (client, callback) {
   // var self = this;
   // this.client.drydock.stop(function () {
      // call super-after
      Base.prototype.after.call(this, client, callback);
   // });
  },

  // Note: This method will not be mistaken by nightwatch for a step because
  // it is not enumerable (since it's on the prototype)
  getSiteURL: function () {
   // return this.client.launchUrl + ":" + argv.mocking_port;
   return url;
}
};

module.exports = TuttiAutomatedTestingBaseClass;

