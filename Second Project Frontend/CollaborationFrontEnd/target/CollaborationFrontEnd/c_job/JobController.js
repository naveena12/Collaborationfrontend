/*'use strict';

app.controller('JobController',['JobService','$scope','$location','$rootScope',
                                function(JobService,$scope,$location,$rootScope){
	console.log("JobController...")
	var self = this;
	self.job = {
			job_id:'',
   		 job_title:'',
            domain:'',
            qualification:'',
            experience:'',
            location:'',
            vacancy:'',
            interview_date:'',
            salary:'',
            errorMessage:'',
            errorCode:''		
	};
	self.jobs=[];
	
	self.job_application={
   		 job_app_id:'',
   		 user_id:'',
   		 job_id:'',
   		 app_date:'',
   		 status:'',
   		 errorMessage:'',
   		 errorCode:''
    };                                  
    self.job_applications=[];
	
	
	self.jobaccept = function(jobapplied){
		{
			self.accept(jobapplied,jobapplied.id);
		}
	};

	self.accept =function (jobapplied,id){
		console.log('accepting the jobapplied');
		JobService.accept(jobapplied,id).then(self.getAllJobsApplied,
		  function(errresponse){
			console.log('Error while accepting jobapplied')
		});
	};
	
	self.jobreject = function(jobapplied){
		{
			self.reject(jobapplied,jobapplied.id);
		}
	};

	self.reject =function (jobapplied,id){
		console.log('rejecting the jobapplied');
		JobService.reject(jobapplied,id).then(self.getAllJobsApplied,
		  function(errresponse){
			console.log('Error while rejecting jobapplied')
		});
	};
	
	self.applyForJob = applyForJob
		function applyForJob (jobID){
		var currentUser = $rootScope.currentUser
		if(typeof currentUser =='undefined')
		{
			alert("Please login to apply for the job")
			console.log("User not logged in, Cannot apply for job")
			$location.path('/login');
		}
		console.log("-->userID:"+currentUser.id+"applying for job:"+jobID)
		
		JobService.applyForJob(jobID)
		.then(
				function(d){
					self.job=d;
					alert("You have successfully applied for job,")
								},
								function(errResponse){
									console.error('Error while applying for job')
								});
	}
	
		self.getMyAppliedJobs=function(){
			console.log('calling the method getMyAppliedJobs');
			JobService.getMyAppliedJobs()
			   .then(function(d){
				self.jobs=d;
			}, function(errResponse){
				console.error('Error while fetching jobs');
			}
			);
		};
		
		
		
		  self.rejectJobApplication=function(userID){
			  var jobID=$rootScope.selectedJob.id;
			  console.log('calling the method rejectJobApplication of the user'+userID);
			  JobService.rejectJobApplication(userID,selectedJobID)
			  .then(function(d){
				  self.job=d;
				  alert("You have successfully rejected the job")
			  },
			  function(errResponse){
				  console.error('Error while rejecting job application');
			  });		  
			  };
			  
		  self.canCallForInterview = function(userID){
			  var jobID=$rootScope.selectedJob.id;
			  JobService.canCallForInterview(userID,jobID)
			  .then(
					  function(d){
						  self.job=d;
						  alert("Application status changed as call for job")
					  },
					  function(errResponse){
						  console.error('Error while changing status');
					  });
		  };
		  
	        self.selectUser = function(userID){
	        	 var jobID=$rootScope.selectedJob.id;
	        	console.log('calling the method selecteduser with user ID:',userID)
	       
	        	JobService.selectUser(userID, selectedJobID)
	        	.then(
	        			function(d){
	        				self.job=d;
	        				alert("Application status set as selected")
	        			},
	        			function(errResponse){
	        				console.error('Error while changning the status');
	        			});     	
	        };
	        
	        self.getAllJobs=function(){
	        	console.log('calling the method getAllJobs');
	        	JobService.getAllJobs()
	        	.then(
	        			function(d){
	        				self.jobs=d;
	        			},
	        			function(errResponse){
	        				console.error('Error while fetching all opened jobs');
	        			});
	        };
	        
	        self.getAllJobsApplied=function(){
	        	console.log('calling the method getAllJobsApplied');
	        	JobService.getAllJobsApplied()
	        	.then(
	        			function(d){
	        				self.jobsapplied=d;
	        			},
	        			function(errResponse){
	        				console.error('Error while fetching all opened jobs');
	        			});
	        };
	        
          self.getAllJobs();
          
          self.getAllJobsApplied();
          
          self.submit=function(){
        	  {
        		  console.log('submit a new job',self.job);
        		  self.postAJob(self.job);
        	  }
        	  self.reset();
          };
          
          self.postAJob=function(job){
        	console.log('Submit a new job',self.job);
        	JobService.postAJob(job)
        	.then(function(d){
        		self.job=d;
        	},function(errResponse){
        		console.error('Error while posting job');
        	});
          };
          
          self.getJobDetails=getJobDetails
          function getJobDetails(jobID){
        	  console.log('get Job details of the id',jobID);
        	  JobService.getJobDetails(jobID)
        	  .then(
        			  function(d){
        				  self.job=d;
        				  $location.path('/view_job_details');
        			  },function(errResponse){
        				  console.error('Error while fetching job details');
        			  });
          };
     
          
          self.reset=function(){
           	  console.log('resetting the form');
           	  self.job={
           			id : '',
          			title :'',
          			description : '',
          			userID : '',
          			qualification : '',
          			dateTime : '',
          			status : '',
          		  errorCode:'',
    			  errorMessage:''
           			  
           	  };
           	  $scope.myForm.$setPristine();//reset form
             };
}])*/
'use strict';
app.controller('JobController',['$http','$scope','JobService','$location','$rootScope',
                                 function($http,$scope,JobService,$location,$rootScope){
                                 console.log("JobController....")
	                             var self=this;
                                 self.job={
                                		 job_id:'',
                                		 job_title:'',
                                         domain:'',
                                         qualification:'',
                                         experience:'',
                                         location:'',
                                         vacancy:'',
                                         interview_date:'',
                                         salary:'',
                                         errorMessage:'',
                                         errorCode:''
                                 };
                                 self.jobs=[];
                                 self.job_application={
                                		 job_app_id:'',
                                		 user_id:'',
                                		 job_id:'',
                                		 app_date:'',
                                		 status:'',
                                		 errorMessage:'',
                                		 errorCode:''
                                 };                                  
                                 self.job_applications=[];
                       
                         self.submit=function(){
                        	 self.createjob(self.job);
                         };
                        	 self.createjob=function(job){
                        		 JobService.createJob(job).then( 
                        					 console.log('job is  created'),
                        					 self.fetchAllJobs,
                        					 function(d)
                        					 {
                        						 self.job=d;
                        						 console.log('job is created')
                        					 },
                        					 function(errResponse)
                        					 {
                        						 console.error('job is not created');
                        					 }
                        					 )
                        					 self.reset();
                        	 }; 
                        	 
                        	self.fetchAllJobs=function(){
                        		console.log('fetching jobs')
                        		JobService.fetchAllJobs().then(function(d){
                        			self.jobs=d;
                        			console.log('list of jobs are:')
                        		},
                        		function(errResponse){
                        			console.error('error while fetching Jobs');
                        		}
                        		);
                        	};
                        	
                        	self.fetchAllJobs();
                        			
                        	
                        	 
                             self.submit1=function(id){
                            	 console.log('applying for job '+id)
                            	 self.createjob_application(id);
                             };
                            	 self.createjob_application=function(id){
                            		 console.log('creating for job app '+id)
                            		 JobService.createJob_application(id).then( 
                            					 console.log('job_app is created'),
                            					 self.fetchAllJobs_app,
                            					 function(errResponse)
                            					 {
                            						 console.error('job_app is not created');
                            					 }
                            					 )
                            					 
                            	 }; 
                            	 
                            	self.fetchAllJobs_app=function(){
                            		console.log('fetching job apps')
                            		JobService.fetchAllJobs_app().then(function(d){
                            			self.job_applications=d;
                            			console.log('list of job apps are:')
                            		},
                            		function(errResponse){
                            			console.error('error while fetching Jobs_app');
                            		}
                            		);
                            	};
                            	
                            	self.fetchAllJobs_app();
                            	  self.reset=function(){
                                   	  console.log('resetting the form');
                                   	  self.job={
                                   			job_id:'',
                                   		 job_title:'',
                                            domain:'',
                                            qualification:'',
                                            experience:'',
                                            location:'',
                                            vacancy:'',
                                            interview_date:'',
                                            salary:'',
                                            errorMessage:'',
                                            errorCode:''
                                   	  };
                                   	  $scope.myForm.$setPristine();//reset form
                                     };
                            	
                            				 
}]); 
                        				 
                        		 
                        	
                         
                         
                                
                      
                                 
                                 
                                 
                                 
                                 
                                 
                                
                             	