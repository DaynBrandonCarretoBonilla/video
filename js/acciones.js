// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$("#consulta1").on("tap", function (){
		$.ajax({
			type:"POST", 
			url:"http://192.168.1.71/videojuegos/buscarTodos.php",
			error: function(){
			 alert ('No se Puedo Conectar  a la Base de Datos');
			}, 
			success: function(respuesta){
				
			var datosjuegos = JSON.parse(respuesta);
			//alert(datosProducto.productos[0].nombreProducto);
		
			for (var x= 0; x<datosjuegos.juegos.length; x++)
			{
				$('#todo').append('<div><div><div style="display:inline-block"><img src="http://192.168.1.71/videojuegos/recursos/imagenes/fotos/'+datosjuegos.juegos[x].clave_videojuego+'.jpg" width="100"></div><div style="display:inline-block"><h1>'+ datosjuegos.juegos[x].nombre_videojuego +' </h1><h2> '+datosjuegos.juegos[x].genero_videojuego+' </h2></div></div><div><h2> '+datosjuegos.juegos[x].clasificacion_videojuego+' </h2><h2> '+datosjuegos.juegos[x].consola_videojuego+' </h2></div></div>');
			}
				$(':mobile-pagecontainer').pagecontainer('change', '#Pagina1',{
				transition: 'pop'
			});
			}
		});
			
		});// tap boton todo
		
		
		$("#btn_gen").on("tap", function (){
		$.ajax({
			type:"POST",
			 
			url:"http://192.168.1.71/videojuegos/buscarGenero.php",
			data: "genero=" + $('#txtgenero').val(), 
			error: function(){
			 alert ('No se Puedo Conectar  a la Base de Datos');
			}, 
			success: function(respuestagen){
				
			var datosjuegos = JSON.parse(respuestagen);
			//alert(datosProducto.productos[0].nombreProducto);
		
			for (var x= 0; x<datosjuegos.genero.length; x++)
			{
				$('#contenidogen').append('<div><div><div style="display:inline-block"><img src="http://192.168.1.71/videojuegos/recursos/imagenes/fotos/'+datosjuegos.genero[x].clave_videojuego+'.jpg" width="100"></div><div style="display:inline-block"><h1>'+ datosjuegos.genero[x].nombre_videojuego +' </h1><h2> '+datosjuegos.genero[x].genero_videojuego+' </h2></div></div><div><h2> '+datosjuegos.genero[x].clasificacion_videojuego+' </h2><h2> '+datosjuegos.genero[x].consola_videojuego+' </h2></div></div>');
			}
				$(':mobile-pagecontainer').pagecontainer('change', '#genero',{
				transition: 'pop'
			});
			}
		});
			
		});// tap btn_gen
		
		
		$("#btn_con").on("tap", function (){
		$.ajax({
			type:"POST", 
			url:"http://192.168.1.71/videojuegos/buscarConsola.php",
			data: "consola=" + $('#txtconsola').val(),
			error: function(){
			 alert ('No se Puedo Conectar  a la Base de Datos');
			}, 
			success: function(respuestaconsola){
				
			var datosconsola = JSON.parse(respuestaconsola);
			//alert(datosProducto.productos[0].nombreProducto);
		
			for (var x= 0; x<datosconsola.consola.length; x++)
			{
				$('#contenidocon').append('<div><div><div style="display:inline-block"><img src="http://192.168.1.68/videojuegos/recursos/imagenes/fotos/'+datosconsola.consola[x].clave_videojuego+'.jpg" width="100"></div><div style="display:inline-block"><h1>'+ datosconsola.consola[x].nombre_videojuego +' </h1><h2> '+datosconsola.consola[x].genero_videojuego+' </h2></div></div><div><h2> '+datosconsola.consola[x].clasificacion_videojuego+' </h2><h2> '+datosconsola.consola[x].consola_videojuego+' </h2></div></div>');
			}
				$(':mobile-pagecontainer').pagecontainer('change', '#consola',{
				transition: 'pop'
			});
			}
		});
			
		});// tap btn_con
}); 
});
