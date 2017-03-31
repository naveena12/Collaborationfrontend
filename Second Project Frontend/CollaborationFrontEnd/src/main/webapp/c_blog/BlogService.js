'use strict'
app.factory('BlogService',['$http','$q','$rootScope', function($http,$q,$rootScope){
	console.log("BlogService...")
	$rootScope.currentBlog='';
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
		selectedBlog:function(blogid){
			return $http.get(Backendurl+'/blog/'+blogid).then(
					function(response){
						$rootScope.currentBlog=response.data;
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
		
		},
	
	createBlogComment:function(blogComment,blogid,bcomment){
		console.log(Backendurl+'/bcomment/'+blogid+'/'+bcomment)
		console.log(blogComment)
		return $http.post(Backendurl+'/bcomment/'+blogid+'/'+bcomment,blogComment).then(
				function(response){
					return response.data;
				},
				function(errResponse){
					console.error('error while creating blogcommentdetails');
					return $q.reject(errResponse);
				}
				);
	},
		
	
		fetchAllBlogComments:function(id){
			console.log('list of comments in blogservice')
			return $http.get(Backendurl+'/blogcomments/'+id).then(
					function(response){
						console.log('list of comments from DB '+response.data)
						
						return response.data;
					},
					function(errResponse){
						console.error('error while getting  blogcommentdetails');
						return $q.reject(errResponse);
					}
					);
	}

		}
	
	

	
	
	
	
	
	
	
}]);