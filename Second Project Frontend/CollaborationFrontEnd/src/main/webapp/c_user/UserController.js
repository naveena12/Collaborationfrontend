'use strict';
app.controller('UserController',['$http','$scope','UserService','$location','$rootScope','$cookieStore',
                                 function($http,$scope,UserService,$location,$rootScope,$cookieStore){
                                 console.log("UserController....")
	                             var self=this;
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
                       self.calluser=function(){
                      	 console.log("calling from user ");
                      	 
                       };
                       
                         self.submit=function(){
                        	 console.log("submitting ");
                        	 self.createUser(self.user);
                         };
                        	 self.createUser=function(user){
                        		 UserService.createUser(user).then( 
                        					 console.log('user is created'),
                        					 self.fetchAllUsers,
                        					
                        					 function(errResponse)
                        					 {
                        						 console.error('user is not created');
                        					 }
                        					 )
                        					 self.reset();
                        	 }; 
                        	 self.login=function(){
                        		 console.log('Login is called');
                            	 self.authenticateUser(self.user);
                             };
                        	 self.authenticateUser=function(user){
                        		 UserService.authenticateUser(user).then( 
                        					 
                        					 function(d)
                        					 {
                        						self.user=d;
                        						console.log("user.errorcode:"+ self.user.errorcode)
                        						if(self.user.status=='R')
                        							{
                        							 alert("your regisertaion is rejected contact admin");
                        							 user.selfErrorCode("404");
                        							 user.setErrorMessage("your registeration is rejected contact admin")
                        							}
               
                        						else if(self.user.errorcode=="404")
                        							{
                        							alert("Invalid credentials")
                        							self.user.user_id="";
                        							self.user.password="";
                        							}
                        						else{
                        							console.log('user is loggedin');
                        							console.log("Valid user")
                        							$rootScope.currentUser={user_id:self.user.user_id,
                                               		 name:self.user.name,
                                            		 email:self.user.email,
                                            		 address:self.user.address,
                                            		 mobile_no:self.user.mobile_no,
                                            		 password:self.user.password,
                                            		 role:self.user.role,
                                            		 isOnline:self.user.isOnline,
                                            		 gender:self.user.gender,
                                            		 status:self.user.status
                                            		 
                        							};
                        							$http.defaults.headers.common['Authorization']='Basic'+$rootScope.currentUser;
                        							$cookieStore.put('currentUser',$rootScope.currentUser);
                        							$location.path("/");
                        						}
                        						
                        					 },
                        					 function(errResponse)
                        					 {
                        						 console.error('Error while authenticate users');
                        					 }
                        					 );
                        					 
                        	 }; 
                        	
                        	 self.logout=function(){
                        		 console.log('calling the method logout')
                        		 $rootScope.currentUser={};
                        		 $cookieStore.remove('currentUser');
                        		 
                        		 console.log('calling the method logout of User Service')
                        		 UserService.logout()
                        		 $location.path('/');
                        	 };
                        	 self.deleteUser =function(id){
                        		 UserService.deleteUser(id).then(self.fetchAllUsers, function(errResponse){
                        			 console.error('Error while deleting User');
                        		 });
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
                        	
                        	 self.reset=function(){
           		        	  console.log('resetting the form',self.user);
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
           		        	  $scope.myForm.$setPristine();//reset form
           		          };
           		       self.acceptUser=function(id){
           		    	UserService.acceptUser(id)
                   		.then(function(d){
                   			self.users=d;
                   			self.fetchAllUsers();
                   			alert("User is Accepted")
                   		},
                   		function(errResponse){
                   			console.error('error while accepting user ');
                   		}
                   		)
                   	};
                   	self.rejectUser=function(id){
                   		UserService.rejectUser(id)
                   		.then(function(d){
                   			self.users=d;
                   			self.fetchAllUsers();
                   			alert("User is rejected")
                   		},
                   		function(errResponse){
                   			console.error('error while rejecting user ');
                   		})
                   	};
                   	
                   	self.usermyprofile=function(){
                   		{
                   			self.myprofile();
                   		}
                   	};
                   	self.myprofile=function(){
                   		console.log("myprofile....")
                   		UserService.myprofile($rootScope.currentUser.user_id)
                   		.then(function(d){
                   			self.user=d;
                   			$location.path("/myprofile")
                   		},
                   		function(errResponse){
                   			console.error('error while fetching profile');
                   		})
                   	};
                   	
                   	self.userupdate=function(id)
                   	{
                   		self.updateUser(id);
                   		
                   	}
                   	
                   	self.updateUser=function(id){
                   		console.log("updating myprofile....")
                   		UserService.userupdate(id)
                   		.then(
                   				self.fetchAllUsers,
                   				/*function(d){
                   			self.user=d;
                   			//$location.path("/myprofile")
                   		},*/
                   		function(errResponse){
                   			console.error('error while updating profile');
                   		})
                   	};
                   	
                   	
                   	
                   	
                   	
                   	
                   	
                   	
                   	
                   	
                   	
                   	
                   	
                        				 
}]); 
                        				 
                        		 
                        	
                         
                         
                                
                      
                                 
                                 
                                 
                                 
                                 
                                 
                                
                             	