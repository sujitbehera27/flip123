myApp.controller('serviceListController',['$scope', '$location', '$filter','serviceListService', function ($scope, $location, $filter,serviceListService) {
    var sc = this;
	function getServiceList () {
    	console.log("into serviceListController")
    	serviceListService.getServiceListData().then(function(response){
    		console.log(response)
    		sc.serviceListObject = response
    		console.log(sc.serviceListObject)
    	})
    }
    getServiceList()
}]);