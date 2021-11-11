let output = '';

const renderLine = clientes => clientes.forEach(cliente => {
    output += `
        <tr>
            <th scope="row">${fnShowIndexTableList()}</th>
            <td style="text-align: left">${cliente.nome}</td>
            <td>${cliente.cpf}</td>
            <td style="text-align: left">${cliente.cidade}</td>
            <td>${cliente.uf}</td>
            <td><i class="fas fa-eye" id='btnReadCliente' onclick='fnReadCliente(${cliente.cpf})' title='Exibir'></i></td>
            <td><i class="fas fa-pen" id='btnUpdateCliente' onclick='fnUpdateClienteRead(${cliente.cpf})' title='Editar'></i></td>
            <td><i class="fas fa-trash" id='btnDeleteCliente' onclick='fnDeleteCliente(${cliente.cpf})' title='Excluir'></i></td>
        </tr>
    `;
});

export default clientes => {
    output = '';

    clientes.sort((a, b) => a.nome.toLowerCase() < b.nome.toLowerCase() ? -1 : a.nome.toLowerCase() === b.nome.toLowerCase() ? 0 : 1);

    fnRestartShowIndexTableList();

    output += `
        <div class="mt-4">
            <div style="display: inline-block; width: 120px;">
                <h3>Clientes</h3>
            </div>
            <div style="display: inline-block; width: 80px;">
                <i class="far fa-plus-square fa-2x" id='btnCreateCliente' onclick='fnCreateClienteForm()' title="Adicionar cliente"></i>
            </div>
        </div>
        <div class="divTableScroll">
            <table id="tableListClientes" class="table table-striped table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" width="350">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col" width="350">Cidade</th>
                        <th scope="col">UF</th>
                        <th scope="col">Exibir</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    `;

                    renderLine(clientes);
                    
                    output += `
                </tbody>
            </table>
        </div>
    `;

    return output;
}