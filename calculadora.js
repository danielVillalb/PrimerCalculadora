/*------definimos las variables---------------*/


let datosConcatenados="";
let datosConcatenados2="";
let matrizDatos=[],iteracion=0



let necesario=0;

/*-----------funciones-----------*/
operacion=(ides)=>{
    let texto2=document.getElementById(ides).textContent;
    matrizDatos[iteracion]=texto2;
    iteracion++;
    datosConcatenados+=texto2;
    document.getElementById("resultado").innerHTML=datosConcatenados;
}
escribir=(dato)=>{ 
    let texto=document.getElementById(dato).textContent
    matrizDatos[iteracion]=texto;
    datosConcatenados+=texto;
    document.getElementById("resultado").innerHTML=datosConcatenados;
    console.log("matriz datos");
    console.log(matrizDatos);
    iteracion++;
    console.log("Datos concatenados:", datosConcatenados);
}
calcular=()=>{
    try {
        document.getElementById("resultado2").innerHTML=eval(datosConcatenados);
    } catch (error) {
      console.log("error");
    }
  }



    
borrar=()=>{
    datosConcatenados=""
    datosConcatenados2=""
  
  
    document.getElementById("resultado").innerHTML="";
    document.getElementById("resultado2").innerHTML = "";
    for(let i=0;i<iteracion;i++){
        matrizDatos.pop()
        matrizDatos
        console.log("esto es i de borrar "+i)
    }
    iteracion=0;
    apretoPorcentaje=false;
}
let datosConcatenados3="";
let iterar=1;
let nuevaMatriz=[];
borrarNumero=()=>{
    datosConcatenados="";
    datosConcatenados2="";

    matrizDatos.pop();
    matrizDatos;
    console.log("matriz de datos nueva");
    console.log(matrizDatos);
    for(let i=0;i<matrizDatos.length;i++){
        datosConcatenados+=matrizDatos[i];
    }
    document.getElementById("resultado").innerHTML=datosConcatenados;
    document.getElementById("resultado2").innerHTML="";
    iteracion--;
}




