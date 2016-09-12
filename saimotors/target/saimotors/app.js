(function(){
	var app = angular.module('smApp', ['ui.router'])
	
	.constant('smAppConstants',{
		context:'/',
		currentUser:''
	})
	
	
	.config(function($stateProvider, $urlRouterProvider)
			{
		
		$urlRouterProvider.otherwise('/home');
		
				$stateProvider
					.state('home', {
						url: '/home',
						templateUrl:'app/partials/home.html',
						controller:'homeController'
								
					});
				
			})
	
	.run(function($rootScope,smAppConstants){
		$rootScope.smAppConstants = smAppConstants;
		
	});



})();
