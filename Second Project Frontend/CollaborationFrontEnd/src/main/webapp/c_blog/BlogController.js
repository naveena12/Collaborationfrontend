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
                       self.blogComment={
                    		   bcomment_id:'',
                      		 blog_id:'',
                      		 bcomment_Datetime:'',
                               bcomment:'',
                      		 user_id:'',
                      		 errorMessage:'',
                      		 errorCode:''
                      		 
                       }; 
                       self.blogComments=[];
                       
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
                        	 
                        	 self.fetchAllBlogComments=function(id){
                         		BlogService.fetchAllBlogComments(id).then(function(d){
                         			console.log('list of comments')
                         			self.blogComments=d;
                         			console.log(self.blogComments);
                         		},
                         		function(errResponse){
                         			console.error('error while fetching BlogComments');
                         		}
                         		)
                         	};
                        	 //self.fetchAllBlogComments($rootScope.currentBlog.blog_id);
                        	 self.submit1=function(blogid,bcomment){
                            	 self.createBlogComment(self.blogComment,blogid,bcomment);
                             };
                            	 self.createBlogComment=function(blogcomment,blogid,bcomment){
                            		 BlogService.createBlogComment(blogcomment,blogid,bcomment).then( 
                            					 console.log('blog is  created'),
                            					 self.fetchAllBlogComments(blogid),
                            					 function(errResponse)
                            					 {
                            						 console.error('blogcomment is  not created');
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
                        	
                        	
                        	
                        	//self.fetchAllBlogComments();
                        	
                        	self.selectedBlog=function(blogid){
                        		BlogService.selectedBlog(blogid).then(function(d){
                        			self.blog=d;
                        			$location.path('/view_blog');
                        		},
                        		function(errResponse){
                        			console.error('error while getting Blog');
                        		}
                        		)
                        	};
                        	
                        	
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
                        				 
                        		 
                        	
                         
                         
                                
                      
                                 
                                 
                                 
                                 
                                 
                                 
                                
                             	