'use strict';


app.controller('NavCtrl',['$scope','$rootScope','$location', function ($scope,$rootScope,$location) {
	$scope.showNav = true;
    
    $scope.isCurrentPath = function (path) {
    	$scope.sectiontitle = path;
    	if($location.path() == "/bellaire"){
    		$scope.showNav = false;
    	}else{
    		$scope.showNav = true;
    	}
    	
    	return $location.path() == path;
    };
 }]);