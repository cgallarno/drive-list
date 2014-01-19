$app.controller('list', function($scope, $http, $filter){
	var songs = (localStorage.songs)?JSON.parse(localStorage.songs):[];
	$scope.search = 'song';
	$scope.results = [];

	$scope.$watch('search', function(newVal, oldVal){
		if(newVal.length < 3){
			$scope.results = [];
			return;
		}
		console.log('searching');
		$scope.results = $filter('filter')(songs, newVal, false);
	});

	if(songs.length == 0){
		console.log('getting Songs');

		$http.jsonp('https://spreadsheets.google.com/feeds/list/' + app.driveKey + '/od6/public/values?alt=json-in-script&callback=JSON_CALLBACK').success(function(data){
			angular.forEach(data.feed.entry, function(data){
				songs.push({
					artist : data.gsx$_cn6ca.$t,
					title: data.gsx$dancewithmeradioversion.$t
				});
			});
			localStorage.songs = JSON.stringify(songs);
			console.log('Done Getting Songs');
		});
	}
});