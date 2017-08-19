/*
  Author: Anthony Beck - Aveniros, LLC.
	Project: Cross Browser Automation Testing
	Client: HopSkipDrive
	Automated Testing: Magellan / Nightwatch.js Project
	
	USE: Automated cross-browser testing using 
	Magellan with Test Armada. 
	
******************************************************************************************
INSTRUCTIONS FOR SETUP:
******************************************************************************************
  Open Terminal and navigate to your test folder and install Magellan by simply 
  entering the following command line args: 

  git clone https://github.com/TestArmada/boilerplate.git   (press return and wait)

  cd boilerplate                                            (press return and wait)

  npm install                                               (press return and wait)
    
  npm install slack-node									(press return and wait)
  
  npm install fs											(press return and wait)

  Take the attached file login_HSD.js and put it in 
  boilerplate/tests folder. Delete the other two files 
  there (github.js, walmart-book.js).

  Then open /lib/example-base-test-class.js and change line 33 to read:   
 
      return "http://stage.hopskipdev.com/login/#/";
      
  Sanity check: in the terminal type or paste the following, press return, and wait 
  for the prompt:
  
    ./node_modules/.bin/magellan --serial --browser=chrome,firefox

  You will see both browsers open up and resize and will have a browser-based experience 
  of the test cases. You should see some nice green checkmarks indicating tests that have 
  successfully completed and a message like: 
              ============= Suite Complete =============

              Status: PASSED
              Runtime: 23.2s
              Total tests: 2
              Successful: 2 / 2
              Performance metrics reporter has no metrics to show.

  NEXT NEED: Setup for Sauce Labs
  Sign up for an account at https://saucelabs.com/signup/trial
  
  Once you have an account, login and when the dashboard loads click Docs. 
  Under Tutorials click "More..." 
  Click Node.js.

  You should see something like:

  export SAUCE_USERNAME=YourUserName
  export SAUCE_ACCESS_KEY=7211190k-0cke-9116-bk29-k7a99baf95k9
 
  You will need those in a moment. Copy them.
  
  In the terminal past those two lines and press return.
  
  Then find the following file: 

  ~/boilerplate/conf/nightwatch.json

  open that file for editing. At the bottom you will need to set the json values for the 
  keys "username”, access_key (see above).
  
  Then in the terminal navigate to the boilerplate directory. Copy & paste this set of 
  command line arguments and press return:
  ./node_modules/.bin/magellan --sauce --browser=chrome_46_OS_X_10_10_Desktop,chrome_46_Windows_2012_R2_Desktop,firefox_41_OS_X_10_9_Desktop,firefox_41_Windows_2012_R2_Desktop,IE_10_Windows_2012_Desktop,IE_11_Windows_2012_R2_Desktop,safari_9_OS_X_10_11_Desktop,ipad_9_1_iOS_iPad_Simulator   

  After about three minutes you will have output indicating the results of testing 
  HopSkipDrive login for Chrome, iPad iOS 9, Firefox on Mac, Win IE 11 and Safari 9. 

  For a longer, serial run that is more verbose, try it again with an additional 
  command line argument --serial, like this (copy & paste the line below)

   ./node_modules/.bin/magellan --serial --sauce --browser=chrome_46_OS_X_10_10_Desktop,chrome_46_Windows_2012_R2_Desktop,firefox_41_OS_X_10_9_Desktop,firefox_41_Windows_2012_R2_Desktop,IE_10_Windows_2012_Desktop,IE_11_Windows_2012_R2_Desktop,safari_9_OS_X_10_11_Desktop,ipad_9_1_iOS_iPad_Simulator   

  Finally, run it with these args:

  ./node_modules/.bin/magellan --serial --browser=chrome,firefox

  You will see browsers open up and resize and will generally have a visual experience 
  of the test cases like you did above. 
  
******************************************************************************************  
INSTRUCTIONS FOR USE:
****************************************************************************************** 

  	

 
  SOME OF THE MORE USEFUL (optional) COMMAND LINE ARGS:
    
  Use the --serial argument (this results in the test execution being serialized and with
  more verbose test experience)  to review the errors that have been returned 
  during a run. It also takes much longer to run as it wait for tests to complete, so this 
  is best run locally (without --sauce). 
  
  Example: 
  
  ./node_modules/.bin/magellan --serial --browser=firefox
  
  add the --sauce argument once your test cases work for browsers that exist on 
  your local machine, and add --profile=SMOKE for a two browser minimum test, or 
  --profile=FULL to test with 31 different browsers and operating systems available via 
  saucelabs. 
  
  Example:
  
  ./node_modules/.bin/magellan --sauce --profile=FULL
  
  You can tap into the (currently) 760 browsers supported by Sauce 
  Labs. Go ahead an paste this into the terminal:
  
  ./node_modules/.bin/magellan --serial --list_browsers
  
  For each device/browser you want to test you just add the listing in the 
  Copy-Paste Command-Line Option column as comma separated values after --browser=
  when executing the script. Or to call it as part of a --profile by editing the
  magellan.json file.
  
  
  OPTIONAL: try out profiles. To do this find the following file: 
  
  ~/boilerplate/magellan.json
  
  delete it and replace it with the version of the file I have provided.
  
  Here are some examples of command like arguments for starting the tests using profiles:
  
 ./node_modules/.bin/magellan --browsers=chrome,firefox

 ./node_modules/.bin/magellan --profile=my_local_browsers

 ./node_modules/.bin/magellan --serial --profile=my_local_browsers

 ./node_modules/.bin/magellan --serial --sauce --profile=smokeTest

 ./node_modules/.bin/magellan --sauce --profile=smokeTest

 ./node_modules/.bin/magellan —-serial --sauce --profile=tier_1_browsers_remote_SauceLabs

 ./node_modules/.bin/magellan --sauce --profile=tier_1_browsers_remote_SauceLabs
 
  
  
  BREAKING IT DOWN:
  
  Using nightwatch without the --sauce but with --serial is a great way to get started. 
  Work on your script until you have validated the things you want to check and when you
  are confident that all tests that should pass, do, run it with sauce labs and the major 
  browsers you want to test. Once you are confident that the major browsers are covered
  you can run it without --serial to reduce run time (useful on Sauce Labs which will 
  eventually cost money).
  
  TROUBLE SHOOTING:
  FIRST: Make sure you have everything installed by going here...
  https://github.com/TestArmada/boilerplate-nightwatch
  
  If you get errors for firefox indication the following:
  
  Error retrieving a new session from the selenium server
	{ state: 'unhandled error',
	 sessionId: null,
	 hCode: [MEANINGLESS DIGITS HERE],
	 value: 
	  { localizedMessage: 'Unable to connect to host localhost on port 7055 after 45000 ms. Firefox console output
  
  
  To install a new version of the selenium standalone server

	1.) open
	http://www.seleniumhq.org/download/
	click on Download version 2.[some version number].[some point release]
	

	2.) It should download the selenium server jar to a local folder
	open it up in the finder 
	you should now have a new selenium standalone server jar 
	so copy it / cut it.

	3.) 
	open up your HopSkipDrive boilerplate folder
	open up conf/
	open nightwatch.json
	you should find some json arrays there, find your selenium server path

	4.)
	navigate to that path
	paste your new jar in that location.
	delete the old jar
	
	5/) 
	modify that line in nightwatch.json so that the selenium server path has the new 
	jar file name.

	you should be able to then run your scripts using that 
	new browser that selenium standalone server had to be modified in order to accommodate.
  
  	DISABLING TESTS
	To prevent a test module from running, simply set the disabled attribute in that module to true, like so:
	
	module.exports = new Test({

		'@disabled': true,  // This will prevent the test module from running.
		
		"BEGIN the Golden Path" : function(client){
		client
	
		},

	});
	
	In some cases you might want to disable all but one test. First you will need to 
	disable them all, and editing every single test script (as described above) is tedious. 
	On a mac you can modify all the files and then just manual edit the one your want to 
	run. 
	
	BE VERY CAREFUL - READ FULL INSTRUCTIONS - To disable them all, navigate to the tests directory 
	(sometimes called the 'testcases') in the terminal enter the following line then enter.
	
	find . -name '*.js' -print0 | xargs -0 sed -i "" "s/'@disabled': false,/'@disabled': true,/g"
	
	Toggling them all back to on is as simple as this:
	
	find . -name '*.js' -print0 | xargs -0 sed -i "" "s/'@disabled': true,/'@disabled': false,/g"
	
	IF YOU DID THIS OUTSIDE THE 'tests' or 'testcases' directory, congratulations, you may 
	have hosed Testarmada. Go back to the top and reinstall Testarmada and copy over your 
	tests/cases lib and conf files.
	
	-- END OF INSTRUCTIONS --
	
	
	

*/