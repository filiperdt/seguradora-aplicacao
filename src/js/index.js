import {main, path, fnShowIndexTableList, fnRestartShowIndexTableList, fnRemoveElementosComIdsRepetidos, fnRemovePrimeirosElementosComIdsRepetidos, fnFecharDivDeExibicaoCliente, fnFecharDivDeExibicaoApolice, fnFormatarMoeda} from './modules/utils.js';
import index from './components/main.js';
import * as optionsCliente from './modules/Cliente/options.js';
import * as optionsApolice from './modules/Apolice/options.js';
import listCliente from './components/Cliente/list-cliente.js';
import listApolice from './components/Apolice/list-apolice.js';
import createClienteForm from './components/Cliente/create-cliente-form.js';
import createApoliceForm from './components/Apolice/create-apolice-form.js';
import readCliente from './components/Cliente/read-cliente.js';
import readApolice from './components/Apolice/read-apolice.js';
import updateClienteForm from './components/Cliente/update-cliente-form.js';
import updateApoliceForm from './components/Apolice/update-apolice-form.js';

var pathCliente = path + '/clientes';
var pathApolice = path + '/apolices';

// INDEX
const fnIndex = () => {
    fnListCliente();
};

const fnListCliente = () =>
    fetch(pathCliente, optionsCliente.optionsListClientes)
    .then(data => data.json())
    .then(clientes => {
        const tableListTodosClientes = listCliente(clientes);
        fnListApolice(tableListTodosClientes);
    })
    .catch(e => console.log(`Ocorreu um erro. fnListCliente: ${e}`));

const fnListApolice = tableListTodosClientes =>
fetch(pathApolice, optionsApolice.optionsListApolices)
.then(data => data.json())
.then(apolices => {
    const tableListTodasApolices = listApolice(apolices);
    fnMontarIndex(tableListTodosClientes, tableListTodasApolices);
})
.catch(e => console.log(`Ocorreu um erro. fnListApolice: ${e}`));

const fnMontarIndex = (tableListTodosClientes, tableListTodasApolices) => {
    main.innerHTML = index(tableListTodosClientes, tableListTodasApolices);
};

// CRUD CLIENTE
// CREATE
const fnCreateClienteForm = () => {
    let divExibir = "divExibirCliente";
    let conteudo = createClienteForm();
    
    exibirDivConteudo(divExibir, conteudo);

    fnRemoveElementosComIdsRepetidos('divFormClienteCreate');
    fnCreateClienteFormAction();
};

const fnCreateClienteFormAction = () => {
    const elemento = document.querySelector('#formClienteCreate');
    
    elemento.addEventListener('submit', evento => {
        evento.preventDefault();
        fnCreateClienteBody();
    });
};

const fnCreateClienteBody = () => {
    const cpf = document.querySelector('#formControlCpfClienteCreate').value;
    const nome = document.querySelector('#formControlNomeClienteCreate').value;
    const cidade = document.querySelector('#formControlCidadeClienteCreate').value;
    const uf = document.querySelector('#formControlUfClienteCreate').value;
    
    const createBody = {
        cpf: cpf,
        nome: nome,
        cidade: cidade,
        uf: uf
    }

    fnCreateCliente(createBody);
};

const fnCreateCliente = createBody => 
    fetch(pathCliente, optionsCliente.optionsCreateCliente(createBody))
    .then(data => data.json())
    .then(cliente => {
        [].forEach.call(document.getElementsByClassName("divMensagemErroClienteCreate"), div => div.style.display = 'none');

        if(cliente.erro){
            gerarMensagensDeErroClienteCreate(cliente);
        }else{
            fnRecarregarListCliente();
        }
    })
    .catch(e => console.log(`Ocorreu um erro. fnCreateCliente: ${e}`));

const fnRecarregarListCliente = () =>
    fetch(pathCliente, optionsCliente.optionsListClientes)
    .then(data => data.json())
    .then(clientes => {
        let divTodosClientes = document.getElementById("todosClientes");
        
        fnFecharDivDeExibicaoCliente();

        divTodosClientes.innerHTML = '';
        divTodosClientes.innerHTML = listCliente(clientes);
    })
    .catch(e => console.log(`Ocorreu um erro. fnRecarregarListCliente: ${e}`));

// READ
const fnReadCliente = cpf => {
    cpf = completarZerosEsquerdaCpf(cpf);

    const url = pathCliente + '/' + cpf;
    fetch(url, optionsCliente.optionsReadCliente)
    .then(data => data.json())
    .then(cliente => {
        let divExibir = "divExibirCliente";
        let conteudo = readCliente(cliente);
        
        exibirDivConteudo(divExibir, conteudo);
    })
    .catch(e => console.log(`Ocorreu um erro. fnReadCliente: ${e}`))
};

// UPDATE
const fnUpdateClienteRead = cpf => {
    cpf = completarZerosEsquerdaCpf(cpf);

    const url = pathCliente + '/' + cpf;
    fetch(url, optionsCliente.optionsReadCliente)
    .then(data => data.json())
    .then(cliente => {
        fnUpdateClienteForm(cliente);
    })
    .catch(e => console.log(`Ocorreu um erro. fnUpdateClienteRead: ${e}`));
};

const fnUpdateClienteForm = cliente => {
    let divExibir = "divExibirCliente";
    let conteudo = updateClienteForm(cliente);
    
    exibirDivConteudo(divExibir, conteudo);

    fnRemovePrimeirosElementosComIdsRepetidos('divFormClienteUpdate');

    fnUpdateClienteFormAction(cliente.cpf);
};

const fnUpdateClienteFormAction = cpf => {
    const elemento = document.querySelector('#formClienteUpdate');
    
    elemento.addEventListener('submit', evento => {
        evento.preventDefault();
        fnUpdateClienteBody(cpf);
    });
};

const fnUpdateClienteBody = cpf => {
    const nome = document.querySelector('#formControlNomeClienteUpdate').value;
    const cidade = document.querySelector('#formControlCidadeClienteUpdate').value;
    const uf = document.querySelector('#formControlUfClienteUpdate').value;
    
    const updateBody = {
        nome: nome,
        cidade: cidade,
        uf: uf
    }

    fnUpdateCliente(updateBody, cpf);
};

const fnUpdateCliente = (updateBody, cpf) => {
    const url = pathCliente + '/' + cpf;
    fetch(url, optionsCliente.optionsUpdateCliente(updateBody))
    .then(data => data.json())
    .then(cliente => {
        [].forEach.call(document.getElementsByClassName("divMensagemErroClienteUpdate"), div => div.style.display = 'none');

        if(cliente.erro){
            gerarMensagensDeErroClienteUpdate(cliente);
        }else{
            fnRecarregarListCliente();
        }
    })
    .catch(e => console.log(`Ocorreu um erro. fnUpdateCliente: ${e}`));
}

// DELETE
const fnDeleteCliente = cpf => {
    cpf = completarZerosEsquerdaCpf(cpf);
    
    const confirma = confirm(`Deseja realmente excluir o registro CPF ${cpf}?`);
    if(confirma){
        const url = pathCliente + '/' + cpf;
        return fetch(url, optionsCliente.optionsDeleteCliente)
        .then(data => data.json())
        .then(cliente => {
            alert((JSON.stringify(cliente.message, null, 4)).replace(/"/g, ''));
            fnRecarregarListCliente();
        })
        .catch(e => console.log(`Ocorreu um erro. fnDeleteCliente: ${e}`))
    }
};

// CRUD APÓLICE
// CREATE
const fnCreateApoliceForm = () => {
    let divExibir = "divExibirApolice";
    let conteudo = createApoliceForm();
    
    exibirDivConteudo(divExibir, conteudo);

    fnRemoveElementosComIdsRepetidos('divFormApoliceCreate');
    fnCreateApoliceFormAction();
};

const fnCreateApoliceFormAction = () => {
    const elemento = document.querySelector('#formApoliceCreate');
    
    elemento.addEventListener('submit', evento => {
        evento.preventDefault();
        fnCreateApoliceBody();
    });
};

const fnCreateApoliceBody = () => {
    const cliente = document.querySelector('#formControlClienteApoliceCreate').value;
    const placaVeiculo = document.querySelector('#formControlPlacaVeiculoApoliceCreate').value;
    const valor = document.querySelector('#formControlValorApoliceCreate').value;
    const fimVigencia = document.querySelector('#formControlFimVigenciaApoliceCreate').value;
    
    const createBody = {
        cliente: cliente,
        placaVeiculo: placaVeiculo,
        valor: valor,
        fimVigencia: fimVigencia
    }

    fnCreateApolice(createBody);
};

const fnCreateApolice = createBody => {
    fetch(pathApolice, optionsApolice.optionsCreateApolice(createBody))
    .then(data => data.json())
    .then(apolice => {
        [].forEach.call(document.getElementsByClassName("divMensagemErroApoliceCreate"), div => div.style.display = 'none');

        if(apolice.erro){
            gerarMensagensDeErroApoliceCreate(apolice);
        }else{
            fnRecarregarListApolice();
        }
    })
    .catch(e => console.log(`Ocorreu um erro. fnCreateApolice: ${e}`));
}

const fnRecarregarListApolice = () =>
    fetch(pathApolice, optionsApolice.optionsListApolices)
    .then(data => data.json())
    .then(apolices => {
        let divTodasApolices = document.getElementById("todasApolices");
        
        fnFecharDivDeExibicaoApolice();

        divTodasApolices.innerHTML = '';
        divTodasApolices.innerHTML = listApolice(apolices);
    })
    .catch(e => console.log(`Ocorreu um erro. fnRecarregarListApolice: ${e}`));

// READ
const fnReadApolice = numero => {
    const url = pathApolice + '/' + numero;
    fetch(url, optionsApolice.optionsReadApolice)
    .then(data => data.json())
    .then(apolice => {
        let divExibir = "divExibirApolice";
        let conteudo = readApolice(apolice);
        
        exibirDivConteudo(divExibir, conteudo);
    })
    .catch(e => console.log(`Ocorreu um erro. fnReadApolice: ${e}`))
};

// UPDATE
const fnUpdateApoliceRead = numero => {
    const url = pathApolice + '/' + numero;
    fetch(url, optionsApolice.optionsReadApolice)
    .then(data => data.json())
    .then(apolice => {
        fnUpdateApoliceForm(apolice);
    })
    .catch(e => console.log(`Ocorreu um erro. fnUpdateApoliceRead: ${e}`));
};

const fnUpdateApoliceForm = apolice => {
    let divExibir = "divExibirApolice";
    let conteudo = updateApoliceForm(apolice);
    
    exibirDivConteudo(divExibir, conteudo);

    fnRemovePrimeirosElementosComIdsRepetidos('divFormApoliceUpdate');

    fnUpdateApoliceFormAction(apolice.numero);
};

const fnUpdateApoliceFormAction = numero => {
    const elemento = document.querySelector('#formApoliceUpdate');
    
    elemento.addEventListener('submit', evento => {
        evento.preventDefault();
        fnUpdateApoliceBody(numero);
    });
};

const fnUpdateApoliceBody = numero => {
    const cliente = document.querySelector('#formControlClienteApoliceUpdate').value;
    const placaVeiculo = document.querySelector('#formControlPlacaVeiculoApoliceUpdate').value;
    const valor = document.querySelector('#formControlValorApoliceUpdate').value;
    const fimVigencia = document.querySelector('#formControlFimVigenciaApoliceUpdate').value;
    
    const updateBody = {
        cliente: cliente,
        placaVeiculo: placaVeiculo,
        valor: valor,
        fimVigencia: fimVigencia
    }

    fnUpdateApolice(updateBody, numero);
};

const fnUpdateApolice = (updateBody, numero) => {
    const url = pathApolice + '/' + numero;
    fetch(url, optionsApolice.optionsUpdateApolice(updateBody))
    .then(data => data.json())
    .then(apolice => {
        [].forEach.call(document.getElementsByClassName("divMensagemErroApoliceUpdate"), div => div.style.display = 'none');

        if(apolice.erro){
            gerarMensagensDeErroApoliceUpdate(apolice);
        }else{
            fnRecarregarListApolice();
        }
    })
    .catch(e => console.log(`Ocorreu um erro. fnUpdateApolice: ${e}`));
}

// DELETE
const fnDeleteApolice = numero => {
    const confirma = confirm(`Deseja realmente excluir o registro #${numero}?`);
    if(confirma){
        const url = pathApolice + '/' + numero;
        return fetch(url, optionsApolice.optionsDeleteApolice)
        .then(data => data.json())
        .then(apolice => {
            alert((JSON.stringify(apolice.message, null, 4)).replace(/"/g, ''));
            fnRecarregarListApolice();
        })
        .catch(e => console.log(`Ocorreu um erro. fnDeleteApolice: ${e}`))
    }
};

// PESQUISAR NÚMERO DA APÓLICE
const fnPesquisarApoliceFormAction = () => {
    const elemento = document.querySelector('#formApolicePesquisarNumero');
    
    elemento.addEventListener('submit', evento => {
        evento.preventDefault();
        fnPesquisarApoliceBody();
    });
};

const fnPesquisarApoliceBody = () => {
    const numero = document.querySelector('#formControlNumeroApolicePesquisar').value;

    fnPesquisarApolice(numero);
};

const fnPesquisarApolice = numero => {
    const url = pathApolice + '/consultar-por-numero/' + numero;
    fetch(url, optionsApolice.optionsGetPadrao)
    .then(data => data.json())
    .then(apolice => {
        [].forEach.call(document.getElementsByClassName("divMensagemErroApolicePesquisarNumero"), div => div.style.display = 'none');

        if(apolice.erro){
            gerarMensagensDeErroPesquisaNumero(apolice);
        }else{
            let divExibir = "divExibirApolice";
            let conteudo = `<strong>Apólice encontrada pelo número:</strong><br>` + readApolice(apolice);
            
            exibirDivConteudo(divExibir, conteudo);
        }
    })
    .catch(e => console.log(`Ocorreu um erro. fnPesquisarApolice: ${e}`));
}

// GERAR MENSAGENS DE ERRO
const gerarMensagensDeErroClienteCreate = cliente => {
    let paragraphClass = '';
    let divExibir = '';

    paragraphClass = cliente.erro === true? 'erro-mensagem' : 'sucesso-mensagem';

    if(cliente.cpf){
        divExibir = "erroCpfClienteCreate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, cliente.cpf);
    }
    if(cliente.nome){
        divExibir = "erroNomeClienteCreate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, cliente.nome);
    }
    if(cliente.cidade){
        divExibir = "erroCidadeClienteCreate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, cliente.cidade);
    }
    if(cliente.uf){
        divExibir = "erroUfClienteCreate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, cliente.uf);
    }
}

const gerarMensagensDeErroClienteUpdate = cliente => {
    let paragraphClass = '';
    let divExibir = '';

    paragraphClass = cliente.erro === true? 'erro-mensagem' : 'sucesso-mensagem';

    if(cliente.cpf){
        divExibir = "erroCpfClienteUpdate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, cliente.cpf);
    }
    if(cliente.nome){
        divExibir = "erroNomeClienteUpdate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, cliente.nome);
    }
    if(cliente.cidade){
        divExibir = "erroCidadeClienteUpdate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, cliente.cidade);
    }
    if(cliente.uf){
        divExibir = "erroUfClienteUpdate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, cliente.uf);
    }
}

const gerarMensagensDeErroApoliceCreate = apolice => {
    let paragraphClass = '';
    let divExibir = '';

    paragraphClass = apolice.erro === true? 'erro-mensagem' : 'sucesso-mensagem';

    if(apolice.cliente){
        divExibir = "erroClienteApoliceCreate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, apolice.cliente);
    }
    if(apolice.placaVeiculo){
        divExibir = "erroPlacaVeiculoApoliceCreate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, apolice.placaVeiculo);
    }
    if(apolice.valor){
        divExibir = "erroValorApoliceCreate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, apolice.valor);
    }
    if(apolice.fimVigencia){
        divExibir = "erroFimVigenciaApoliceCreate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, apolice.fimVigencia);
    }
}

const gerarMensagensDeErroApoliceUpdate = apolice => {
    let paragraphClass = '';
    let divExibir = '';

    paragraphClass = apolice.erro === true? 'erro-mensagem' : 'sucesso-mensagem';

    if(apolice.cliente){
        divExibir = "erroClienteApoliceUpdate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, apolice.cliente);
    }
    if(apolice.placaVeiculo){
        divExibir = "erroPlacaVeiculoApoliceUpdate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, apolice.placaVeiculo);
    }
    if(apolice.valor){
        divExibir = "erroValorApoliceUpdate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, apolice.valor);
    }
    if(apolice.fimVigencia){
        divExibir = "erroFimVigenciaApoliceUpdate";
        
        exibirDivMensagemErro(divExibir, paragraphClass, apolice.fimVigencia);
    }
}

const gerarMensagensDeErroPesquisaNumero = apolice => {
    let paragraphClass = '';
    let divExibir = '';

    paragraphClass = apolice.erro === true? 'erro-mensagem' : 'sucesso-mensagem';

    if(apolice.numero){
        divExibir = "erroApolicePesquisarNumero";
        
        exibirDivMensagemErro(divExibir, paragraphClass, apolice.numero);
    }
}

// FUNÇÕES GERAIS

const exibirDivConteudo = (nomeDivExibir, conteudo) => {
    let divExibir = document.getElementById(nomeDivExibir);
        
    divExibir.innerHTML = '';
    divExibir.innerHTML = conteudo;
    divExibir.style.display = "inline";
}

const exibirDivMensagemErro = (nomeDivExibir, paragraphClass, conteudo) => {
    let divExibir = document.getElementById(nomeDivExibir);
        
    divExibir.innerHTML = `<p class=${paragraphClass}>${conteudo}</p>`;
    divExibir.style.display = "inline";
}

const completarZerosEsquerdaCpf = cpf => {
    cpf = cpf.toString();
    
    while(cpf.length < 11){
        cpf = '0' + cpf;
    }

    return cpf;
}

// INÍCIO
window.addEventListener("load", () => {
    fnIndex();
});

// Passa funções do escopo do módulo para o escopo global
window.fnCreateClienteForm = fnCreateClienteForm;
window.fnCreateApoliceForm = fnCreateApoliceForm;
window.fnReadCliente = fnReadCliente;
window.fnReadApolice = fnReadApolice;
window.fnUpdateClienteRead = fnUpdateClienteRead;
window.fnUpdateApoliceRead = fnUpdateApoliceRead;
window.fnDeleteCliente = fnDeleteCliente;
window.fnDeleteApolice = fnDeleteApolice;
window.fnShowIndexTableList = fnShowIndexTableList;
window.fnRestartShowIndexTableList = fnRestartShowIndexTableList;
window.fnFecharDivDeExibicaoCliente = fnFecharDivDeExibicaoCliente;
window.fnFecharDivDeExibicaoApolice = fnFecharDivDeExibicaoApolice;
window.fnFormatarMoeda = fnFormatarMoeda;
window.fnPesquisarApoliceFormAction = fnPesquisarApoliceFormAction;