(function(){
	'use strict';
	
	var loginControllerFunction = function($scope,$rootScope,$state,commonService){
		
	var todayDateFun =	function(){
			var today = new Date();
		    var dd = today.getDate();
		    var mm = today.getMonth()+1; //January is 0!

		    var yyyy = today.getFullYear();
		    if(dd<10){
		        dd='0'+dd;
		    } 
		    if(mm<10){
		        mm='0'+mm;
		    } 
		    var today = dd+'/'+mm+'/'+yyyy;
		    return today;
		};		
			
		$scope.todayDate = todayDateFun();
		
		$scope.formData = {
				lastName 		: '',
				firstName		: '',
				mobileCtrCode	: '',
				mobileNumber	: '',
				email	 		: '',
				newPwd			: '',
				dob				: ''
					
				
		};
		
		$scope.registerUser = function(registrationForm){
			
			commonService.registerUser($scope.formData);
			
		};
		
		function init(){		
			
			
		}
		
		init();
		
	};

	angular.module('fbApp').controller('loginController',['$scope','$rootScope','$state','commonService',loginControllerFunction]);
})();

