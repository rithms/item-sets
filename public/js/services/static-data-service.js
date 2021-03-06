angular.module('ItemSetApp')
.factory('StaticData', ['$http', function StaticDataFactory($http) {

	return {
		getChampions: function() {
			return $http.get('/api/champions/', {cache: true});
		},
		getItems: function() {
			return $http.get('/api/items/', {cache: true});
		},
		getSpells: function() {
			return $http.get('/api/spells/', {cache: true});
		}
	};

		$scope.champions = {};
		$scope.items = {};
		$scope.spells ={};

		$http.get('/api/champions/').success(function(data) {
				for(var i = 0; i < data.length; i++) {
					$scope.champions[data[i].id] = data[i];
				}
			});

		$http.get('/api/items/').success(function(data) {
				for(var i = 0; i < data.length; i++) {
					$scope.items[data[i].id] = data[i];
				}
				$scope.items[0] = {
					id: 0,
					name: "No Item",
					image: "0.png",
					};
			});

		$http.get('/api/spells/').success(function(data) {
				for(var i = 0; i < data.length; i++) {
					$scope.spells[data[i].id] = data[i];
				}
			});

	}]);