myApp.factory('flipListService', function ($rootScope, $http,$base64) {
	return {
		getFlipListData: function () {
			console.log("into factory");
			console.log("https://simplyrets:simplyrets@api.simplyrets.com/properties?limit=500&lastId=0")
			var auth = $base64.encode("simplyrets:simplyrets")
			var url = "https://api.simplyrets.com/properties?limit=500&lastId=0"
			headers = {"Authorization": "Basic " + auth};
			return $http.get(url, {headers: headers})
				.then(function (result) {
					return result.data;
				});
		},
		
		getNewsOrEvetsData: function () {
			return $http.get('data/newsOrEvent.json')
				.then(function (result) {
					return result.data;
				});
		},
		
		getOverallStatsData: function () {
			return $http.get('data/overallStats.json')
				.then(function (result) {
					return result.data;
				});
		}
	}
});
