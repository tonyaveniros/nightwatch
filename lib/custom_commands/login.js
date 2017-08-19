exports.command = function(username, password, callback) {   
	var self = this; 
    this
		.waitForElementPresent("body > div > div > div.avn-login-body > form > div > div:nth-child(1) > div", this.timeout)
	//	.assert.containsText("body > div > div > div.avn-login-header", "WalchConnect")
		.assert.containsText("label[id='idUsernameLabel']","Username")
		.assert.containsText("label[id='idPasswordLabel']","Password")
		.assert.containsText("body > div > div > div.avn-login-body > form > div > div:nth-child(2) > div > div:nth-child(4) > button","Login")
//		.assert.containsText("#form_data > div > div.loginFooter > div","Copyright © 2017")
//		.assert.containsText("#form_data > div > div.loginFooter > div > span","Walch Education")
//		.assert.containsText("#form_data > div > div.loginFooter > div"," • All rights reserved")
		.pause(500)
		// set the username
		.setElValue("#idUsername", username)
		// set the pasword
		.setElValue("#idPassword", password)
		// Login button
		.click("body > div > div > div.avn-login-body > form > div > div:nth-child(2) > div > div:nth-child(4) > button")
    
    if( typeof callback === "function"){
        callback.call(self);
    }
    return this; // allows the command to be chained.
};
