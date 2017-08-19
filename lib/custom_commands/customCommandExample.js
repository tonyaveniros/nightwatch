exports.command = function(username, password, callback) {   
	var self = this; 
    this
 		.waitForElementPresent('body', 2000, "Be sure that the page is loaded")
        .execute('scrollTo(0, 500)')
    
    if( typeof callback === "function"){
        callback.call(self);
    }
    return this; // allows the command to be chained.
};
