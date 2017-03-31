'use strict';
app.controller('EventController',['$http','$scope','Eventservice','$location','$rootScope',
                                 function($http,$scope,Eventservice,$location,$rootScope){
                                 console.log("EventController....")
	                             var self=this;
                                 self.event={
                                		 e_id:'',
                                		 e_name:'',
                                		 e_venue:'',
                                		 e_description:'',
                                		 e_datetime:'',
                                		 errorMessage:'',
                                		 errorCode:'',
                                		 errormessage:'',
                                		 errorCode:''
                                		 
                                 };
                  
                       self.events=[];
                       $scope.eimg="";
                        self.submit=function(){
                        	console.log('subitting the event details')
                        	 self.createEvent(self.event);
                        	 console.log("event is "+self.event)
                        	 
                         };
                        	 self.createEvent=function(event){
                        		console.log('calling create event func')
                        		 Eventservice.createEvent(event).then( 
                        					 console.log('event is created'),
                        					 self.fetchAllEvents,
                        					 $location.path('/Upevent'),
                        					 function(errResponse)
                        					 {
                        						 console.error('event is not created');
                        					 }
                        					 )
                        					 self.reset();
                        	 }; 
                        	 
                        	
                        							
                        							
                        	 
                        	self.fetchAllEvents=function(){
                        		Eventservice.fetchAllEvents().then(function(d){
                        			self.events=d;
                        		},
                        		function(errResponse){
                        			console.error('error while fetching Events');
                        		}
                        		)
                        	};
                        	
                        	self.fetchAllEvents();
                        	self.Eventimg=function(ename){
                        		Eventservice.Eventimg(ename,$scope.eimg).then(function(d){
                        			console.log('image uploaded'+$scope.eimg)
                        		},
                        		function(errResponse){
                        			console.error('error while fetching Events');
                        		}
                        		)
                        	};
                        	 self.reset=function(){
                             	  console.log('resetting the form',self.event);
                             	  self.event={
                             			 e_id:'',
                                		 e_name:'',
                                		 e_venue:'',
                                		 e_description:'',
                                		 e_datetime:'',
                                		 errorMessage:'',
                                		 errorCode:''
                             	 };
                              	  $scope.myForm.$setPristine();//reset form
                       	 };	
                        	
                        	
                        	
                        	
                        	
                        	
                        	
                        				 
}]); 
                        				 
                        		 
                        	
                         
                         
                                
                      
                                 
                                 
                                 
                                 
                                 
                                 
                                
                             	       