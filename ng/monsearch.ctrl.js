angular.module('FourthBlightApp')
.controller('MonSearchCtrl', function ($scope, SrdSvc) {
	document.getElementById("monster-text").focus();
	document.getElementById("spell-btn").classList.remove('selected-search');
	document.getElementById("loc-btn").classList.remove('selected-search');
	document.getElementById("monst-btn").classList.add('selected-search');

	$scope.monsterResults = {};

	$scope.searchMonsters = function(search){
		if(search.length >= 1){
		  	SrdSvc.getMonsters(search).then(function(monster){
		  		$scope.monsterResults = monster;
		  	})
		}
	}
})
