(function(){
	var app = angular.module('smApp', ['ui.router'])
	
	.constant('smAppConstants',{
		context:'/',
		currentUser:''
	})
	
	
	.config(function($stateProvider, $urlRouterProvider)
			{
		
//		$urlRouterProvider.otherwise('/login');
		
				$stateProvider
					.state('login', {
						url: '/login',
						templateUrl:'app/partials/login.html',
						controller:'commonController'
								
					})
					.state('welcome', {
						url: '/welcome',
						templateUrl:'app/partials/test.html',
						controller:'welcomeController'	
					});
				
			})
	
	.run(function($rootScope,smAppConstants){
		$rootScope.smAppConstants = smAppConstants;
		
	});



})();
