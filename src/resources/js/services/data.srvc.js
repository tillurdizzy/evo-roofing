'use strict';

app.service('evoDb',['$http','$q',function eventQueries($http,$q){
	var self = this;
	self.requestResult = [];
	self.ME = "ev0DB: ";
	
	self.queryRequests = function(){
		//console.log(self.ME + "event= " + self.eventView);
		self.requestResult = [];
		var deferred = $q.defer();
		$http({method: 'POST', url: '../resources/php/getRequest.php'}).
		success(function(data, status) {
			//console.log("SUCCESS length = " + data.length + " : " + status);
     		self.eventsResult = data;
     		deferred.resolve(data);
	    }).
		error(function(data, status, headers, config) {
			//console.log("ERROR " + data + status);
	      	self.eventsResult = data;
			deferred.reject(data);
	    });

	    return deferred.promise; //return the data
	};
	
	
	var sortByDay = function(data){
		var sortedList = [];
		for(var i=0; i < data.length; i++){
			var thisItem = data[i].dayOfWeek;
			data[i].dayVal = returnDayVal(thisItem);
		};
		
		i = 0;
		sortedList = _.sortBy(data, function (i) { return [i.dayVal,i.sortVal].join("_");});
		
		return sortedList;
	};

	self.sendEmail = function(dataObj){
		$http({method: 'POST', url: '../resources/php/sendEmail.php',data:dataObj});
	}
	
	
	self.insertRequest = function(dataObj){
		var deferred = $q.defer();
		$http({method: 'POST', url: '../resources/php/putRequest.php',data:dataObj}).
		success(function(data, status, headers, config) {
     		deferred.resolve(data);
	    }).
	    error(function(data, status, headers, config) {
			deferred.reject(data);
	    });
	    return deferred.promise; //return the data
	};

	self.queryLogIn = function(dataObj){
		var deferred = $q.defer();

		$http({method: 'POST', url: 'resources/php/getManager.php',data:dataObj}).
		success(function(data, status) {
			//console.log("SUCCESS length = " + data.length + " : " + status);
     		self.requestResult = data;
     		deferred.resolve(data);
	    }).
		error(function(data, status, headers, config) {
			//console.log("ERROR " + data + status);
	      	self.requestResult = data;
			deferred.reject(data);
	    });

	    return deferred.promise; //return the data
	}

	self.validateLogInUser = function(dataObj){
		var returnObj = new Object();
		var pinOnFly = self.createPinNum(dataObj.username);
		if(dataObj.pin === pinOnFly){
			returnObj.login = true;
			var firstFour = dataObj.username.substr(0,4);
			var fourToLower = firstFour.toLowerCase();
			switch(fourToLower){
				case "roya":returnObj.userState = "bellaire";break;
				case "deal":returnObj.userState = "dealco";break;
				case "sove":returnObj.userState = "sovereign";break;
				case "libe":returnObj.userState = "liberty";break;
				case "town":returnObj.userState = "townpark";break;
				case "casa":returnObj.userState = "casagrande";break;
				case "sove":returnObj.userState = "sovereign";break;
			}
			
			return returnObj;
		}else{
			returnObj.login = false;
			return returnObj;
		}
	}

	self.createPinNum = function(user){
		var PIN = "";
		var userLower = user.toLowerCase();
		var alphas = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

		for (var i = 0; i < 4; i++) {
			var ndx = alphas.indexOf(userLower.charAt(i));
			var ndxPlus = ndx * (i + 27);
			var pinPart = ndxPlus.toString().charAt(1);
			PIN = PIN + pinPart;
		};
		return PIN;
	}

	return self;
}]);