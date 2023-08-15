function promediar(primerTrimestre, segundoTrimestre, tercerTrimestre){
    const resultado = primerTrimestre + segundoTrimestre + tercerTrimestre ;
    const promedio = resultado / 3 ; 
    if(promedio >= 7){
        alert('Felicitaciones, aprobaste! Tu nota es un ' + promedio.toFixed(2) +'')
    }if(promedio < 7)
        alert('Lo siento, tu nota es un '+ promedio.toFixed(2) +' nos vemos en diciembre')
}

let primerTrimestre = parseFloat(prompt('por favor ingrese su nota del primer trimestre'));
while (isNaN(primerTrimestre)){
    primerTrimestre = parseFloat(prompt('por favor, ingrese un numero'));
} 
let segundoTrimestre = parseFloat(prompt('por favor ingrese su nota del segundo trimestre'));
while(isNaN(segundoTrimestre)){
    segundoTrimestre = parseFloat(prompt('por favor, ingrese un numero'));
}
let tercerTrimestre = parseFloat(prompt('por favor ingrese su nota del tercer trimestre'));
while(isNaN(tercerTrimestre)){   
    tercerTrimestre = parseFloat(prompt('por favor, ingrese un numero'))
}    



promediar (primerTrimestre, segundoTrimestre,tercerTrimestre);
