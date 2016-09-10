(function(){
	'use strict';
	
	var commonControllerFunction = function($scope,$rootScope,$state,$timeout,fbAppConstants,commonService){
				
		$rootScope.template = {
			header 	: {url : 'app/partials/welcomeHeader.html'},
			footer			: {url : 'app/partials/footer.html'}
		};
		
		
		function init(){

			if(fbAppConstants.currentUser == undefined || fbAppConstants.currentUser == null || fbAppConstants.currentUser == ''){
				 commonService.getCurrentUser()
				.then(function(data){
					
					fbAppConstants.currentUser = data.user;
					
				});
			}
  
		}
		
		init();
		
	};

	angular.module('fbApp').controller('commonController',['$scope','$rootScope','$state','$timeout','fbAppConstants','commonService',commonControllerFunction]);
})();

