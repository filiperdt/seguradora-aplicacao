let output = '';

export default () => {
    output += `
        <div id="divFormApoliceCreate" style="width: 600px; margin: auto;">
            <form id="formApoliceCreate">
                <div class="divConteudoCentralizado">
                    <div class="campoFormApolice divInlineWidth48">
                        <input class="form-control" id="formControlClienteApoliceCreate" name="formControlClienteApoliceCreate" placeholder="CPF"></input>
                        <div id="erroClienteApoliceCreate" class="divMensagemErroApoliceCreate"></div>
                    </div>
                    <div class="campoFormApolice divInlineWidth48">
                        <input class="form-control" id="formControlPlacaVeiculoApoliceCreate" name="formControlPlacaVeiculoApoliceCreate" placeholder="Placa do veículo"></input>
                        <div id="erroPlacaVeiculoApoliceCreate" class="divMensagemErroApoliceCreate"></div>
                    </div>
                </div>
                <div class="divConteudoCentralizado">
                    <div class="campoFormApolice divInlineWidth48">
                        <input class="form-control" id="formControlValorApoliceCreate" name="formControlValorApoliceCreate" placeholder="Valor"></input>
                        <div id="erroValorApoliceCreate" class="divMensagemErroApoliceCreate"></div>
                    </div>
                    <div class="campoFormApolice divInlineWidth48">
                        <input class="form-control" id="formControlFimVigenciaApoliceCreate" name="formControlFimVigenciaApoliceCreate" placeholder="Fim da vigência  AAAA-MM-DD"></input>
                        <div id="erroFimVigenciaApoliceCreate" class="divMensagemErroApoliceCreate"></div>
                    </div>
                </div>
            </form>
            <div>
                <input type="submit" form="formApoliceCreate" class="btn btn-primary" value="Salvar"><!-- Este input é o submit do form, apesar de estar fora dele. Pode ser colocado em qualquer lugar dentro do DOM -->
                <button type="button" class="btn btn-primary" onClick='fnFecharDivDeExibicaoApolice()'>Fechar</button>
            </div>
        </div>
    `;

    return output;
};