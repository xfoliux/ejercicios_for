function generarTablas(){
    let numero = document.getElementById("txtNumber").value;
    let contenedor = document.getElementById("contenedorTabla");
    contenedor.innerHTML = " <h1>PROBANDO</h1>";
    let contenido = "";

    if(numero < 0 ){
        alert("Tiene que ser numero mayor a 0");
        return;
    }else if(numero == 0 ){
        alert("tiene que ser mayor a cero");
        return;
    }else if(numero % 1 ){
        alert("tiene que ser numeros enteros")
        return;
    }

    for( i = 1 ; i <= 10 ; i++){
        contenido = contenido + "<p>" + numero + "x" +  i + " = " + (numero * i) + "</p>";
    }
    contenedor.innerHTML = contenido;

}
