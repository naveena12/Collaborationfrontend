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
			console.log('calling create event func from backend')
			return $http.post(Backendurl+'/ERegister',event).then(
					function(response){
						console.log('event is added ')
						return response.data;
					},
					function(errResponse){
						console.error('error while creating eventdetails');
						return $q.reject(errResponse);
					}
					);
		},
		Eventimg:function(eventname,eimg){
			console.log('calling create event func from backend'+eimg)
			return $http.post('http://localhost:8080/collobrationchatt/doUpload/'+eventname+'/'+eimg).then(
					function(response){
						console.log('event is added ')
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