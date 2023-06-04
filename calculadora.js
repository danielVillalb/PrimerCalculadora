/*------definimos las variables---------------*/


let datosConcatenados="";
let datosConcatenados2="";
let matrizDatos=[],iteracion=0
let apretoPorcentaje=false;
let promedio="";
let promedio2="";
let datosPromedio="";
let porcentaje;
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
        if(apretoPorcentaje){
        document.getElementById("resultado2").innerHTML=eval(datosConcatenados);
    }else{
        const resultado = eval(datosConcatenados);
        document.getElementById("resultado2").innerHTML = resultado;
        console.log(resultado);
        apretoPorcentaje=false;
    }
    } catch (error) {
      console.log("error");
    }
  }

calcularPorcentaje=()=>{
    apretoPorcentaje=true;
    datosConcatenados=""
    for(let i=matrizDatos.length-1;i>=0;i--){
        if((matrizDatos[i]==="+")||((matrizDatos[i]==="-")||(matrizDatos[i]==="*")||(matrizDatos[i]==="=")||(matrizDatos[i]==="/"))){
            if(promedio===""){
            alert("mal sintaxico");
            break;
            }
            necesario=i;
            break;
        }else{
            promedio+=matrizDatos[i];
        }
    }
    if(necesario!==0){
        for(let j=0;j<necesario;j++){
            datosPromedio+=matrizDatos[j];
        }
    }
    for(let i=0;i<necesario+1;i++){
        datosConcatenados2+=matrizDatos[i];
    }
    for(let i=promedio.length-1;i>=0;i--){
        promedio2+=promedio[i];
    }
    datosConcatenados=datosConcatenados2+((eval(datosPromedio)*promedio2)/100);
    document.getElementById("resultado").innerHTML=datosConcatenados;
    /*------reemplazo el valor dentro de la matriz---------*/
    console.log("matriz de datos: ",matrizDatos)
    console.log("esto va a ser promedioi "+((eval(datosPromedio)*promedio2)/100));
    console.log("datosPromedio "+(eval(datosPromedio)));
    console.log("Promedio "+(promedio2));
    console.log("necesario "+necesario);
}
borrar=()=>{
    datosConcatenados=""
    datosConcatenados2=""
    promedio="";
    promedio2="";
    datosPromedio="";
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
    promedio="";
    promedio2="";
    datosPromedio="";
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




