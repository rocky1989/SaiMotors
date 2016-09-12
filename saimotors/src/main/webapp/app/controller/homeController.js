(function(){
	'use strict';
	
	var homeControllerFunction = function($scope,$rootScope,$state,$timeout,smAppConstants){
				
		$rootScope.template = {
			header 	: {url : 'app/partials/header.html'},
			footer			: {url : 'app/partials/footer.html'}
		};
		
		
		function init(){
			$state.go('home');
		}
		
		init();
		
	};

	angular.module('smApp').controller('homeController',['$scope','$rootScope','$state','$timeout','smAppConstants',homeControllerFunction]);
})();

