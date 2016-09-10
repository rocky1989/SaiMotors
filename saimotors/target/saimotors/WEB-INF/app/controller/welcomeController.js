(function(){
	
	'use strict';
	
	var welcomeControllerFunction = function($scope,$rootScope,$state,fbAppConstants,commonService){
		
		
		
		function init(){
			
			
			
			$rootScope.template.header.url = 'app/partials/welcomeHeader.html';	

			
			$state.go('welcome');  
		}
		
		init();
		
	};

	angular.module('fbApp').controller('welcomeController',['$scope','$rootScope','$state','fbAppConstants','commonService',welcomeControllerFunction]);
})();

