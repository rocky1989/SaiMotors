(function() {
	'use strict';
	
	var commonServiceFunction = function($http,$q,fbAppConstants) {


		this.doPost = function(relativeUrl, data) {
			
			doPost(relativeUrl, data, false);
			
		};
		
		this.doPost = function(relativeUrl) {
			
			doPost(relativeUrl, null, false);
		};
		
		this.doPost = function(relativeUrl, data, iscached) {

			var deffered = $q.defer();

			$http({
				method: 'POST',
				url : (fbAppConstants.context + relativeUrl + '.do'),
				data : data
			}).success(function(data) {

				deffered.resolve(data);

			}).error(function(data, error, status) {

				deffered.reject(error);

			});

			return deffered.promise;

		};
		
		
		this.getCurrentUser = function(){
			
			return this.doPost('/getCurrentUser');
		};
		
		this.registerUser = function(formData){
			
			return this.doPost('/registerUser', formData);
		};

	};

	angular.module('fbApp').service(
			'commonService',
			[ '$http','$q','fbAppConstants',commonServiceFunction ]);
					
})();