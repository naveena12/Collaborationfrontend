'use strict';
app.controller('FriendController',['$scope','UserService','FriendService','$location','$rootScope',
                                 function($scope,UserService,FriendService,$location,$rootScope){
                                 console.log("FriendController....")
	                             var self=this;
                                 self.friend={
                                		 id:'',
                                		 friend_id:'',
                                		 user_id:'',
                                		 status:'',
                                		 isonline:'',
                                		 errorMessage:'',
                                		 errorCode:''
                               
                                		 
                                 };
                                 self.friends=[];
                                 self.friendRequests=[];
                                 self.acceptedFriends=[];
                                 
                                 
                                 self.user={
                                		 user_id:'',
                                		 name:'',
                                		 email:'',
                                		 address:'',
                                		 mobile_no:'',
                                		 password:'',
                                		 role:'',
                                		 isOnline:'',
                                		 gender:'',
                                		 status:'',
                                		 errormessage:'',
                                		 errorcode:''
                                 };
                  
                       self.users=[];
                 
                         self.submit=function(fid){
                        	 self.createFriend(fid);
                         };
                        	 self.createFriend=function(fid){
                        		 FriendService.sendFriendRequest(fid).then( 
                        					 console.log('friend is created'),
                        					 self.fetchAllFriends,
                        					 function(errResponse)
                        					 {
                        						 console.error('friend is not created');
                        					 }
                        					 )
                        					 
                        	 }; 
                        	self.updateFriendRequest = function(friend,id){
                        		FriendService.updateFriendRequest(friend,id)
                        		.then(
                        				self.fetchAllFriends,
                        				function(errResponse){
                        					console.error('Error while updating friend');
                        				}
                        				);
                        	} ;
                        	 
                        	 self.deleteFriend = function(id){
                        		 FriendService.deleteFriend(id)
                        		 .then(
                        				 self.fetchAllFriends,
                        				 function(errResponse){
                        					 console.error('Error while deleting friend');
                        				 }
                        				 );
                        	 };
                        	 
                        	 
                        	 
                        	 self.fetchAllUsers=function(){
                         		UserService.fetchAllUsers().then(function(d){
                         			self.users=d;
                         		},
                         		function(errResponse){
                         			console.error('error while fetching Users');
                         		}
                         		)
                         	};
                         	
                         	self.fetchAllUsers();
                        	 
                        	self.fetchAllFriends=function(){
                        		FriendService.getMyFriends().then(function(d){
                        			self.friends=d;
                        		},
                        		function(errResponse){
                        			console.error('error while fetching Friends');
                        		}
                        		)
                        	};
                        	//self.fetchAllFriends();
                        	self.getMyFriendRequests=function(){
                        		console.log("getting my friend requests")
                        		FriendService.getMyFriendRequests()
                        		.then(function(d){
                        			self.friendRequests=d;
                        			console.log("got the friend requests")
                        		},
                        		function(errResponse){
                        			console.error('error while fetching friends ');
                        		})
                        	};
                        	self.getMyFriendRequests();
                        	
                        	
                        	self.acceptfriend=function(fid){
                        		FriendService.acceptFriendRequest(fid)
                        		.then(function(d){
                        			self.friends=d;
                        			self.getMyFriendRequests();
                        			alert("Friend request Accepted")
                        		},
                        		function(errResponse){
                        			console.error('error while sending the friend request ');
                        		}
                        		)
                        	};
                        	self.rejectfriend=function(fid){
                        		FriendService.rejectFriendRequest(fid)
                        		.then(function(d){
                        			self.friends=d;
                        			self.getMyFriendRequests();
                        			alert("Friend request rejected")
                        		},
                        		function(errResponse){
                        			console.error('error while sending the friend request ');
                        		})
                        	};
                        	
                        	
                        	self.myFriends=function(){
                        		console.log("getting my friends")
                        		FriendService.myFriends()
                        		.then(function(d){
                        			self.acceptedFriends=d;
                        			console.log("got the friend requests")
                        		},
                        		function(errResponse){
                        			console.error('error while fetching friends ');
                        		})
                        	};
                        	self.myFriends();
                        	
                        	
}]); 
                        				 
                        		 
                        	
                         
                         
                                
                      
                                 
                                 
                                 
                                 
                                 
                                 
                                
                             	