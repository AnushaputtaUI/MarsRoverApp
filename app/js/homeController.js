(function () {
    var app = angular.module("MarsRoverApp");

    var homeController = function ($scope, $http) {
		var apiKey = 'aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';
		var curiosityApi = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=';
		var opportunityApi = 'https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=';
		
		$scope.selectedCamera = "Navigation Camera";
		$scope.selectedOpportunityCamera = "Panoramic Camera";
		$scope.imageOfTheDayShow = true;
		$scope.opportunityData = [{"id":141044,"sol":1000,"camera":{"id":16,"name":"NAVCAM","rover_id":6,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/1/n/1000/1N216958451EFF76ZFP1950L0M1-BR.JPG","earth_date":"2006-11-17","rover":{"id":6,"name":"Opportunity","landing_date":"2004-01-25","launch_date":"2003-07-07","status":"active","max_sol":4554,"max_date":"2016-11-16","total_photos":184836,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":141045,"sol":1000,"camera":{"id":16,"name":"NAVCAM","rover_id":6,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/1/n/1000/1N216958451EFF76ZFP1950R0M1-BR.JPG","earth_date":"2006-11-17","rover":{"id":6,"name":"Opportunity","landing_date":"2004-01-25","launch_date":"2003-07-07","status":"active","max_sol":4554,"max_date":"2016-11-16","total_photos":184836,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":217448,"sol":1000,"camera":{"id":17,"name":"PANCAM","rover_id":6,"full_name":"Panoramic Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/1/p/1000/1P216957338ESF76ZFP2600L8M1-BR.JPG","earth_date":"2006-11-17","rover":{"id":6,"name":"Opportunity","landing_date":"2004-01-25","launch_date":"2003-07-07","status":"active","max_sol":4554,"max_date":"2016-11-16","total_photos":184836,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":217449,"sol":1000,"camera":{"id":17,"name":"PANCAM","rover_id":6,"full_name":"Panoramic Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/1/p/1000/1P216957338ESF76ZFP2600R8M1-BR.JPG","earth_date":"2006-11-17","rover":{"id":6,"name":"Opportunity","landing_date":"2004-01-25","launch_date":"2003-07-07","status":"active","max_sol":4554,"max_date":"2016-11-16","total_photos":184836,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":217450,"sol":1000,"camera":{"id":17,"name":"PANCAM","rover_id":6,"full_name":"Panoramic Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/1/p/1000/1P216957358ESF76ZFP2619L8M1-BR.JPG","earth_date":"2006-11-17","rover":{"id":6,"name":"Opportunity","landing_date":"2004-01-25","launch_date":"2003-07-07","status":"active","max_sol":4554,"max_date":"2016-11-16","total_photos":184836,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":217451,"sol":1000,"camera":{"id":17,"name":"PANCAM","rover_id":6,"full_name":"Panoramic Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/1/p/1000/1P216957358ESF76ZFP2619R8M1-BR.JPG","earth_date":"2006-11-17","rover":{"id":6,"name":"Opportunity","landing_date":"2004-01-25","launch_date":"2003-07-07","status":"active","max_sol":4554,"max_date":"2016-11-16","total_photos":184836,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}}];
		
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
			$scope.getImageOfTheDay();
            //$scope.getOpportunityData();
        }
		
		var onGetOpportunityData = function (data) {
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
			//$scope.imageOfTheDay = 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG';
		};
		
		$scope.getGalleryData = function() {
			$scope.imageOfTheDayShow = false;
			$scope.galleryDataShow = true;
		};
		
		$scope.testCameraChanged = function() {
			var selectedCamera = $scope.selectedOpportunityCamera;
			console.log('AAAAAA selectedCamera is: '+selectedCamera);
		};
		
    };

    app.controller("homeController", ["$scope", "$http", homeController]);
})();