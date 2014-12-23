/**
 * Created by antonysamy.j on 12/23/2014.
 */
angularui.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('Home',{
        resolve:{
            simpleObj:function(){
                return "simple object example";
            },
            secondObj:function(){
                return "second object example"
            }
        },
        url:'/',
        data:{
            name:'Antony home',//pass value to controller using state current object
            Age:'26'
        },
        views: {
            '':{
                templateUrl:'App/View/Home.html',
                controller:'homectrl'
            },
            'global@': {
                template: 'home page load view display in home page'
            }
        }
    }).
    state('About',{
        url:'/about',
        data:{
            object:"Antony about",
            Age:'Override 26 to 27'//overrider parent object and pass value to controller
        },
        views: {
            '':{
                templateUrl:'App/View/About.html',
                controller:'aboutctrl'
            },
            'global@': {
                template: 'about page load view display in home page'
            }
        }
    });
}]);

contactui.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider.
    state('contact',{
        resolve:{
            Contacts:function($http){
                var url='App/Data/contacts.json';
                return $http({
                    mehtod:'get',
                    url:url
                }).success(function(response,status,headers,config){
                    return response;
                }).error(function(err,status,headers,config){
                    return err;
                });
            }
        },
        abstract:true,
        url:'/contact',
        templateUrl:'App/View/Contact.html',
        controller:'contactctrl'
    }).
    state('contact.list',{
        url:'',
        templateUrl:'App/View/contact-list.html'
    }).
    state('contact.detail',{
        url:'/:id',
        views:{
            '':{
                templateUrl:'App/View/Detail.html',
                controller:'detailctrl'
            },
            'global@': {
                template: 'contact detail page load view display in home page'
            },
            'msgcontact':{
                templateProvider:['$stateParams',function($stateParams){
                    return 'Contact Id :'+$stateParams.id;
                }]
            }
        }
    }).
    state('contact.detail.item',{
        url:'/item/:itemid',
        views:{
            '@contact.detail':{
                templateUrl:'App/View/Detail.Item.html',
                controller:'itemctrl'
            },
            'global@': {
                template: 'contact item detail page load view display in home page'
            }
        }
    }).
    state('contact.detail.item.edit',{
        views: {
            '@contact.detail': {
                templateUrl: 'App/View/Detail.Item.Edit.html',
                controller: 'itemeditctrl'
            },
            'global@': {
                template: 'contact item edit page load view display in home page'
            }
        }
    });
}]);