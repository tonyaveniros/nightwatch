var fs = require('fs'); // NPM to create a file

module.exports = {
	
	setValuesForElementsUseXpath : function (client, selector, value) {
		// set an empty variable to store the count of elements
		var elementCount;
		// get a collection of all elements that match the passed selector
		client.getEls(selector, function(collection) {
			// set the variable to be that collection's length		
			elementCount = collection.length;	
			// log the count of elements to the terminal
			console.log("There were " + elementCount +  " question types")		
			// loop through that collection of elements and set each field to 1
			for (var i = 1; i <= elementCount; i++){
				// populate those items
				client.useXpath().waitForElementPresent("(//" + selector + " )[" + i + "]", this.timeout)
				client.useXpath().click("(//" + selector + " )[" + i + "]")
				client.useXpath().clearValue("(//" + selector + " )[" + i + "]")
				client.useXpath().setValue("(//" + selector + " )[" + i + "]", value)
			}	
			return;		
		});
	},
	
	randomID : (function(){
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for( var i=0; i < 5; i++ )
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	})(),
	
	saveToFile : function(client, path, data) {
		this.fs = fs;
				
		buffer = new Buffer(data);
// to show that this can be done, but for now, I don't have the solution		
//		console.log("Note: About to update the configuration with test data for " + this.clientVersionsOsBrowser(client).replace(/ /g,'').replace(/\./g,''))
// to show that this can be done, but for now, I don't have the solution	
//		fs.open(path + this.clientVersionsOsBrowser(client).replace(/ /g,'').replace(/\./g,'') + '.js', 'w', function(err, fd) {
		fs.open(path, 'w', function(err, fd) {
			if (err) {
				throw 'error opening file: ' + err;
			}

			fs.write(fd, buffer, 0, buffer.length, null, function(err) {
				if (err) throw 'error writing file: ' + err;
				 return fs.close(fd, function() {
					console.log('File write: ' +  path + ' has been updated.' );
				})
			});
		})
	},

	grade : (function() {
		// set the grade array
		var gradeArr = [ /*"Grade K", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7","Grade 8", */ "High School - Algebra", "High School - Functions", "High School - Geometry", "High School - Number and Quantity", "High School - Statistics and Probability"]; 
		// randomly pick a number within the length of that array
		var pick = Math.floor(Math.random() * gradeArr.length);
		// return the string at that index
		return gradeArr[pick];	
	})(),
	
	getCountOfElementsClickRandom : function (client, classSel){
		// variables
		var count;  // count of found items with that class
		var selectedStd;  // the one that will be clicked
		// nightwatch getElements with the optional callback
		client.getEls(classSel, function(collection) {		
			count = collection.length;
			// randomly select one
			var toClick = Math.floor((Math.random() * count ) + 1 );
			// report how many matches found & which picked
			console.log(" \33[32m✓\33[m The count of those elements is: " + count + ". Randomly picked the " + toClick + "nth one.");
			
			client.useCss().getText(classSel+ ":nth-of-type(" + toClick + ")", function(innerText) {
				selectedStd = innerText.value;
				console.log(" \33[32m✓\33[m The text of the element clicked is " + selectedStd)
			})
			//client.waitForElementVisible(classSel + ":nth-of-type(" + toClick + ")", this.timeout)
			client.scrollToEl(classSel + ":nth-of-type(" + toClick + ")")
			client.click(classSel + ":nth-of-type(" + toClick + ")")
			return count;
		});
		return true;
	},
	
	clientVersionsOsBrowser : function (client) {
		return client.capabilities.browserName.toUpperCase() + ' ' + client.capabilities.version  + ' ' + client.capabilities.platform + ' ';
	},
	
	clientBrowser : function (client) {
		return client.capabilities.browserName.toUpperCase();
	},
	
	clientOs : function (client) {
		return client.capabilities.platform;
	},
	
	clientVersion : function (client) {
		return client.capabilities.version;
	},
	
	clientVersionSubStr : function (client) {
		var ver = client.capabilities.version;
		return ver.substring(0, 2);
	},
};

