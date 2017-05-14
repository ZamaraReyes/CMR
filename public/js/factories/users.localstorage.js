(function (){
    'use strict';
    
    angular
        .module('CRM')
        .factory('Users', Users);
    
    Users.$inject = [];
        
        function Users() {
            var service = {
                getAll : getAll,
                update : update,
                cleanMemory : removeAll,
                isSaved : isSaved
            };
            
            return service;
            
            
            function getAll() {
                if (localStorage.getItem("users")) {
                    var usersSaved = localStorage.getItem("users");
                    var realUsers = JSON.parse(usersSaved);
                    
                    if (typeof realUsers == "object" && realUsers instanceof Array)
                        return realUsers;
                    else {
                        realUsers = [];
                        localStorage.setItem("users", JSON.stringify(realUsers));
                        return realUsers;
                    }
                } else {
                    return [];
                }
            }
            
            
            function update(users) {
                var newUsers = JSON.stringify(users);
                localStorage.setItem("users", newUsers);
            }
            
            
            function removeAll() {
                localStorage.setItem("users", []);
            }
            
            
            function isSaved(user) {
            }
        }    
})();