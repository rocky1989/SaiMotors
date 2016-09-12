(function(){
	'use strict';
	angular.module('fbApp').directive('jDatePicker', function() {
   return function(scope, element, attrs) {
       element.datepicker({
           inline: true,
           dateFormat: 'dd.mm.yyyy',
           onSelect: function(dateText) {
               var modelPath = $(this).attr('ng-model');
               putObject(modelPath, scope, dateText);
               scope.$apply();
           }
       });
   };
});
	
})();