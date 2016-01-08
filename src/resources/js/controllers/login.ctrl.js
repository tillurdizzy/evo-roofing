'use strict';
app.controller('LoginCtrl',['$scope','$state','$element','evoDb',function ($scope,$state,$element,evoDb) {

	var DB = evoDb;
	$scope._username="";
    $scope._pin="";

    $scope.submissionInvalid = false;// form is filled out correctly
    $scope.requestSuccess=false;// database query; starts out false set to true on successful query
    $scope.loginSuccess = true;// user/pword match; starts out true, set false if user entry does not match

    $element.bind("keydown keypress", function (event) {
        console.log('keypress', event, event.which);
        if(event.which === 38) { // up
            $scope.submitLoginForm();
        } else if (event.which === 40) { // down
        } else {
            return;
        }
        event.preventDefault();
    });

    $scope.submitLoginForm = function(){
    	$scope.loginSuccess = true;
        $scope.requestSuccess=false;
        if(this.loginForm.$valid){
            $scope.submissionInvalid = false;
            var dataObj = new Object();
            dataObj.username = $scope._username;
            dataObj.pin = $scope._pin;

            var result = DB.validateLogInUser(dataObj);
                if(result.login==true){
                    $scope.loginSuccess=true;
                    $scope.clearForm();
					$state.transitionTo(result.userState);
                }else{
                	$scope.loginSuccess = false;// no match for user / password  
                };
                    
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