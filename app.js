$app.controller('list', function($scope, $http){
	$http.jsonp('https://spreadsheets.google.com/feeds/list/' + app.driveKey + '/od6/public/values?alt=json-in-script&callback=JSON_CALLBACK').success(function(data){
		console.log(data.feed.entry);
	});
});