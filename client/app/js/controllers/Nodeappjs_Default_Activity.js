/**
 *
 * @author Schubert Generated Code</br>
 * Date Created: </br>
 * @since  </br>
   build:   </p>
 *
 * code was generated by the Schubert System </br>
 * Schubert system Copyright - NewPortBay LLC copy_right_range</br>
 * The generated code is free to use by anyone</p>
 *
 *
 *
*/

app.controller("Nodeappjs_Default_Activity", [ '$scope', '$rootScope', '$location', '$window', '$q', '$http', '$modal', '$timeout', 'RestURL',
				    function( $scope, $rootScope, $location, $window, $q, $http, $modal, $timeout, RestURL) {

		$scope.Nodeappjs = {
		id: '',
		name : ''
		};



        $scope.create = function () {

		  //this is where the start code goes


		  //this is where the validate code goes


		  //this is where the post code goes
		  var deferred = $q.defer();
		  $http.post(RestURL.baseURL+'/Nodeappjs_Default_Activity/Nodeappjs', $scope.Nodeappjs).success(function(response) {
		  	 var modalDataObj  = {header : "Operation SaveNodeappjs successful", body :"Saved SuccessFully",errorStatus:false, msgStatus:true};
		  	 var modalInstance = $modal.open({animation: true,templateUrl: 'app/views/modal.html',controller: 'ModalContrl',size: 'sm',resolve: { modalDataObj: function () { return modalDataObj;}}});
		  	 deferred.resolve(response);
		  }).error(function(err) {
		  	 var modalDataObj  = {header : "Error ,Operation Failed for SaveNodeappjs.", body : "Operation Failed" ,errorStatus:true, msgStatus:false,status: err.status , error : err.error, exception:err.exception, path:err.path};
		  	 var modalInstance = $modal.open({animation: true,templateUrl: 'app/views/modal.html',controller: 'ModalContrl',size: 'sm',resolve: { modalDataObj: function () { return modalDataObj;}}});
		  	 deferred.reject(err);
		  });

		  //this is where the server response code goes


		  //this is where the transition code goes

		  //this is where the end code goes 



        };

        $scope.cancel = function () {

		  //this is where the start code goes


		  //this is where the validate code goes


		  //this is where the post code goes
		   $window.history.back();

		  //this is where the server response code goes





        };




		$scope.init = function(){
		}
		$scope.init();
}]);





