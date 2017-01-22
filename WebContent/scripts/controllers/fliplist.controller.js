myApp.controller('flipListController', function ($scope,flipListService) {
	var fc = this;
	$(function () {
	    $('body').on('click', '.page-scroll a', function (event) {
	        var $anchor = $($(this).attr('href')).offset().top;
	        $('html, body').stop().animate({
	            scrollTop: $anchor
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});
	console.log("flip Controller")
	flipListService.getFlipListData().then(function(response){
		console.log(response)
		fc.flipListObject = response
		console.log(response[0].photos[0])
	})
	flipListService.getNewsOrEvetsData().then(function(response){
		console.log(response)
		fc.newsOrEventsObject = response
	})
	flipListService.getOverallStatsData().then(function(response){
		console.log(response)
		fc.overallStatsObject = response
	})
	fc.show_hide_row = function(row) {
		$("#" + row).toggle();
	}
	fc.addropenSrchDet=function()
    {
		
		//alert($scope.addr);
        //How to retrieve the value of textbox
    }
});
		 