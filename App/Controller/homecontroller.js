/**
 * Created by antonysamy.j on 12/23/2014.
 */
angularui.controller('homectrl',['$scope','$state','simpleObj','secondObj',function($scope,$state,simpleObj,secondObj){
    $scope.data=$state.current.data.name;
    $scope.override=$state.current.data.Age;
    $scope.simpleobj=simpleObj;
    $scope.secondobj=secondObj;
}])