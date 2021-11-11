const gerarTemplate = (tableListTodosClientes, tableListTodasApolices) => 
    `
        <div class="container mb-3">
            <div id="titulo" class="row">
                <h1>Seguradora de veículos</h1>
            </div>
            <div id="divExibirCliente" class="row">
            </div>
            <div id="todosClientes" class="row">
                ${tableListTodosClientes}
            </div>
            <div id="divExibirApolice" class="row">
            </div>
            <div id="todasApolices" class="row mt-3">
                ${tableListTodasApolices}
            </div>
        </div>
    `;

export default (tableListTodosClientes, tableListTodasApolices) => {
    return gerarTemplate(tableListTodosClientes, tableListTodasApolices);

}