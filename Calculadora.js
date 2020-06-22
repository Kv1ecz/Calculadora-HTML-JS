function atualiza_visor(number){
    if(document.form.visor.value == '0'){
        document.form.visor.value = number;
    } else if(document.form.visor.value =="" && number=='.'){
        document.form.visor.value = "0.";
    } else if(document.form.visor.value =="" && (number =='*' || number =='/' || number =='%')){
        document.form.visor.value ="";
    } else{
        document.form.visor.value = document.form.visor.value + number;
    }
}

function limpa_tela(){
    document.form.visor.value ="";
}
function backspace(){
    var str = document.form.visor.value;
    document.form.visor.value = str.substring(0,str.length-1);
}
function operacao(){
    var resultado = document.form.visor.value;
    document.form.visor.value = eval(resultado);
}