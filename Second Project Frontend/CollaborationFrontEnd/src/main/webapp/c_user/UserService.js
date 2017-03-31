'use strict';
app.service('UserService',['$http','$q','$rootScope', function($http,$q,$rootScope){
	console.log("UserService...")
	var Backendurl="http://localhost:8080/collobrationchatt";
	return{
		fetchAllUsers:function(){
			return $http.get(Backendurl+'/users').then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('error while getting  userdetails');
						return $q.reject(errResponse);
					}
					);
		},
		createUser:function(user){
			return $http.post(Backendurl+'/user/',user).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('error while creating userdetails');
						return $q.reject(errResponse);
					}
					);
		},
		
		deleteUser: function(id){
			return $http,delete(Backendurl+'/user/'+id)
			.then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while deleting user');
						return $q.reject(errResponse);
					}
					);
		},
		
		
		logout: function()
		{
			console.log('logout.....')
			return $http.get(Backendurl+'/user/logout/')
			.then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.log('Error while logging out');
						return $q.reject(errResponse)
					}
					);
		},
		
		
		acceptUser: function(id){
			console.log("accepting in user "+id)
			return $http.put(Backendurl+'/useraccept/'+id)
			.then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while accepting user');
						return $q.reject(errResponse);
					});
		},
		
		rejectUser: function(id){
			console.log("rejecting in user")
			return $http.put(Backendurl+'/userreject/'+id)
			.then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while rejecting user');
						return $q.reject(errResponse);
					});
		},
		
		myprofile: function(id){
			console.log("showing my profile "+id)
			return $http.get(Backendurl+'/user/'+id)
			.then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while getting user profile');
						return $q.reject(errResponse);
					});
		},
		
		
		userupdate: function(id){
			console.log("updating my profile "+id)
			return $http.put(Backendurl+'/user/'+id)
			.then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while getting user profile');
						return $q.reject(errResponse);
					});
		},
		
		
		
		
		
		
		authenticateUser:function(user){
			console.log("authenticating in userservice")
			return $http.post(Backendurl+'/user/authenticate/',user).then(
					function(response){
					if(response.data.errormessage==""){
						$rootScope.currentUser={
								user_id:response.data.user_id,
                       		 name:response.data.name,
                       		 email:response.data.email,
                       		 address:response.data.address,
                       		 mobile_no:response.data.mobile_no,
                       		 password:response.data.password,
                       		 role:response.data.role,
                       		 isOnline:response.data.isOnline,
                       		 gender:response.data.gender,
                       		 status:response.data.status
                       		 
						};
					}
						return response.data;
					},
					function(errResponse){
						$rootScope.userLoggedin=false;
						console.error('error while logging in user');
						return $q.reject(errResponse);
					}
					);
			
			
			
			
			
			
			
		}
	}
	
}]);