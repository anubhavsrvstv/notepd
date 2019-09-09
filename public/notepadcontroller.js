var app = angular.module('myApp', []);
app.controller('notepadCtrl', function($scope,$http, $window) {

  $scope.getData = function() {
    // console.log()
    $http({
        method : "GET",
          url : 'api/getdata'
      }).then(function mySuccess(response) {
        $scope.data = response.data.data;
        console.log(response);
        

      }, function myError(err) {
          console.log(err);
        // $scope.myWelcome = response.statusText;
      });
  };

  $scope.saveData = function () {
    console.log("response",$scope.entry);
    $http({
        method : "POST",
          url : 'api/form_data',
          headers:{
            "entry":$scope.entry,'Content-Type': 'application/json', 'Cache-Control': 'no-cache'
          }
      }).then(function mySuccess(response) {
        $scope.data = response.data.data;
        console.log(response);
      $window.location.reload();

    }, function myError(err) {
          console.log(err);
        // $scope.myWelcome = response.statusText;
      });
  };
  



  $scope.dataUpdate = function (id,newdata) {
    console.log("id",id,newdata);
    $http({
      method : "PUT",
      url : 'api/updateData',
     // data:{'id':id,'data':newdata},
      headers: { 'id':id,'data':newdata,'Content-Type': 'application/json', 'Cache-Control': 'no-cache'}
    }).then(function (response) {
      // $scope.data = response.data
      console.log(response);
      $window.location.reload()
    }, function (error) {
      console.log(err)
      // $scope.myWelcome = response.statusText;

    });
  }






  $scope.removeData = function (id) {
    console.log("id",id);
    $http({
        method : "DELETE",
          url : 'api/deleteData',
          headers: { 'id':id,'Content-Type': 'application/json', 'Cache-Control': 'no-cache'}
      }).then(function mySuccess(response) {
        $scope.data = response.data.data;
        console.log(response);
        $window.location.reload();
        
  
      }, function myError(err) {
          console.log(err)
        // $scope.myWelcome = response.statusText;
      
  
    
  
        
      });
  };




});
var app = angular.module('myApp', []);
app.controller('notepadCtrl', function($scope,$http, $window) {

  $scope.getData = function() {
    // console.log()
    $http({
        method : "GET",
          url : 'api/getdata'
      }).then(function mySuccess(response) {
        $scope.data = response.data.data;
        console.log(response);
        

      }, function myError(err) {
          console.log(err);
        // $scope.myWelcome = response.statusText;
      });
  };

  $scope.saveData = function () {
    console.log("response",$scope.entry);
    $http({
        method : "POST",
          url : 'api/form_data',
          headers:{
            "entry":$scope.entry,'Content-Type': 'application/json', 'Cache-Control': 'no-cache'
          }
      }).then(function mySuccess(response) {
        $scope.data = response.data.data;
        console.log(response);
      $window.location.reload();
	$state.reload()

    }, function myError(err) {
          console.log(err);
        // $scope.myWelcome = response.statusText;
      });
  };
  



  $scope.dataUpdate = function (id,newdata) {
    console.log("id",id,newdata);
    $http({
      method : "PUT",
      url : 'api/updateData',
     // data:{'id':id,'data':newdata},
      headers: { 'id':id,'data':newdata,'Content-Type': 'application/json', 'Cache-Control': 'no-cache'}
    }).then(function (response) {
      // $scope.data = response.data
      console.log(response);
      $window.location.reload()
	$state.reload()
    }, function (error) {
      console.log(err)
      // $scope.myWelcome = response.statusText;

    });
  }






  $scope.removeData = function (id) {
    console.log("id",id);
    $http({
        method : "DELETE",
          url : 'api/deleteData',
          headers: { 'id':id,'Content-Type': 'application/json', 'Cache-Control': 'no-cache'}
      }).then(function mySuccess(response) {
        $scope.data = response.data.data;
        console.log(response);
        $window.location.reload();
	$state.reload()
        
  
      }, function myError(err) {
          console.log(err)
        // $scope.myWelcome = response.statusText;
      
  
    
  
        
      });
  };




});

