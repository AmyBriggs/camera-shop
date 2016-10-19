const app = angular.module('cameraApp', [])

app.controller('mainController', ['$scope', function($scope){

  $scope.options = ['price', 'rating']
  // angular.forEach(camera, function(){
  //   if(camera.onSale === 'true') {
  //     ng-class='orange';
  //     console.log('orange');
  //   }
  // })

  $scope.addItem = function() {
    $scope.cameraArray.push({title: $scope.title, image: $scope.img, rating: $scope.rating, price: $scope.price, onSale: $scope.onSale})
  }
  $scope.cameraArray = [
  {
    title: 'Nikon D3100 DSLR',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    rating: 3.4,
    price: 369.99,
    onSale: true
  },
  {
    title: 'Canon EOS 70D',
    image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
    rating: 2.0,
    price: 1099.0,
    onSale: false
  },
  {
    title: 'Nikon D810A',
    image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
    rating: 4.2,
    price: 3796.95,
    onSale: true
  }
]

}])
