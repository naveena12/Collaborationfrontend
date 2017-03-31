/*'use strict';

  app.factory('JobService', ['$http', '$q', '$rootScope', function($http, $q, $rootScope)
                   
   {
	console.log("JobService....")
	
	var Backendurl="http://localhost:8080/collobrationchatt";
		return{
		
		createJob_application: function(jobID) {
			return $http.post(Backendurl+'/applyForJob/'+id)
			.then(
				function(response){
					return response.data;
				},
				function(errResponse){
					console.error('Error while applying for job');
					return $q.reject(errResponse);
				}
				);
			},
	
			
			accept: function(jobapplied,id){
				console.log("accepting in service")
				return $http.put(BASE_URL+'/jobaccept/'+jobapplied.id,jobapplied)
				.then(
						function(response){
							return response.data;
						},
						function(errResponse){
							console.error('Error while updating jobapplied');
							return $q.reject(errResponse);
						});
			},	
			
			reject: function(jobapplied,id){
				console.log("rejecting in service")
				return $http.put(BASE_URL+'/jobreject/'+jobapplied.id,jobapplied)
				.then(
						function(response){
							return response.data;
						},
						function(errResponse){
							console.error('Error while updating jobapplied');
							return $q.reject(errResponse);
						});
			},	
			
	
	getJobDetails: function(jobID){
		console.log("Getting job details of" + jobID)
		return $http.get(Backendurl+'/getAllJobs/')
		.then(
				function(response){
					$rootScope.selectedJob = response.data
					return response.data;
				},
		function(errResponse){
					console.error('Error while getting job details');
					return $q.reject(errResponse);
				}		
		);
	},
	
	getMyAppliedJobs: function(){
		return $http.get(Backendurl+'/getAllJobsApplication/')
		.then(
				function(response){
					return response.data;
				},
				function(errResponse){
					console.error('Error while getting applied jobs');
					return $q.reject(errResponse);
				});
	},
	
      postAJob: function(job){
    	  return $http.post(Backendurl+'/postAJob/',job)
    	  .then(
    			  function(response){
    				  return response.data;
    			  },
    			  function(errResponse){
    				  console.error('Error while posting job');
    				  return $q.reject(errResponse);
    			  });
      },  
      
      rejectJobApplication: function(userID, jobID){
    	  return $http.put(BASE_URL+'/rejectJobApplication/'+userID, jobID)
    	  .then(
    			  function(response){
    				  return response.data;
    			  },
    			  function(errResponse){
    				  console.error('Error while updating friend');
    			  });
      },
      
      canCallForInterview: function(id){
    	  return $http.put(BASE_URL+'/canCallForInterview/'+userID,id)
    	  .then(function(response){
			  return response.data;
		  },
		  function(errResponse){
			  console.error('Error while updating friend');
		  }
    			  );
      },
      
      selectUser: function(id){
    	  return $http.put(BASE_URL+'/selectUser/'+userID, jobID)
    	  .then(
    			  function(response){
    				  return response.data;
    			  },
    			  function(errResponse){
    				  console.error('Error while selected User');
    				  return $q.reject(errResponse);
    			  });
      },
      
      getAllJobs: function(){
    	  return $http.get(BASE_URL+'/getAllJobs/')
    	  .then(
    			  function(response){
    				  return response.data;
    			  },
    			  function(errResponse){
    				  console.error('Error while getting all jobs');
    				  return $q.reject(errResponse);
    			  });
      },  

      getAllJobsApplied: function(){
    	  return $http.get(BASE_URL+'/getAllJobsApplication/')
    	  .then(
    			  function(response){
    				  return response.data;
    			  },
    			  function(errResponse){
    				  console.error('Error while getting all jobsapplied');
    				  return $q.reject(errResponse);
    			  });
      },  
      
	};	
		}
	}])
*/





'use strict'
app.factory('JobService',['$http','$q','$rootScope', function($http,$q,$rootScope){
	console.log("JobService...")
	var Backendurl="http://localhost:8080/collobrationchatt";
	return{
		fetchAllJobs:function(){
			console.log('fetching jobs in backend')
			return $http.get(Backendurl+'/getAllJobs/').then(
					function(response){
						console.log('list of jobs from backend')
						return response.data;
					},
					function(errResponse){
						console.error('error while getting  jobdetails');
						return $q.reject(errResponse);
					}
					);
		},
		fetchAllJobs_app:function(){
			console.log('fetching job apps in backend')
			return $http.get(Backendurl+'/getAllJobsApplication/').then(
					function(response){
						console.log('list of job apps from backend')
						return response.data;
					},
					function(errResponse){
						console.error('error while getting  job_applicationdetails');
						return $q.reject(errResponse);
					}
					);
		},

		createJob_application:function(id){
			console.log('applying for job '+id+' in backend')
			return $http.post(Backendurl+'/applyForJob/'+id).then(
					function(response){
						console.log('job app is created '+id+' in backend')
						return response.data;
					},
					function(errResponse){
						console.error('error while creating job_applicationdetails');
						return $q.reject(errResponse);
					}
					);
		},
	
		createJob:function(job){
			return $http.post(Backendurl+'/postAJob/',job).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('error while creating jobdetails');
						return $q.reject(errResponse);
					}
					);
		}
	
	};
}])