let output = '';

export default () => {
    output += `
        <div id="divFormClienteCreate" style="width: 600px; margin: auto;">
            <form id="formClienteCreate">
                <div class="divConteudoCentralizado">
                    <div class="campoFormCliente divInlineWidth77">
                        <input class="form-control" id="formControlNomeClienteCreate" name="formControlNomeClienteCreate" placeholder="Nome"></input>
                        <div id="erroNomeClienteCreate" class="divMensagemErroClienteCreate"></div>
                    </div>
                    <div class="campoFormCliente divInlineWidth23">
                        <input class="form-control" id="formControlCpfClienteCreate" name="formControlCpfClienteCreate" placeholder="CPF"></input>
                        <div id="erroCpfClienteCreate" class="divMensagemErroClienteCreate"></div>
                    </div>
                </div>
                <div class="divConteudoCentralizado">
                    <div class="campoFormCliente divInlineWidth77">
                        <input class="form-control" id="formControlCidadeClienteCreate" name="formControlCidadeClienteCreate" placeholder="Cidade"></input>
                        <div id="erroCidadeClienteCreate" class="divMensagemErroClienteCreate"></div>
                    </div>
                    <div class="campoFormCliente divInlineWidth23">
                        <input class="form-control" id="formControlUfClienteCreate" name="formControlUfClienteCreate" placeholder="UF"></input>
                        <div id="erroUfClienteCreate" class="divMensagemErroClienteCreate"></div>
                    </div>
                </div>
            </form>
            <div>
                <input type="submit" form="formClienteCreate" class="btn btn-primary" value="Salvar"><!-- Este input é o submit do form, apesar de estar fora dele. Pode ser colocado em qualquer lugar dentro do DOM -->
                <button type="button" class="btn btn-primary" onClick='fnFecharDivDeExibicaoCliente()'>Fechar</button>
            </div>
        </div>
    `;

    return output;
};