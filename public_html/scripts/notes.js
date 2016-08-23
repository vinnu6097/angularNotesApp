var app = angular.module('notesApp', []);
app.controller('notesList', function($scope, $http) {


   $http.get("notesList.php").then(function(response) {
        $scope.notes = response.data;
//        alert("notes ->"+$scope.notes);
    });


    $scope.addnotes = function () {

        //Insert to db

        $http.post('insert.php',{"notes":$scope.notesText}).success(function(data){
        if (data == true) {
//        alert("Inserted");
        }
        });


        $scope.newdata1 ="{\"notes\":\"" + $scope.notesText + "\"}";
        $scope.newdata2 = JSON.parse($scope.newdata1);
//        alert("newdata1="+$scope.notess.indexOf($scope.newdata1));
        if ($scope.notes.indexOf($scope.newdata2) == -1) {
            if (!$scope.notesText) {return;}

            $scope.notes.push($scope.newdata2);
        }
        else{
            $scope.errortext = "The item is already in your list.";
        }
    }

    $scope.removeItem = function (x) {

//        $scope.y=JSON.stringify($scope.notes[x]);
//        alert("x="+x+"->value="+$scope.y);

        $http.post('delete.php',$scope.notes[x]).success(function(data){
//            if (data == true) {
//            }
        });

        $scope.notes.splice(x, 1);

    }
});
