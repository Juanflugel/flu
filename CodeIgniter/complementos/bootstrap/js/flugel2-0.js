	var app=angular.module('ingreso2',[]);

	app.controller('CsvController',['$scope',function($scope){
		$scope.alumnoss = "pepe";
		var estudiantes=JSON.parse(localStorage.getItem('todo')) ||[];

		$scope.setAlumnos = function(data){
			$scope.alumnos = data;

			console.log('entro');
		};

		$scope.alumnos= estudiantes;

		$scope.tomar = $('#archivo-csv');
		$scope.tomar.on('click',function(){
  			
			localStorage.removeItem('todo');
		});

		$scope.subir = function(){
			$scope.tomar.parse({
				config: {
					header:true,
					complete: function(results) {
						console.log("Parse results:", results.data);
						estudiantes=results.data;
						$scope.setAlumnos(results.data);						
						localStorage.setItem('todo',JSON.stringify(estudiantes));
					}
				}
			});
			};
	}]);
