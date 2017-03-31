'use strict'
app.factory('BlogService',['$http','$q','$rootScope', function($http,$q,$rootScope){
	console.log("BlogService...")
	var Backendurl="http://localhost:8080/collobrationchatt";
	return{
		fetchAllBlogs:function(){
			return $http.get(Backendurl+'/blogs').then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('error while getting  blogdetails');
						return $q.reject(errResponse);
					}
					);
		},
		createBlog:function(blog){
			return $http.post(Backendurl+'/blog/',blog).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('error while creating blogdetails');
						return $q.reject(errResponse);
					}
					);
		}
	}
	
}]);