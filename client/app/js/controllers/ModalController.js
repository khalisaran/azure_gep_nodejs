 app.controller('ModalContrl', [ '$scope','$modalInstance','$timeout','modalDataObj' , function($scope,$modalInstance,$timeout,modalDataObj) {

	console.log('Modal Controller');

	$scope.modalData = modalDataObj;

	$scope.ok = function() {
		$modalInstance.close($scope.modalData);
	};

	$scope.cancel = function() {
		 $timeout(function() {
    		 $modalInstance.dismiss('cancel');
    	    }, 500);
	};

} ]);
 