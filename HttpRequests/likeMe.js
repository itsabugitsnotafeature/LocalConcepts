var request = require('request');
var Q = require("q");



/*
 *  Function : Makes GET request for user defined URL
 */
 var makeGet = function(getUrl) {
 	
 	var deferred = Q.defer();

 	printLog("Making Get Request for URL ");
 	printLog("URL :: " + getUrl);

 	request(getUrl, function(error, response, body) {
 		if (!error && response.statusCode == 200) {
 			deferred.resolve(body);
 		}
 		else {
 			deferred.resolve("ERROR Making Get Call to URL :" + getUrl);
 		}
 	})
 	return deferred.promise;
 };


/*
 *  Prints Console Log.
 */
 var printLog = function(logToPrint) {
 	console.log("\n" + logToPrint);
 };


/**
 * 
 * Main Method
 */
 function likeMe() {

 	var url = "http://www.google.com",
 	urlbad = "http://www.1234567.com/";

 	var getter = makeGet(url);
 	
 	printLog("ok I have started ");
 	
 	getter
 	.then(function(resp){
 		printLog("\n\n");
 		printLog(" Here is the response received :: " + resp);
 	})
 	.then (function(){
 		printLog(" \n\n   THEE ENDDDDDD ");  
 	})

 };





 likeMe();