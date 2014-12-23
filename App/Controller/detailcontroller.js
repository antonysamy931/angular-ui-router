/**
 * Created by antonysamy.j on 12/23/2014.
 */

contactui.controller('detailctrl',['$scope','$state','$stateParams',function($scope,$state,$stateParams){
    for(var i=0;i<$scope.contacts.length;i++){
        if($scope.contacts[i].id==$stateParams.id){
            $scope.contact=$scope.contacts[i];
        }
    }
}]);

contactui.controller('itemctrl',['$scope','$state','$stateParams',function($scope,$state,$stateParams){
    for(var i=0;i<$scope.contact.items.length;i++) {
        if($scope.contact.items[i].id==$stateParams.itemid) {
            $scope.item=$scope.contact.items[i];
        }
    }

    $scope.edit=function(){
      $state.go('.edit',$stateParams)
    };

}]);

contactui.controller('itemeditctrl',['$scope','$state','$stateParams',function($scope,$state,$stateParams){
    for(var i=0;i<$scope.contact.items.length;i++) {
        if($scope.contact.items[i].id==$stateParams.itemid) {
            $scope.item=$scope.contact.items[i];
        }
    }

    $scope.done=function() {
        //^ go to one parent page ^^ go to before 2 parent page
        $state.go('^',$stateParams);
    };

}]);