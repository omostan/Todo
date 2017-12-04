/* eslint-disable */
(function () {

    'use strict';

    angular
        .module('myTodos', []);

    angular
        .module('myTodos')
        .controller('TodoCtrl', TodoCtrl);
    TodoCtrl.$inject = ['$log'];

    function TodoCtrl($log) {

        var vm = this;

        //View bind-ables
        vm.remove           = remove;
        vm.addTodo          = addTodo;
        vm.unMarked         = unMarked;
        vm.remaining        = remaining;
        vm.getTotalTodos    = getTotalTodos;
        vm.toggleJsonString = toggleJsonString;

        vm.showJson = false;

        vm.todos = [{
            "text": "AppDynamics Overview",
            "done": true
        }, {
            "text": "Application-Tier-Node",
            "done": true
        }, {
            "text": "Business Transaction",
            "done": true
        }, {
            "text": "Transaction Snapshots",
            "done": true
        }, {
            "text": "Architecture Overview, Metrics & Baselines",
            "done": true
        }, {
            "text": "Explore Service Endpoints",
            "done": true
        }, {
            "text": "Diagnostics Sessions",
            "done": true
        }, {
            "text": "Health Rules and Events",
            "done": true
        }, {
            "text": "Errors",
            "done": true
        }, {
            "text": "Troubleshoot Node-Level Issues",
            "done": true
        }, {
            "text": "Custom Dashboards",
            "done": true
        }, {
            "text": "Troubleshooting War Room",
            "done": true
        }, {
            "text": "Business Transaction Management",
            "done": true
        }, {
            "text": "Configure Service Endpoint",
            "done": true
        }, {
            "text": "Configure Transaction and Backend Detection",
            "done": true
        }, {
            "text": "Configure Information Points",
            "done": true
        }, {
            "text": "Use Development Mode",
            "done": true
        }, {
            "text": "JMX Visibility",
            "done": true
        }, {
            "text": "Configure Windows Performance Counters",
            "done": false
        }, {
            "text": "Configure Data Collectors (Page 105 for .NET)",
            "done": true
        }, {
            "text": "Troubleshooting Scenarios",
            "done": true
        }, {
            "text": "Too Many/Slow Database calls",
            "done": false
        }, {
            "text": "Over Synchronization",
            "done": false
        }, {
            "text": "Memory Management",
            "done": false
        }, {
            "text": "MVC WebAPI",
            "done": false
        }];

        $log.log('Todos: ' + JSON.stringify(vm.todos));

        function getTotalTodos() {
            return vm.todos.length;
        }

        function remaining() {
            var count = 0;
            angular.forEach(vm.todos, function (todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        }

        function addTodo() {
            if (!vm.formTodoText) {
                return null;
            } else {
                var newTodo = {
                    text: vm.formTodoText,
                    done: false
                };
                vm.todos.push(newTodo);
                vm.formTodoText = '';
            }
            return null;
        }

        function unMarked() {
            var oldTodos = vm.todos;
            vm.todos = [];
            angular.forEach(oldTodos, function (todo) {
                if (!todo.done) vm.todos.push(todo);
            });
            //$log.log('Todos: ' + JSON.stringify(vm.todos));
        }

        function toggleJsonString() {
            if (!vm.showJson) {
                vm.showJson = true;
            } else {
                vm.showJson = false;
            }
        }

        function remove(arr, val) {
            //Ref: https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript/18885102#18885102
            //first, check if marked for deletion
            if (!val.done)
                return;
            var j = 0;
            for (var i = 0, l = arr.length; i < l; i++) {
                if (arr[i] !== val) {
                    arr[j++] = arr[i];
                }
            }
            arr.length = j;
        }

        return vm;
    }
}());