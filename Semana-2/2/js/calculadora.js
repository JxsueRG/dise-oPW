let operacion ="";
let primerNumero="";

function agregarNumero(num){
    const resultado = document.getElementById('resultado');
    resultado.value += num;
}
function limpiar(){
    document.getElementById('resultado').value="";
    primerNumero="";
    operacion="";
}
function agregarOperacion(op){
    const resultado = document.getElementById('resultado');
    if(resultado.value !==''){
        primerNumero = resultado.value;
        operacion =op;
        resultado.value='';
    }
}//Agregar operacion
function calcularResultado(){
    const segundoNumero = document.getElementById('resultado').value;
    let res;
    //resivamos que las cadenas tengan valor
    if(primerNumero !== '' && segundoNumero !==''){
        switch(operacion){
            case '+':
                console.log(primerNumero + segundoNumero);
                res = parseFloat(primerNumero) + parseFloat (segundoNumero);
            break;
            case '-':
                console.log(primerNumero - segundoNumero);
                res = parseFloat(primerNumero) - parseFloat (segundoNumero);
            break;
            case '*':
                console.log(primerNumero * segundoNumero);
                res = parseFloat(primerNumero) * parseFloat (segundoNumero);
            break;
            case '/':
                if (segundoNumero == 0){
                    alert("Division by zero");
                    return;
                }
                res = parseFloat(primerNumero) / parseFloat (segundoNumero);
            break;
        }
        document.getElementById('resultado').value=res;
        primerNumero='';
        operacion='';
    }//llave de if de los numero con valor 
}