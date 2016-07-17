angular.module('FourthBlightApp')
.controller('SpellSearchCtrl', function ($scope, SrdSvc) {

	document.getElementById("spell-text").focus();

	document.getElementById("loc-btn").classList.remove('selected-search');
	document.getElementById("monst-btn").classList.remove('selected-search');
	document.getElementById("spell-btn").classList.add('selected-search');
  
	$scope.spellResults = {};

	$scope.searchSpell = function(search){
		if(search.length >= 3){
		  	SrdSvc.getSpells(search).then(function(spells){
		  		$scope.spellResults = spells;
		  	})
		}
	}
})
