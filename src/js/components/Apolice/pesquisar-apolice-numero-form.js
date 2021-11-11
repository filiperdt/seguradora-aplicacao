export default () => {
    let output = '';
    
    output += `
        <div id="divFormApolicePesquisarNumero">
            <form id="formApolicePesquisarNumero">
                <div class="mb-2">
                    <input type="number" class="form-control" id="formControlNumeroApolicePesquisar" name="formControlNumeroApolicePesquisar" min=0 placeholder="Pesquisar pelo número"></input>
                    <div id="erroApolicePesquisarNumero" class="divMensagemErroApolicePesquisarNumero"></div>
                </div>
            </form>
            <div>
                <input type="submit" form="formApolicePesquisarNumero" class="btn btn-primary" style="display: none" onclick="fnPesquisarApoliceFormAction()" value="Pesquisar"><!-- Este input é o submit do form, apesar de estar fora dele. Pode ser colocado em qualquer lugar dentro do DOM -->
            </div>
        </div>
    `;

    return output;
};