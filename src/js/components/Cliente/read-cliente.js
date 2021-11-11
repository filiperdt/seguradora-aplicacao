export default cliente => {
    let output = '';

    output += `
        <div id="conteudoPrincipal" style="width: 600px; margin: auto;">
            <div>
                <h2 class='titulo-h2'>Cliente CPF ${cliente.cpf}</h2>
            </div>
            <div>
                <div>
                    <p><strong>Nome:</strong><br>
                    ${cliente.nome}</p>
                </div>
                <div>
                    <p><strong>Cidade/UF:</strong><br>
                    ${cliente.cidade + '-' + cliente.uf}</p>
                </div>
            </div>
            <div>
                <button type="button" class="btn btn-primary" onClick='fnUpdateClienteRead(${cliente.cpf})'>Editar</button>
                <button type="button" class="btn btn-primary" onClick='fnFecharDivDeExibicaoCliente()'>Fechar</button>
            </div>
        </div>
    `;

    return output;
}