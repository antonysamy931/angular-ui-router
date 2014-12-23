/**
 * Created by antonysamy.j on 12/23/2014.
 */
var contactui=angular.module('contact-ui-app',['ui.router']);
var angularui=angular.module('angular-ui-app',['contact-ui-app','ui.router']);
angularui.run(['$rootScope','$state','$stateParams',function($rootScope,$state,$stateParams){
    $rootScope.$state=$state;
    $rootScope.$stateParams=$stateParams;
}])