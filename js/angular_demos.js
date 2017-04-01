
routeAppControllers.controller('TextCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
       
        $scope.msg = $routeParams.msg || "It is the story about ";
    }
]);