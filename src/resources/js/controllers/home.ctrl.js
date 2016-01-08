app.controller('HomeCtrl', ['$scope','$state','evoDb',function ($scope,$state,evoDb) {

    var DB = evoDb;
	$scope._firstname="";
    $scope._lastname="";
    $scope._email="";
    $scope._phone="";
    $scope._state="";
    $scope._zip="";
    $scope.requestSuccess=false;// set true after submit success
    $scope.submissionInvalid = false;
	
	$scope.openDialog = function (templateID) {
		
    };

    $scope.submitRequestForm = function(){
        $scope.requestSuccess=false;
        if(this.requestForm.$valid){
            $scope.submissionInvalid = false;
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
                    $scope.clearForm();
                    //$scope.openDialog('thankyou');
                    // Now send an email
                     DB.sendEmail(dataObj);
                }else{
                    alert("Error submitRequestForm -> homeCtrl");
                };
                    
            },function(error){
                $scope.dataError();
            });
        }else{
            $scope.submissionInvalid = true;// triggers form errors to show 
        };
    };

    $scope.dataError = function(){

    };

    $scope.clearForm = function(){
        $scope._firstname="";
        $scope._lastname="";
        $scope._email="";
        $scope._phone="";
        $scope._state="";
        $scope._zip="";
    };

 }]);