'use strict';
app.factory('FriendService', ['$http', '$q', '$rootScope', function($http, $q, $rootScope)
                   
   {
	console.log("FriendService....")
	
	var Backendurl="http://localhost:8080/collobrationchatt";
		return{
		getMyFriends: function(){
			console.log("Getting friends from service")
			return $http.get(Backendurl+'/myFriend')
			.then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while fetching Friends');
						return $q.reject(errResponse);
					});
			},
			
			acceptFriendRequest: function(id){
				console.log("accepting in friend")
				return $http.put(Backendurl+'/acceptFriend/'+id)
				.then(
						function(response){
							return response.data;
						},
						function(errResponse){
							console.error('Error while friend user');
							return $q.reject(errResponse);
						});
			},
			
			rejectFriendRequest: function(id){
				console.log("rejecting in friend")
				return $http.put(Backendurl+'/rejectFriend/'+id)
				.then(
						function(response){
							return response.data;
						},
						function(errResponse){
							console.error('Error while friend user');
							return $q.reject(errResponse);
						});
			},
			
			sendFriendRequest: function(fid){
				return $http.post(Backendurl+'/addFriend/'+fid)
				.then(
						function(response){
							
							return response.data;
						},
						function(errResponse){
							console.error('Error while creating friend');
							return $q.reject(errResponse);
						});
			},
			updateFriendRequest:function(friend,id){
				return $http.put(Backendurl+'/friend/'+id,friend)
				.then(
						function(response){
							return response.data;
						},
						function(errResponse){
							console.error('Error while updating friend');
							return $q.reject(errResponse);
						});
			},
			
			deleteFriend: function(id){
				return $http,delete(Backendurl+'/friend/'+id)
				.then(
						function(response){
							return response.data;
						},
						function(errResponse){
							console.error('Error while deleting friend');
							return $q.reject(errResponse);
						});
			},
	
	getMyFriendRequests: function(){
		console.log("getting new friend requests")
		return $http.get(Backendurl+'/getMyFriendRequests/')
		.then(
				function(response){
					return response.data;
				},
				function(errResponse){
					console.error('Error while getting new friend requests');
					return $q.reject(errResponse);
				});
	},
	
	myFriends: function(){
		console.log("getting confirmed friends")
		return $http.get(Backendurl+'/myFriends/')
		.then(
				function(response){
					return response.data;
				},
				function(errResponse){
					console.error('Error while getting accepted friends');
					return $q.reject(errResponse);
				});
	}
		};
	}])