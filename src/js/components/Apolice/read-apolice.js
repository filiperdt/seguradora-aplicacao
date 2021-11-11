export default apolice => {
    let output = '';

    let dataFim = new Date(apolice.fimVigencia);
    
    let vencida = dataFim < Date.now();
    
    const tempoDiferenca = Math.abs(dataFim - Date.now());
    const diasDiferenca = Math.ceil(tempoDiferenca / (1000 * 60 * 60 * 24));

    let diasFrase = vencida? 'Vencida há ' + (diasDiferenca - 1) + ' dias' : 'Faltam ' + diasDiferenca + ' dias para vencer';

    output += `
        <div id="conteudoPrincipal" style="width: 600px; margin: auto;">
            <div>
                <h2 class='titulo-h2'>Apólice #${apolice['numero']}</h2>
            </div>
            <div>
                <div class="divConteudoCentralizado">
                    <div class="divInlineWidth48">
                        <p><strong>Cliente:</strong><br>
                        ${apolice['cliente']['cpf']}</p>
                    </div>
                    <div class="divInlineWidth48">
                        <p><strong>Placa do veículo:</strong><br>
                        ${apolice['placaVeiculo']}</p>
                    </div>
                </div>
                <div class="divConteudoCentralizado">
                    <div class="divInlineWidth48">
                        <p class="divInlineWidth50"><strong>Situação:</strong><br>
                        ${vencida? 'Vencida' : 'Não vencida'}</p>
                    </div>
                    <div class="divInlineWidth48">
                        <p class="divInlineWidth50"><strong>Dias do vencimento:</strong><br>
                        ${diasFrase}</p>
                    </div>
                </div>
                <div class="divConteudoCentralizado">
                    <div class="divInlineWidth48">
                        <p class="divInlineWidth50"><strong>Início da vigência:</strong><br>
                        ${apolice['inicioVigencia']}</p>
                    </div>
                    <div class="divInlineWidth48">
                        <p class="divInlineWidth50"><strong>Fim da vigência:</strong><br>
                        ${apolice['fimVigencia']}</p>
                    </div>
                </div>
                <div>
                    <div class="divInlineWidth48">
                        <p><strong>Valor:</strong><br>
                        ${fnFormatarMoeda(apolice['valor'])}</p>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" class="btn btn-primary" onClick='fnUpdateApoliceRead(${apolice.numero})'>Editar</button>
                <button type="button" class="btn btn-primary" onClick='fnFecharDivDeExibicaoApolice()'>Fechar</button>
            </div>
        </div>
    `;

    return output;
}