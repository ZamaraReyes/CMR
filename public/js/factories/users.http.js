(function(){
    'use strict';
    
    angular
        .module('CRM')
        .factory('UsersHTTP', UsersHTTP);
    
    UsersHTTP.$inject = ['$http'];
    
    function UsersHTTP($http) {
        var service = {
            getAll : getAll,
            update : update,
            add : add,
            get : get,
            remove : remove
        };
        
        var urlUsersAPI = 'http://localhost:3000/api/users';
        return service;
        
        
        function getAll() {
            return $http.get('http://localhost:3000/api/users').then(function(response){
                var users = response.data;
                return users;
            }, function(error) {
                console.log('Hubo algún error');
            });
        }
        
        
        function add(user) {
            return $http.post('http://localhost:3000/api/users', user).then(function(response){
                console.log('Todo salio bien');
            }, function(error) {
                console.log('Hubo algún error');
            });
        }
        
        
        function update(user) {
            return $http.put('http://localhost:3000/api/users'+user.id, user).then(function(response){
                console.log('Eliminado');
            }, function(error) {
                console.log('Error:', error);
            });
        }
    }
})();