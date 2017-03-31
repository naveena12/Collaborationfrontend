'use strict';
app.service('Eventservice',['$http','$q','$rootScope', function($http,$q,$rootScope){
	console.log("Eventservice...")
	var Backendurl="http://localhost:8080/collobrationchatt";
	return{
		fetchAllEvents:function(){
			return $http.get(Backendurl+'/events').then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('error while getting  eventdetails');
						return $q.reject(errResponse);
					}
					);
		},
		createEvent:function(event){
			return $http.post(Backendurl+'/ERegister/',event).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('error while creating eventdetails');
						return $q.reject(errResponse);
					}
					);
		}
		
		
					
	}
	
}]);