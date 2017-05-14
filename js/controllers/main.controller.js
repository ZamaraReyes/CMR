(function(){
    'use strict';
    
    angular
        .module('CRM')
        .controller('MainController', MainController);
    
    MainController.$inject = ['$scope', 'Users'];
    
    function MainController($scope, Users) {
        $scope.newUser = {};
        $scope.users = [];
        $scope.editing = false;
        
        $scope.userCompleted = userCompleted;
        $scope.cancelUser = cancelUser;
        $scope.updateUser = updateUser;
        $scope.createNewUser = createNewUser;
        $scope.editUser = editUser;
        $scope.removeUser = removeUser;
        $scope.isSaved = isSaved;
        $scope.resetMemory = resetMemory;
        
        /*$scope.addUser = addUser;
        $scope.updateLocalStorage = updateLocalStorage;
        $scope.loadLocalStorage = loadLocalStorage;
        $scope.addDates = [];
        $scope.cleanNewUser = cleanNewUser;*/
        
        
        
        activate();

        function activate() {
            /*$scope.users = getUsers();*/
            $scope.users = Users.getAll();
        }
        
        function userCompleted() {
            return $scope.editForm.$valid;
        }
        
        function resetMemory() {
            cleanNewUser();
            Users.cleanMemory();
            $scope.users = {};
            $scope.editing = false;
        }
        
        function cleanNewUser() {
            $scope.newUser = {};
            var form = $scope.editForm;
            form.$setUntouched();
            form.$setPristine();
        }
        
        function cancelUser() {
            if ($scope.editing) $scope.editing = false;
            cleanNewUser();
        }
        
        function createNewUser() {
            if (userCompleted()) {
                $scope.newUser.id = randId();
                $scope.users.push($scope.newUser);
                Users.update($scope.users);
                cleanNewUser();
            }
        }
        
        function editUser(user) {
            $scope.newUser = angular.copy(user);
            $scope.editing = true;
        }
        
        function updateUser(user) {
            $scope.users.forEach(function (element, position) {
                if (element.id == user.id) {
                    $scope.users[position] = user;
                }
            })
            /*$scope.newUser = {};*/
            $scope.editing = false;
            Users.update($scope.users);
            cleanNewUser();
        }
        
        function removeUser(user) {
            var confirmation = prompt("¿Seguro que deseas borrar el usuario "+user.name+"?");
            if (confirmation == "si") {
                $scope.users.forEach(function (element, position) {
                    if (element.id == user.id) {
                        $scope.users.splice(position, 1);
                    }
                });
            }
            Users.update($scope.users);
        }
        
        function isSaved(user) {
            Users.isSaved(user);
        }
        
        function randId() {
            return Math.random().toString(36).substr(2, 20);
        }
    }
})();