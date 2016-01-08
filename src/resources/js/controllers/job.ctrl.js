'use strict';
app.controller('JobCtrl',['$scope','$state','evoDb',function ($scope,$state,evoDb) {

	var DB = evoDb;
	$scope._username="";
    $scope._job="";
    $scope._pin="";

    $scope.submissionInvalid = false;// form is filled out correctly
    $scope.requestSuccess=false;// database query; starts out false set to true on successful query
    $scope.loginSuccess = true;// user/pword match; starts out true, set false if user entry does not match

    $scope.submitNewJobForm = function(){
    	$scope.loginSuccess = true;
        $scope.requestSuccess=false;
        if(this.newJobForm.$valid){
            $scope.submissionInvalid = false;
            var dataObj = new Object();
            dataObj.username = $scope._username;
            dataObj.job = $scope._job;
            $scope._pin =  DB.createPinNum(dataObj.username);         
        }else{
            $scope.submissionInvalid = true;// triggers form errors to show 
        };
    };

    $scope.dataError = function(){

    };

    $scope.clearForm = function(){
        $scope._username="";
        $scope._pin="";
    };
	

 }]);