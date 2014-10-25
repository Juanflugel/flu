( function(){

	var app = angular.module('peo',[]);

	var jovenes = [{nombre:'Pablo',apellido:'Ramos',edad:'23'},{nombre:'Juan',apellido:'Garcia',edad:'24'},
	{nombre:'Jessica',apellido:'Junkes',edad:'23'},{nombre:'Lennin',apellido:'Suescun',edad:'23'}];

	// ASIGNA LA VARIABLE jovenes ALA PROPIEDAD personas
	app.controller('FlugelController',['$scope',function($scope){
		$scope.personas = jovenes;
	}]);
    // ASIGNA LA VARIABLE jovenes ALA PROPIEDAD personas


    // CREA UNA NUEVA PERSONA COMO OBJETO Y LO AÑADE A LA TABLA
    app.controller('NuevoController',['$scope',function($scope){
    	$scope.persona = {};

    	$scope.addperson = function(){
    		jovenes.push($scope.persona);
    		console.log(jovenes);
    		$scope.persona={};
    	};
    }]);
    // CREA UNA NUEVA PERSONA COMO OBJETO Y LO AÑADE A LA TABLA

    // SUBIR UN ARCHIVO Y LEER SU NOMBRE, TIPO Y TAMAÑO
    app.controller('CsvController',['$scope',function($scope){

    	$scope.tomar = document.getElementById('archivo-csv');
    	$scope.tomar.addEventListener('change',function(){

            $('#archivo-csv').parse({
                config: {
                    header:true,
                    complete: function(results) {
                        console.log("Parse results:", results.data);
                    }
                }
            });




         files = $scope.tomar.files;
         len = files.length;

            for (var i=0; i < len; i++) {
                console.log("Filename: " + files[i].name);
                console.log("Type: " + files[i].type);
                console.log("Size: " + files[i].size + " bytes");
            }
        });
    }]);
    // SUBIR UN ARCHIVO Y LEER SU NOMBRE, TIPO Y TAMAÑO




})();