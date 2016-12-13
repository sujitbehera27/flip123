myApp.factory('serviceListService', function ($rootScope, $http) {
	console.log("into serviceListService")
	return {
		getServiceListData: function () {
			console.log("into servicelist factory");
			return $http.get('data/serviceList.json')
				.then(function (result) {
					return result.data;
				});
		}
	}
});
