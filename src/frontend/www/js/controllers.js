angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

   $scope.create_task = function(poster_id, description, price, deadline, category){
        $.ajax({
          type: "POST",
          url: "http://candy-hut.herokuapp.com/tasks.json",
          data: {
              "task": {
              "poster_id":poster_id,
              "receiver_id":null,
              "description":description,
              "price":price,
              "deadline":deadline,
              "status_id":1,
              "category_id":1
              }
          },
          success: function(data) {
              console.debug("success" + data);
          },
          error: function(data) {
              console.debug("error" + data);
          }
      }).done(function(data) {
          console.debug("post", data);
      });

   }

})

.controller('HomeCtrl', function($scope, $http) {
  $http.get('http://candy-hut.herokuapp.com/tasks.json').then(function(resp) {
    $scope.tasks = resp.data;
  }, function(err) {
    console.error('ERR', err);
  })
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});
