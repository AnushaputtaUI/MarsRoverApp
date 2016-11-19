(function () {
    var app = angular.module("MarsRoverApp");

    var homeController = function ($scope, $http) {
		var apiKey = 'aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';
		var curiosityApi = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=';
		var opportunityApi = 'https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=';
		
		$scope.selectedCamera = "Navigation Camera";
		$scope.selectedOpportunityCamera = "Panoramic Camera";
		$scope.imageOfTheDayShow = true;
		
		$scope.getCuriosityData = function() {
			$http.get(curiosityApi+apiKey)
            .success(function (data) {
                onGetCuriosityData(data);
            }).catch(function (error) {
                onError(error);
            }).finally(function () {
                $scope.dataLoading = false;
            });
		};
		
		$scope.getOpportunityData = function() {
			$http.get(opportunityApi+apiKey)
            .success(function (data) {
                onGetOpportunityData(data);
            }).catch(function (error) {
                onError(error);
            });
		};
			
		var onGetCuriosityData = function (data) {
            $scope.curiosityData = data.photos;
            $scope.getOpportunityData();
        }
		
		var onGetCuriosityData = function (data) {
            $scope.opportunityData = data.photos;
        }
		
		var onError = function (reason) {
            console.log("error reason for failure: " + reason);
        }
		
		$scope.getCuriosityData();
		
		$scope.getImageOfTheDay = function() {
			$scope.imageOfTheDayShow = true;
			$scope.galleryDataShow = false;
			$scope.imageOfTheDay = $scope.curiosityData[0].img_src;
		};
		
		$scope.getGalleryData = function() {
			$scope.imageOfTheDayShow = false;
			$scope.galleryDataShow = true;
		};
		
    };

    app.controller("homeController", ["$scope", "$http", homeController]);
})();