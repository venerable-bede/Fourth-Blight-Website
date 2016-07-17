angular.module('FourthBlightApp')
.service('SrdSvc', function ($http) {
  var svc = this
  svc.getSpells = function (name) {
    return $http.get('/api/spells/' + name)
    .then(function (response) {
      return response.data
    })
  }

  svc.getLocations = function (name) {
    return $http.get('/api/locations/' + name)
    .then(function (response) {
      return response.data
    })
  }

  svc.getMonsters = function (name) {
    return $http.get('/api/monsters/' + name)
    .then(function (response) {
      return response.data
    })
  }
})
