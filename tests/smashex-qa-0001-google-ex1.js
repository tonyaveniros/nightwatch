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


module.exports = new Test({

	'@disabled': false,

	"Load Google page": function (client) {
	client
		.url("http://www.google.com")

	},
	"Check for input field at google": function (client) {
	client
		// by default, nightwatch uses css to find elements
		.waitForElementPresent('input', 2000)
		// but you can use xpath
		.useXpath().waitForElementPresent('//input', 2000)
		// once you have used xpath, you need to tell it to use css again
		.useCss().waitForElementPresent('input', 2000)
		/*
			First, note that in the console you see the message in green:
			' Warn: WaitForElement found 8 elements for selector "input". Only the first one will be checked.'

			 Nightwatch gives you some freedom to be ambiguous and vague. 
			 Later on we'll show you how that can be bad.
		*/
		
		/* note that you can use milliseconds like 2000 or you can use this.timeout
		and set the timeout value in the base-test-class */
		.useXpath().waitForElementPresent('(//input)[2]', this.timeout)
	},
	
	"Search using google": function (client) {
	client
		// because Google tends to change rapidly, this may not work by the time you use this script
		.useCss().setValue("input#lst-ib", "nightwatch.js")
		.useCss().click("input[value='Google Search']")
		.pause(5000)
		.url("http://www.google.com")
		// you always have other options for selectors google css best practices
		.useCss().setValue("input[title='Search']", "css selectors best practices") 
		.useCss().click("input[value='Google Search']")
		.pause(5000)
		.url("http://www.google.com")
		/* */
		.useCss().setValue("input[title='Search']", "xpath rosetta stone") 
		.useCss().click("input[value='Google Search']")
		.pause(5000)
		.end()
	},



});
