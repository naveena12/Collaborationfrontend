var app=angular.module('myApp',['ngRoute', 'ngCookies']); //myApp is the name of the module. [] is where you inject the dependencies.

app.config(function($routeProvider){ //The config() takes a function which takes the $routeProvider as parameter 
	                                 //and the routing configuration goes inside the function
	$routeProvider
	
	.when("/", {
        templateUrl : "c_home/home.html",
        controller : 'HomeController'
    })
    
    /*----------Blog-----------*/
    
    .when('/create_blog',{
	templateUrl : 'c_blog/createblog.html',
	controller : 'BlogController'
	})
	
   .when('/list_blog',{
	templateUrl : 'c_blog/listblog.html',
		controller : 'BlogController'	
   })

   .when('/view_blog',{
	templateUrl : 'c_blog/viewblog.html',
	controller : 'BlogController'
	})
	
    /*----------Job-----------*/
    
    
    	
       .when('/post_job',{
    	templateUrl : 'c_job/createjob.html',
    		controller : 'JobController'	
        })
        
       .when('/view_job_details',{
    	templateUrl : 'c_job/list_job_details.html',
    	controller : 'JobController'
    	})
    	
       .when('/search_job',{
    	templateUrl : 'c_job/Applyjobdetails.html',
    	controller : 'JobController'
       })
       
       .when('/view_applied_jobs',{
    	templateUrl : 'c_job/myjobapps.html',
    	controller : 'JobController'
       })
       .when('/edit_delete_jobs',{
    	templateUrl : 'c_job/listofjobs.html',
    	controller : 'JobController'
       })
       
       
       .when('/update_job',{
    	templateUrl : 'c_job/editjob.html',
    	controller : 'JobController'
       })

       .when('/remove_job',{
    	templateUrl : 'c_job/deletejob.html',
    	controller : 'JobController'
       })

       
       /*-------friend--------------------*/
       .when('/add_friend',{
	templateUrl : 'c_friend/viewfriend.html',
	controller : 'FriendController'
	})
	
	.when('/search_friend',{
		templateUrl : 'c_friend/searchfriend.html',
		controller : 'FriendController'
	})

	.when('/view_friend',{
		templateUrl : 'c_friend/myfriend.html',
		controller : 'FriendController'
	})
	
    .when('/chat',{
	templateUrl : 'c_chat/chat.html',
	controller : 'ChatController'
   })

   .when('/chat_forum',{
	templateUrl : 'c_chat_forum/chat_forum.html',
	controller : 'ChatForumController'
   })
     /*--------------events-------------*/
   .when('/Upevent',{
	templateUrl : 'c_event/Uploadevent.html',
	controller : 'EventController'
   })
   .when('/listevent',{
	templateUrl : 'c_event/EventList.html',
	controller : 'EventController'
   })
   
   .when('/cr_event',{
	templateUrl : 'c_event/create_event.html',
	controller : 'EventController'
   })
   
   /*----------------user------------*/
   .when('/login',{
	templateUrl : 'c_user/login.html',
	controller : 'UserController'
    })
    
   .when('/logout',{
	templateUrl : 'c_home/login.html',
	controller : 'HomeController'
    })
    
   .when('/register',{
    templateUrl : 'c_user/register.html',
    controller : 'UserController'
    })

   .when('/myprofile',{
	templateUrl : 'c_user/my_profile.html',
	controller  : 'UserController'
    })
    .when('/Upuser',{
	templateUrl : 'c_user/Uploaduserimage.html',
	controller : 'UserController'
    })
    
    .when('/Admin',{
    templateUrl : 'c_admin/admin.html'
    })
    .when('/userslist',{  //when() method takes a pathand a route as parameters.
		templateUrl : 'c_admin/listofusers.html',
		controller : 'UserController'
	})
	
	.when('/listofjobs',{ //when() method takes a panthad a route as parameters.
		templateUrl  :  'c_admin/Manage_jobs.html',
		controller   :  'JobController'
	})
       .otherwise({
    	   redirectTo: '/'
    		   });
})

/****************Security Related*************************/
	app.run(function($rootScope, $location, $cookieStore, $http){
	 $rootScope.$on('$locationChangeStart', function (event, next, current) {
		 console.log("$locationChangeStart")
		  //http://localhost:8081/Collaboration/addjob
	         //redirect to login page if not logged in and trying to access a restricted page
		  
		 var restrictedPage=$.inArray($location.path(),['//','/','/view_blog','/register','/list_blog',])=== -1;
		// -1 ----> non-restricted pages are more and for restricted pages ----> 1 ;
		 console.log("restrictedPage:" +restrictedPage)
	     var loggedIn = $rootScope.currentUser.user_id;
	     
		 console.log("loggedIn:"+loggedIn)
/*		 if(restrictedPage & !loggedIn){
			console.log("Navigating to login page:")
			alert("You are not logged and so youcant apply for the job")
			$location.path('/login');
		 }
	 });
*/	 if (!loggedIn) 
     {
    	 
    	 if(restrictedPage) {
    		 console.log("Navigating to login page:")
    		 
    		 $location.path('/login');
    	 }
    	  
     }
     else //logged in
    	 {
    	 
    	 var role = $rootScope.currentUser.role;
    	 var userRestrictedPage = $.inArray($location.path(), ['/post_job','/Admin']) ===0;
    	 
    	 if (userRestrictedPage && role!='Admin')
    		 {
    		 alert("You cannot do this operation as you are not logged in as:"+role)
    		 $location.path('/login');
    		 }
    	 }
    	 
});
		
	   //keep user logged in after page refresh

	 $rootScope.currentUser = $cookieStore.get('currentUser') ||{};
	 if($rootScope.currentUser){
		 $http.defaults.headers.common['Authorization']='Basic'+$rootScope.currentUser;
		 }
});





