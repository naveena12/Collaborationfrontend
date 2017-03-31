'use strict';
app.controller('BlogController',['$http','$scope','BlogService','$location','$rootScope',
                                 function($http,$scope,BlogService,$location,$rootScope){
                                 console.log("BlogController....")
	                             var self=this;
                                 self.blog={
                                		 blog_id:'',
                                		 blog_title:'',
                                         blog_Datetime:'',
                                         description:'',
                                		 user_id:'',
                                		 errorMessage:'',
                                		 errorCode:''
                                		 
                                 };                    
                  
                       self.blogs=[];
                         self.submit=function(){
                        	 self.createBlog(self.blog);
                         };
                        	 self.createBlog=function(blog){
                        		 BlogService.createBlog(blog).then( 
                        					 console.log('blog is  created'),
                        					 self.fetchAllBlogs,
                        					 function(errResponse)
                        					 {
                        						 console.error('blog is  not created');
                        					 }
                        					 )
                        					 self.reset();
                        	 }; 
                        	 
                        	self.fetchAllBlogs=function(){
                        		BlogService.fetchAllBlogs().then(function(d){
                        			self.blogs=d;
                        		},
                        		function(errResponse){
                        			console.error('error while fetching Blogs');
                        		}
                        		)
                        	};
                        	self.fetchAllBlogs();
                        	
                        	 self.reset=function(){
                              	  console.log('resetting the form',self.blog);
                              	  self.blog={
                              			 blog_id:'',
                                		 blog_title:'',
                                         blog_Datetime:'',
                                         description:'',
                                		 user_id:'',
                                		errorMessage:'',
                                		errorCode:''
                              	 };
                               	  $scope.myForm.$setPristine();//reset form
                        	 };		 
}]); 
                        				 
                        		 
                        	
                         
                         
                                
                      
                                 
                                 
                                 
                                 
                                 
                                 
                                
                             	