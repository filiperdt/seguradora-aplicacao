var indexTableList = 1;

export const main = document.querySelector("#root");

export const path = 'http://localhost:8080/seguradora';

export const fnShowIndexTableList = () => {
    return indexTableList++;
}

export const fnRestartShowIndexTableList = () => {
    indexTableList = 1;
    return indexTableList;
}

// Quando clica no botão 'Voltar' em qualquer página, o conteúdo da página de destino é duplicado. Esta função elimina esta duplicação
export const fnRemoveElementosComIdsRepetidos = id => {
    var ids = document.querySelectorAll('#' + id), // Obtém uma collection de elementos com o mesmo id
        len = ids.length,
        n;
    
    if (len < 2) {return;}

    for (n = 1; n < len; n++) {
        if (ids[n]) {
            ids[n].parentElement.removeChild(ids[n]);
        }
    }
}

export const fnRemovePrimeirosElementosComIdsRepetidos = id => {
    var ids = document.querySelectorAll('#' + id), // Obtém uma collection de elementos com o mesmo id
        len = ids.length,
        n;
    
    if (len < 2) {return;}

    for (n = 0; n < len - 1; n++) {
        if (ids[0]) {
            ids[n].parentElement.removeChild(ids[n]);
        }
    }
}

export const fnFecharDivDeExibicaoCliente = () => {
    document.getElementById("divExibirCliente").style.display = "none";
}

export const fnFecharDivDeExibicaoApolice = () => {
    document.getElementById("divExibirApolice").style.display = "none";
}

export const fnFormatarMoeda = valor => {
    valor = valor + '';
    valor = valor.replace(/[\D]*/g, '');
    valor = valor + '';
    valor = valor.replace(/([0-9]{1})([0-9]{2})$/g, "$1,$2");

    let tamanhoValor = valor.length;
    
    if(tamanhoValor <= 2)
        valor = '0,00';
    else if(tamanhoValor >= 3 && tamanhoValor <= 6)
        valor = valor.replace(/([\d]{1})([\d]{2})$/g, "$1,$2");
    
    if(valor.length > 6)
        valor = valor.replace(/([0-9]{3})([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3");

    if(valor == 'NaN') valor = '';

    return "R$" + valor;
}