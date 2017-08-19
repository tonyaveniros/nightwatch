/*
	Author: Anthony Beck - Aveniros, LLC.
	Project: Smashing
	Client: Smashing

	USE: A proof of concept to demonstrate the ability to do cross-browser testing using 
	Magellan with Test Armada.

	SOME OF THE MORE USEFUL (optional) COMMAND LINE ARGS:

	toggling the --serial argument results int the test execution being serialized and with
	more verbose test experience where you can review the errors that have been returned 
	during a run. It also take much longer to run as it wait for tests to complete.

	adding the --sauce argument once your test cases work for browsers that exist on 
	your local machine, you can tap into the  (currently) 760 browsers supported by Sauce 
	Labs. Go ahead an paste this into the terminal & hit return:

	./node_modules/.bin/magellan --serial --list_browsers

	For each device/browser you want to test you just add the listing in the 
	Copy-Paste Command-Line Option column as comma separated values after --browser=
	when executing the script. NOTE: when running without --sauce you can just use 
	--browser=chrome or --browser=chrome,firefox 

	BREAKING IT DOWN:

	Using nightwatch without the --sauce but with --serial is a great way to get started. 
	Work on your script until you have validated the things you want to check and when you
	are confident that all tests that should pass, do, run it with sauce labs and the major 
	browsers you want to test. Once you are confident that the makor browsers are covered
	you can run it without --serial to reduce run time (useful on Sauce Labs which will 
	eventually cost money).
	
	Still have to work out the appium part for mobile testing...
	
	./node_modules/.bin/magellan --serial --sauce --browser=chrome_46_OS_X_10_10_Desktop,chrome_46_Windows_2012_R2_Desktop,firefox_41_OS_X_10_9_Desktop,firefox_41_Windows_2012_R2_Desktop,IE_10_Windows_2012_Desktop  ,IE_11_Windows_2012_R2_Desktop,safari_9_OS_X_10_11_Desktop,ipad_9_1_iOS_iPad_Simulator   


*/
var Test = require("../lib/base-test-class");
var conf = require("../conf/nightwatch.json");
var data = require("../lib/custom_commands/someTestData");

module.exports = new Test({

	'@disabled': true,

	"Load Google page": function (client) {
	client
		.url("http://www.google.com")

	},
	"Go to the Nightwatch documentation": function (client) {
	client
		.url("http://nightwatchjs.org/api")
		.useXpath().waitForElementPresent("//h1[.='API Reference']")
	},
	


});