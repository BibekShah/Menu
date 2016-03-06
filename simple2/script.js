// angular.module('myApp', [])
// .controller('Controller', ['$scope', function($scope) {
//   $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
//   $scope.igor = { name: 'Igor', address: '123 Somewhere' };
// }])
// .controller('ControllerOne', ['$scope', function($scope) {
//   $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
//   $scope.igor = { name: 'Igor', address: '123 Somewhere' };
// }])
// .directive("user", function() {
//     return {
//         restrict: 'E',
//         link: function(scope, element, attrs) {
//             scope.username = attrs.username;
//             scope.avatar = attrs.avatar;
//             scope.htmlFile = attrs.htmlFile;
//         },
//         templateUrl: function(elem, attr){
//       					return attr.htmlFile;
//     				}
//     }
// });

angular.module('myApp', [])
.controller('Controller', ['$scope','$attrs',function($scope,$attrs) {

  // var temp = $attrs.value2;
  // (JSON.parse(temp));
  // console.log(temp);
  // $scope.dumdum = temp;
  console.log('the value2 is ');
  console.log(JSON.parse($attrs.value2));
  // console.log(($attrs.value2));
  // console.log(JSON.parse('[{"p": 5},{"q" : 7}]'));
  $scope.control = JSON.parse($attrs.value2);
  console.log($scope.control);
  $scope.dummy = [{'col1':'231','col2':'255'},{'col1':'11','col2':'25'},{'col1':'43','col2':'85'},{'col1':'98','col2':'095'}];
  // 	
}])
.controller('Controller1', ['$scope','$attrs',function($scope,$attrs) {
  $scope.control = JSON.parse($attrs.value2);
  console.log($scope.control);
  $scope.dummy = [{'col1':'22','col2':'535'},{'col1':'211','col2':'225'},{'col1':'243','col2':'285'},{'col1':'298','col2':'2095'}];	
}])
.directive('myCustomer', function() {
  return {
//   	link: function(scope,element,attrs){
// //   			scope.value1 = attrs.value1;
// //   			scope.value1 = attrs.value2;
// // //             scope.avatar = attrs.avatar;
// //             scope.htmlFile = attrs.htmlFile;	

//   	},
    templateUrl: function(elem, attr){
      return attr.name;
    }
  };
});



