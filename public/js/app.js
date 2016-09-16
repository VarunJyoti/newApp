angular.module("myApp",["ui.router"]),angular.module("myApp").controller("MainCtrl",["$scope","$state",function(t,a){}]),angular.module("myApp").config(["$stateProvider","$locationProvider",function(t,a){var e={name:"login",url:"/",templateUrl:"views/login.html",controller:"LoginController"},o={name:"dashboard","abstract":!0,url:"/",templateUrl:"views/dashboard.html"},n={name:"dashboard.content",parent:o,url:"content",templateUrl:"views/content.html"},r={name:"dashboard.addcompany",parent:o,url:"addcompany",templateUrl:"views/addcompany.html"};t.state(e),t.state(o),t.state(n),t.state(r),a.html5Mode({enabled:!0,requireBase:!1})}]),angular.module("myApp").controller("LoginController",["$scope","$state",function(t,a){t.submitLogin=function(t,e){a.transitionTo("dashboard.content")}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIkxvZ2luQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRzdGF0ZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJsb2dpblN0YXRlIiwibmFtZSIsInVybCIsInRlbXBsYXRlVXJsIiwiYWJvdXRTdGF0ZSIsImFic3RyYWN0IiwiY29udGVudFN0YXRlIiwicGFyZW50IiwiYWRkQ29tcGFueVN0YXRlIiwic3RhdGUiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzdWJtaXRMb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJ0cmFuc2l0aW9uVG8iXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFBQyxPQUFBLFNBQUEsY0FDQUQsUUFBQUMsT0FBQSxTQUFBQyxXQUFBLFlBQUEsU0FBQSxTQUFBLFNBQUFDLEVBQUFDLE9BRUFKLFFBQUFDLE9BQUEsU0FBQUksUUFBQSxpQkFBQSxvQkFBQSxTQUFBQyxFQUFBQyxHQUVBLEdBQUFDLElBQ0FDLEtBQUEsUUFDQUMsSUFBQSxJQUNBQyxZQUFBLG1CQUNBVCxXQUFBLG1CQUdBVSxHQUNBSCxLQUFBLFlBQ0FJLFlBQUEsRUFDQUgsSUFBQSxJQUNBQyxZQUFBLHdCQUdBRyxHQUNBTCxLQUFBLG9CQUNBTSxPQUFBSCxFQUNBRixJQUFBLFVBQ0FDLFlBQUEsc0JBR0FLLEdBQ0FQLEtBQUEsdUJBQ0FNLE9BQUFILEVBQ0FGLElBQUEsYUFDQUMsWUFBQSx3QkFHQUwsR0FBQVcsTUFBQVQsR0FDQUYsRUFBQVcsTUFBQUwsR0FDQU4sRUFBQVcsTUFBQUgsR0FDQVIsRUFBQVcsTUFBQUQsR0FFQVQsRUFBQVcsV0FDQUMsU0FBQSxFQUNBQyxhQUFBLE9DeENBcEIsUUFBQUMsT0FBQSxTQUFBQyxXQUFBLG1CQUFBLFNBQUEsU0FBQSxTQUFBQyxFQUFBQyxHQUNBRCxFQUFBa0IsWUFBQSxTQUFBQyxFQUFBQyxHQUNBbkIsRUFBQW9CLGFBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ215QXBwJywgWyd1aS5yb3V0ZXInXSk7XHJcbmFuZ3VsYXIubW9kdWxlKCdteUFwcCcpLmNvbnRyb2xsZXIoXCJNYWluQ3RybFwiLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZSl7fSk7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAnKS5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcbiAgXHJcbiAgdmFyIGxvZ2luU3RhdGUgPSB7XHJcbiAgICBuYW1lOiAnbG9naW4nLFxyXG4gICAgdXJsOiAnLycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2xvZ2luLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjpcIkxvZ2luQ29udHJvbGxlclwiXHJcbiAgfVxyXG5cclxuICB2YXIgYWJvdXRTdGF0ZSA9IHtcclxuICAgIG5hbWU6ICdkYXNoYm9hcmQnLFxyXG4gICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICB1cmw6ICcvJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZGFzaGJvYXJkLmh0bWwnXHJcbiAgfVxyXG5cclxuICB2YXIgY29udGVudFN0YXRlID0ge1xyXG4gICAgbmFtZTogJ2Rhc2hib2FyZC5jb250ZW50JyxcclxuICAgIHBhcmVudDogYWJvdXRTdGF0ZSxcclxuICAgIHVybDogJ2NvbnRlbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb250ZW50Lmh0bWwnXHJcbiAgfVxyXG5cclxuICB2YXIgYWRkQ29tcGFueVN0YXRlID0ge1xyXG4gICAgbmFtZTogJ2Rhc2hib2FyZC5hZGRjb21wYW55JyxcclxuICAgIHBhcmVudDogYWJvdXRTdGF0ZSxcclxuICAgIHVybDogJ2FkZGNvbXBhbnknLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9hZGRjb21wYW55Lmh0bWwnXHJcbiAgfVxyXG5cclxuICAkc3RhdGVQcm92aWRlci5zdGF0ZShsb2dpblN0YXRlKTtcclxuICAkc3RhdGVQcm92aWRlci5zdGF0ZShhYm91dFN0YXRlKTtcclxuICAkc3RhdGVQcm92aWRlci5zdGF0ZShjb250ZW50U3RhdGUpO1xyXG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlKGFkZENvbXBhbnlTdGF0ZSk7XHJcblxyXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgcmVxdWlyZUJhc2U6IGZhbHNlXHJcbiAgfSlcclxufSlcclxuXHJcbiIsImFuZ3VsYXIubW9kdWxlKCdteUFwcCcpLmNvbnRyb2xsZXIoXCJMb2dpbkNvbnRyb2xsZXJcIiwgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUpe1xyXG5cdCRzY29wZS5zdWJtaXRMb2dpbiA9IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCl7XHJcblx0XHQkc3RhdGUudHJhbnNpdGlvblRvKFwiZGFzaGJvYXJkLmNvbnRlbnRcIik7XHJcblx0fVxyXG5cclxufSkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
