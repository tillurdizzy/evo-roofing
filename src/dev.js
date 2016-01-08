'use strict';
var app = angular.module('MyApp', ['ui.router','ngDialog','ngAnimate','slick']);

app.config(function($stateProvider, $urlRouterProvider) {
 	
 	$urlRouterProvider.otherwise("/home");
  	
	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl:"partials/home.html",
			controller:"HomeCtrl"
		})
		
		.state('about', {
			url: "/about",
			templateUrl:"partials/about.html",
			controller:"MainCtrl"
		})
		
		.state('flat', {
			url: "/flat",
			templateUrl:"partials/flat.html",
			controller:"FlatCtrl"
		})

		.state('media', {
			url: "/media",
			templateUrl:"partials/media.html",
			controller:"MainCtrl"
		})

		.state('reviews', {
			url: "/reviews",
			templateUrl:"partials/reviews.html",
			controller:"MainCtrl"
		})
		
		.state('pitched', {
			url: "/pitched",
			templateUrl:"partials/pitched.html",
			controller:"MainCtrl"
		});


});	



app.controller('FlatCtrl', ['$scope','$state','ngDialog',function ($scope,$state,ngDialog) {

	$scope.showmore="";
   
	
	$scope.openDialog = function (templateID) {
		if(templateID!=''){
			 ngDialog.open({ template: "partials/dialogTemplates/" + templateID + ".html",className: 'ngdialog-theme-default',closeByDocument: true});
		}
    };

    $scope.learnmore = function(system){
    	if($scope.showmore==system){
    		$scope.showmore="";
    	}else{
    		$scope.showmore=system;
    	}
    };

 }]);
app.controller('HomeCtrl', ['$scope','$state','ngDialog','evoDb',function ($scope,$state,ngDialog,evoDb) {


    var DB = evoDb;
	$scope._firstname="";
    $scope._lastname="";
    $scope._email="";
    $scope._phone="";
    $scope._state="";
    $scope._zip="";
    $scope.requestSuccess=false;// set true after submit success
   
	
	$scope.openDialog = function (templateID) {
		if(templateID!=''){
			 ngDialog.open({ template: "partials/dialogTemplates/" + templateID + ".html",className: 'ngdialog-theme-default',closeByDocument: true});
		}
    };

    $scope.submitRequestForm = function(isValid){
        $scope.requestSuccess=false;
        if(isValid){
            var dataObj = new Object();
            dataObj.first = $scope._firstname;
            dataObj.last = $scope._lastname;
            dataObj.email = $scope._email;
            dataObj.phone = $scope._phone;
            dataObj.state = $scope._state;
            dataObj.zip = $scope._zip;
            DB.insertRequest(dataObj).then
            (function(result){
                if(result.result==true){
                    $scope.requestSuccess=true;
                    $scope.openDialog('thankyou');
                }else{
                    alert(result.msg);
                };
                    
            },function(error){
                $scope.dataError();
            });
        };
    };

 }]);
app.controller('MainCtrl', ['$scope','$state','ngDialog',function ($scope,$state,ngDialog) {
	
	$scope.showAboutUs = function(){
		$state.transitionTo("about");
	};
	
	$scope.showFlatRoof = function(){
		$state.transitionTo("flat");
	};
	
	$scope.showPitchedRoof = function(){
		$state.transitionTo("pitched");
	};

	$scope.openDialog = function (templateID) {
		if(templateID!=''){
			 ngDialog.open({ template: "partials/dialogTemplates/" + templateID + ".html",className: 'ngdialog-theme-default',closeByDocument: true});
		}
    };

 }]);



app.controller('HeaderCtrl', ['$scope','$state', function ($scope,$state) {

	$scope.showHome = function(){
		$state.transitionTo("home");
	};
	
 }]);
app.directive('alink', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<p style="background-color:{{color}}">Hello World',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        elem.css('background-color', 'white');
        scope.$apply(function() {
          scope.color = "white";
        });
      });
      elem.bind('mouseover', function() {
        elem.css('cursor', 'pointer');
      });
    }
  };
});
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

	return self;
}]);