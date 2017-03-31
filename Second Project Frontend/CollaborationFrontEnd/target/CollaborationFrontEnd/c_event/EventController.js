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
                                		 errorCode:''
                                		 
                                 };
                  
                       self.events=[];
                         self.submit=function(){
                        	 self.createEvent(self.event);
                         };
                        	 self.createEvent=function(event){
                        		 Eventservice.createEvent(event).then( 
                        					 console.log('event is created'),
                        					 self.fetchAllEvents,
                        					 function(errResponse)
                        					 {
                        						 console.error('event is not created');
                        					 }
                        					 )
                        					 
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
                        				 
}]); 
                        				 
                        		 
                        	
                         
                         
                                
                      
                                 
                                 
                                 
                                 
                                 
                                 
                                
                             	       