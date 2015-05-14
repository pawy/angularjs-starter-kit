angular.module('starterapp').controller('AboutController', function($scope) {
	console.log(faker);
	$scope.companyName = faker.company.companyName();
});