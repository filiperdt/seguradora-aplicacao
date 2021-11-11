import pesquisarApoliceNumeroForm from './pesquisar-apolice-numero-form.js';

let output = '';

const renderLine = apolices => apolices.forEach(apolice => {
    output += `
        <tr>
            <th scope="row">${fnShowIndexTableList()}</th>
            <td>${apolice.numero}</td>
            <td>${apolice.inicioVigencia}</td>
            <td>${apolice.fimVigencia}</td>
            <td>${apolice.placaVeiculo}</td>
            <td>${fnFormatarMoeda(apolice.valor)}</td>
            <td>${apolice.cliente.cpf}</td>
            <td><i class="fas fa-eye" id='btnReadApolice' onclick='fnReadApolice(${apolice.numero})' title='Exibir'></i></td>
            <td><i class="fas fa-pen" id='btnUpdateApolice' onclick='fnUpdateApoliceRead(${apolice.numero})' title='Editar'></i></td>
            <td><i class="fas fa-trash" id='btnDeleteApolice' onclick='fnDeleteApolice(${apolice.numero})' title='Excluir'></i></td>
        </tr>
    `;
});

export default apolices => {
    output = '';

    apolices.sort((a, b) => a.numero < b.numero ? -1 : a.numero === b.numero ? 0 : 1);

    fnRestartShowIndexTableList();

    output += `
        <div class="mt-3">
            <div style="display: inline-block; width: 120px;">
                <h3>Apólices</h3>
            </div>
            <div style="display: inline-block; width: 80px;">
                <i class="far fa-plus-square fa-2x" id='btnCreateApolice' onclick='fnCreateApoliceForm()' title="Adicionar apólice"></i>
            </div>
            <div id="pesquisaApoliceNumero" class="row" style="display: inline-block; width: 300px;">
                ${pesquisarApoliceNumeroForm()}
            </div>
        </div>
        <div class="divTableScroll">
            <table id="tableListApolices" class="table table-striped table-hover table-sm tableScroll">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Número</th>
                        <th scope="col">Início da vigência</th>
                        <th scope="col">Fim da vigência</th>
                        <th scope="col">Placa do veículo</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Exibir</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    `;

                    renderLine(apolices);
                    
                    output += `
                </tbody>
            </table>
        </div>
    `;

    return output;
}