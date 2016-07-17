angular.module('FourthBlightApp')
.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/");
	//
	// Now set up the states
	$stateProvider
		.state('home', {
		  url: "/",
		  templateUrl: "/templates/home.html",
		  controller: "HomeCtrl"
		})
		.state('generators', {
		  url: "/generators",
		  templateUrl: "/templates/generator.html",
		  controller: "GeneratorCtrl"
		})
		.state('faq', {
		  url: "/faq",
		  templateUrl: "/templates/faq.html",
		  controller: "FaqCtrl"
		})
		.state('further', {
		  url: "/further",
		  templateUrl: "/templates/further.html",
		  controller: "FurtherCtrl"
		})
		.state('srd', {
		  url: "/srd",
		  templateUrl: "/templates/srd.html",
		  controller: "SrdCtrl"
		})
		.state('srd.spellSearch', {
		  parent: "srd",
		  templateUrl: "/templates/spellSearch.html",
		  controller: "SpellSearchCtrl"
		})
		.state('srd.locSearch', {
		  parent: "srd",
		  templateUrl: "/templates/locSearch.html",
		  controller: "LocSearchCtrl"
		})
		.state('srd.monSearch', {
		  parent: "srd",
		  templateUrl: "/templates/monSearch.html",
		  controller: "MonSearchCtrl"
		})
		.state('map', {
		  url: "/map",
		  templateUrl: "/templates/map.html",
		  controller: "MapCtrl"
		})
})
