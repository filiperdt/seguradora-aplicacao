let output = '';

export default cliente => {
    output += `
        <div id="divFormClienteUpdate" style="width: 600px; margin: auto;">
            <div>
                <h2 class='titulo-h2'>Editar cliente CPF ${cliente.cpf}</h2>
            </div>
            <form id="formClienteUpdate">
                <div style="width: 100%;">
                    <div class="campoFormCliente">
                        <input class="form-control" id="formControlNomeClienteUpdate" name="formControlNomeClienteUpdate" value="${cliente.nome}" placeholder="Nome"></input>
                        <div id="erroNomeClienteUpdate" class="divMensagemErroClienteUpdate"></div>
                    </div>
                </div>
                <div class="divConteudoCentralizado">
                    <div class="campoFormCliente divInlineWidth77">
                        <input class="form-control" id="formControlCidadeClienteUpdate" name="formControlCidadeClienteUpdate" value="${cliente.cidade}" placeholder="Cidade"></input>
                        <div id="erroCidadeClienteUpdate" class="divMensagemErroClienteUpdate"></div>
                    </div>
                    <div class="campoFormCliente divInlineWidth23">
                        <input class="form-control" id="formControlUfClienteUpdate" name="formControlUfClienteUpdate" value="${cliente.uf}" placeholder="UF"></input>
                        <div id="erroUfClienteUpdate" class="divMensagemErroClienteUpdate"></div>
                    </div>
                </div>
            </form>
            <div>
                <input type="submit" form="formClienteUpdate" class="btn btn-primary" value="Salvar"><!-- Este input é o submit do form, apesar de estar fora dele. Pode ser colocado em qualquer lugar dentro do DOM -->
                <button type="button" class="btn btn-primary" onClick='fnFecharDivDeExibicaoCliente()'>Voltar</button>
            </div>
        </div>
    `;

    return output;
};