angular.module('starterapp').directive('appendDot', function() {
	return {
		restrict: 'A',
		link: function($scope, element) {
			element.on('click', function() {
				element.append('.');
			});
		}
	};
});