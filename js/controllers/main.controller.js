(function(){
    'use strict';
    angular
    .module('CRM')
    .controller('MainController', MainController);
    
    MainController.$inject = ['$scope'];
    
    function MainController($scope) {
        $scope.users = [];
        $scope.deleteUser = deleteUser;
        $scope.newUser = {};
        $scope.addUser = addUser;
        $scope.isCompleted = isCompleted;
        $scope.editUser = editUser;
        $scope.cancelUser = cancelUser;
        $scope.updateUser = updateUser;
        $scope.updateLocalStorage = updateLocalStorage;
        $scope.loadLocalStorage = loadLocalStorage;
        $scope.addDates = [];
        
        activate();

        function activate() {
            $scope.users = getUsers();
        }
        
        function deleteUser(user) {
            $scope.users.forEach(function (element, position) {
                if (element.id == user) {
                    $scope.users.splice(position, 1);
                }
            });
        }
        
        function addUser(user) {
            user.id = newId();
            $scope.users.push(user);
            $scope.newUser = {};
        }
        
        function newId() {
            var lastId = 0;
            $scope.users.forEach(function (element) {
                if (element.id > lastId) lastId = element.id;
            });
            return ++lastId;
        }
        
        function isCompleted() {
            return $scope.newUser.name && ($scope.newUser.age > 0) && $scope.newUser.email;
        }
        
        function editUser(user) {
            $scope.newUser = angular.copy(user);
        }
        
        function cancelUser() {
            if ($scope.editing) $scope.editing = false;
            $scope.newUser = {};
            var form = $scope.editForm;
            form.$setUntouched();
            form.$setPristine();
        }
        
        function updateUser(user) {
            $scope.users.forEach(function (element, position) {
                if (element.id == user.id) {
                    $scope.users[position] = user;
                }
            })
            $scope.newUser = {};
        }
        
        function getUsers() {
            return [{
                name : 'Jaime Miller',
                email : 'gina.miller44@example.com',
                photo : 'https://randomuser.me/api/portraits/men/86.jpg',
                age : 23,
                id: 0
            },
            {
                name : 'David Barnett',
                email : 'gina.miller44@example.com',
                photo : 'https://randomuser.me/api/portraits/men/81.jpg',
                age : 24,
                id: 1
            },
            {
                name : 'Brandon Fields',
                email : 'erika.fields94@example.com',
                photo : 'https://randomuser.me/api/portraits/men/9.jpg',
                age : 25,
                id: 2
            },
            {
                name : 'Christian Sanchez',
                email : 'abigail.sanchez87@example.com',
                photo : 'https://randomuser.me/api/portraits/men/77.jpg',
                age : 25,
                id: 3
            }];
        }
        
        function updateLocalStorage() {
            window.localStorage.setItem("users", JSON.stringify($scope.users));
            
            var date = new Date();
            window.localStorage.setItem("date", date.getTime());
            
            var dates = window.localStorage.getItem("date");
            $scope.addDates.push(dates);
        }
        
        function loadLocalStorage() {
            var usuarios = window.localStorage.getItem("users");
            /*"customers" in localStorage*/
            if (usuarios) {
                $scope.users = JSON.parse(usuarios);
            }
        }
    }
})();