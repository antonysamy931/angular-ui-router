/**
 * Created by antonysamy.j on 12/23/2014.
 */
angularui.controller('aboutctrl',['$scope','$state',function($scope,$state){
    $scope.data=$state.current.data.object;
    $scope.overridevalue=$state.current.data.Age;
}]);