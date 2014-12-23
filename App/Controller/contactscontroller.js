/**
 * Created by antonysamy.j on 12/23/2014.
 */
'use strict';
contactui.controller('contactctrl',['$scope','$state','Contacts',function($scope,$state,Contacts){
    $scope.contacts=Contacts.data.contacts;
}]);

