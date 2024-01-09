//iniciando o script

butao.addEventListener('click', valida);

function valida() {

    var valor = pin.value;
    var diferenca = valorRandom - valor;
    if (valor.trim().length == 0) {
        return alert('Por favor preencher o campo.(' + diferenca +')');
    }else if(valor.length < 4 || valor.length > 4){
    return alert('Ensira um número de 4 (Quatro) Dígitos.');
    }
    else if(diferenca == 10){
    return alert('O valor digita está proximo do valor correcto. (' + valorRandom +')');
    }
    else if(valorRandom == valor){
    outPutItem.display
    return alert('Parabéns! O seu PIN foi verificado com sucesso. (' + valorRandom +')');
    }
    else if(valorRandom > valor){
    return alert('O valor digitado é menor. (' + valorRandom +')');
    }
    else if(valorRandom < valor){
    return alert('O valor inserido é muito maior. (' + valorRandom +')');
    }
    else{ 
     return alert('Opsi! tente novamente. (' + valorRandom +')');
    };
}
 