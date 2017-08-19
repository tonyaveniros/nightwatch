/*
	Author: Anthony Beck
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
var data = require("../lib/custom_commands/someTestData");
var conf = require("../conf/nightwatch.json");
// a string in your file versus a string in the base test class.
var pracStr = "";

module.exports = new Test({

	'@disabled': false,

	"Load URL page": function (client) {
	client
		/* open  */
		.url(this.url) /*this is a variable set in the ../lib/base-test-class */
	//	.pause(this.timeout / 5) /* useful to add pauses when debugging to watch what is happening. */


	},
	"Check for input field and click in it": function (client) {
	client	
			
		.useCss().waitForElementPresent("input[value='Enter location ...']", this.timeout)
		.useCss().click("input[value='Enter location ...']")
	},
	
	"Test Search using a value specified in base case": function (client) {
	client
		
		/*this is a variable set in the ../lib/base-test-class try adding your city */
		.useCss().setValue("input[value='Enter location ...']", this.city)
		.pause(2500)
		/* click the button to perform the search */
		.useCss().click("input[value='Go']")
		/* using xpath to fin any element with the text. xpath can be very useful for 
		finding text in a page something css selectors cannot as of this date do */
		.useXpath().assert.containsText("//*[contains(text(),'" + this.city + "')]", this.city)
		.pause(1500)
		.end()
	},



});