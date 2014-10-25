(function(){

	var app = angular.module('ingreso',[]);// Modulo de Angular
	// esta variable guarda todos los registros del Archivo
	var estudiantes=JSON.parse(localStorage.getItem('todo')) || [];
	var mostrar;//Todo el String del LocalStorage
	// Esta variable guarda todos los registro con por lo menos un campo vacio
	
	// Controlador
	app.controller('CsvController',['$scope',function($scope){
		//var vacios =JSON.parse(localStorage.getItem('vacios')) || [];
		var Juanjo = 0; // cuenta registros con un campo vacio
				
		$scope.archivo=$('#archivo-csv');
		$scope.archivo.on('click',function(){
  			localStorage.removeItem('vacios');
			localStorage.removeItem('todo');
		});
		$scope.archivo.on('change',function(){
			$(this).parse({// Convierte de CSV a JSON--papa parse
				config: {
					header:true,// Toma La cabecera de la tabla
					complete: function(results) {
						// Toma JSON y lo convierte a String-Lo guarda en local Storage
						localStorage.setItem("todo", JSON.stringify(results.data));
						mostrar= localStorage.getItem('todo');// Lo llama del local Storage
						estudiantes=results.data;// lo convierte en JSON y lo asigna a estudiantes
						console.log(estudiantes);// muestra estudiantes en consola
						for(var i=0;i<estudiantes.length;i++){//recorre todos los objetos del array estudiantes
							for(key in estudiantes[i]){// se hace un for para entrar a cada objeto
								if(estudiantes[i][key]==""){// se le pide que busque cada nombre en todos los objetos
									Juanjo++;// que incremente la variable cada vez que encuentre el nombre
									console.log('loque sea:'+ Juanjo);// muestra el numero de objetos con algun campo vacio
									vacios.push(estudiantes[i]);
								}
							}
						}
						console.log('Objetos con campo vacio blablabla:',vacios);
						localStorage.setItem('vacios',JSON.stringify(vacios));
							
					}
				}
			});
 	   

});
 
 		

}]);

app.controller('TablaController',['$scope',function($scope){
	
	$scope.alumnos=vacios;
	$scope.completo = function(){
		confirm('mete tu hp cedula para salirte');
	};
}]);

})();

