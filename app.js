const app = angular.module('cameraApp', [])

app.controller('mainController', ['$scope', function($scope){

  $scope.options = ['price', 'rating']


  $scope.listCameras = function() {
    $scope.cameraArray.push({id: $scope.id, title: $scope.title, image: $scope.img, rating: $scope.rating, price: $scope.price, onSale: $scope.onSale})
  }
  $scope.cameraArray = [
  {
    id: 1,
    title: 'Nikon D3100 DSLR',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    rating: 3.4,
    price: 369.99,
    onSale: true
  },
  {
    id: 2,
    title: 'Canon EOS 70D',
    image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
    rating: 2.0,
    price: 1099.0,
    onSale: false
  },
  {
    id: 3,
    title: 'Nikon D810A',
    image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
    rating: 4.2,
    price: 3796.95,
    onSale: true
  }
]

$scope.totalCost = 0;
$scope.cameraItems = [];

var taxRate = .18;

$scope.addCamera = function(camera) {
  $scope.cameraItems.push(camera)
  updatePrice()
}

function updatePrice() {
  var sum = 0;
  for(var i = 0; i < $scope.cameraItems.length; i++) {
    sum += $scope.cameraItems[i].price;
  }
  $scope.totalCost = sum + (sum * taxRate)
  $scope.totalCost = Math.floor($scope.totalCost)
  console.log($scope.totalCost);
}

}])
