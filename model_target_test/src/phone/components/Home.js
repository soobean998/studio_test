// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available
console.log($scope.app)

$scope.wheel = function() {
  
  if($scope.app.view.Home.wdg["3DImage-2"].visible == true)
   $scope.app.view.Home.wdg["3DImage-2"].visible = false;
  else
    $scope.app.view.Home.wdg["3DImage-2"].visible = true;
  
}

$scope.Bwheel = function() {
  
  if($scope.app.view.Home.wdg["3DImage-1"].visible == true)
   $scope.app.view.Home.wdg["3DImage-1"].visible = false;
  else
    $scope.app.view.Home.wdg["3DImage-1"].visible = true;
  
}

$scope.engine = function() {
  
  if($scope.app.view.Home.wdg["3DImage-3"].visible == true)
   $scope.app.view.Home.wdg["3DImage-3"].visible = false;
  else
    $scope.app.view.Home.wdg["3DImage-3"].visible = true;
  
}


$scope.tmls = function() {
  
  $scope.view.Home.wdg["tmlText-1"];
  
}

/*
angular.module('myApp', []).controller('myCtrl', function ($scope, $http) {
     
    var req = {
        user: "user@email.goes.here",    // Replace with your user
        pass: "user_password_goes_here", // Replace with your password
        source: "virtual_number",        // Replace with your sender ID
        destination: "recipient_mobile", // Replace with the recipient number
        sms: "Test Message 1",           // Replace with your message
    };
         
    $http.get("http://api.123-txt.com/Api123WCF.svc/rest/SendSms", {params: req});                   
});

*/


