angular.module('FourthBlightApp')
.controller('LocSearchCtrl', function ($scope, SrdSvc) {
	document.getElementById("location-text").focus();
	document.getElementById("spell-btn").classList.remove('selected-search');
	document.getElementById("monst-btn").classList.remove('selected-search');
	document.getElementById("loc-btn").classList.add('selected-search');

	$scope.locationResults = {};

	$scope.searchLocations = function(search){
		if(search.length >= 1){
		  	SrdSvc.getLocations(search).then(function(location){
		  		$scope.locationResults = location;
		  	})
		}
	}
})
