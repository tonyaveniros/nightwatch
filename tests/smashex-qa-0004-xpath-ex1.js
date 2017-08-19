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

var pracStr = "An automated test";

module.exports = new Test({

	'@disabled': false,

	"Load Google page": function (client) {
	client
		.url("http://www.tonyavn.com/index.php/home")
	},
	"Use xpath to check for specific list items": function (client) {
	client
		// using css selectors you can easily find most items
		.useCss().assert.containsText("ul > li > a", "Bruges, Belgium - May 2011")
		// but what about when you want the 2nd item?
		.useCss().assert.containsText("ul > li:nth-of-type(2) > a", "Guanajuato, Mexico - October 2003")
		/* that works, too! And xpath, though it is slower can find the same item*/
		.useXpath().assert.containsText("//ul/li[2]/a", "Guanajuato, Mexico - October 2003")
		/* that works, too! But what if you don't know what the order will be, 
		and you just want to know it's there? xpath allows you to match on text!*/
		.useXpath().assert.containsText("//a[contains(text(),'Istanbul, Turkey - December 2011')]", "Istanbul, Turkey - December 2011")
		/* if you have need have an external file of items to feed into your base case...*/
		.useXpath().assert.containsText("//*[contains(text(),'"+this.vacation+"')]", 	this.vacation)
		/* what if you have multiple values and you want an exact match?!*/		
		.useXpath().assert.containsText("//*[.='Seville, Spain 2009']", "Seville, Spain 2009")
		/* or the second match for a specific substring that has to be a particular element? */
		.useXpath().assert.containsText("(//a[contains(text(),'Spain')])[2]", "Seville, Spain 2009")
		/* but if you make it too vague or ambiguous nightwatch will rightfully complain! */
		.useXpath().assert.containsText("//a[contains(text(),'Spain')]", "Spain")
		/* add pauses anywhereyou want more time to visually inspect a page!*/		
		.pause(10000)
		.end()
		
	},
	
	"Feel free to enter your own tests here": function (client) {
	client
		/* what will you test? */
		
	},

});
