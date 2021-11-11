let output = '';

export default apolice => {
    output += `
        <div id="divFormApoliceUpdate" style="width: 600px; margin: auto;">
            <div>
                <h2 class='titulo-h2'>Editar apolice #${apolice.numero}</h2>
            </div>
            <form id="formApoliceUpdate">
                <div class="divConteudoCentralizado">
                    <div class="campoFormApolice divInlineWidth48">
                        <input class="form-control" id="formControlClienteApoliceUpdate" name="formControlClienteApoliceUpdate" value="${apolice.cliente.cpf}" placeholder="Cliente"></input>
                        <div id="erroClienteApoliceUpdate" class="divMensagemErroApoliceUpdate"></div>
                    </div>
                    <div class="campoFormApolice divInlineWidth48">
                        <input class="form-control" id="formControlPlacaVeiculoApoliceUpdate" name="formControlPlacaVeiculoApoliceUpdate" value="${apolice.placaVeiculo}" placeholder="Placa do veículo"></input>
                        <div id="erroPlacaVeiculoApoliceUpdate" class="divMensagemErroApoliceUpdate"></div>
                    </div>
                </div>
                <div class="divConteudoCentralizado">
                    <div class="campoFormApolice divInlineWidth48">
                        <input class="form-control" id="formControlValorApoliceUpdate" name="formControlValorApoliceUpdate" value="${apolice.valor}" placeholder="Valor"></input>
                        <div id="erroValorApoliceUpdate" class="divMensagemErroApoliceUpdate"></div>
                    </div>
                    <div class="campoFormApolice divInlineWidth48">
                        <input class="form-control" id="formControlFimVigenciaApoliceUpdate" name="formControlFimVigenciaApoliceUpdate" value="${apolice.fimVigencia}" placeholder="Fim da vigência  AAAA-MM-DD"></input>
                        <div id="erroFimVigenciaApoliceUpdate" class="divMensagemErroApoliceUpdate"></div>
                    </div>
                </div>
            </form>
            <div>
                <input type="submit" form="formApoliceUpdate" class="btn btn-primary" value="Salvar"><!-- Este input é o submit do form, apesar de estar fora dele. Pode ser colocado em qualquer lugar dentro do DOM -->
                <button type="button" class="btn btn-primary" onClick='fnFecharDivDeExibicaoApolice()'>Voltar</button>
            </div>
        </div>
    `;

    return output;
};