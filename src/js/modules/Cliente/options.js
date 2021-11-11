export const optionsPadrao = {
    mode: 'cors',
    cache: 'default'
};
export const optionsPadraoComHeaders = {
    ...optionsPadrao,
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
};
export const optionsListClientes = {
    ...optionsPadrao,
    method: 'GET'
};
export const optionsCreateCliente = body => (
    {
        ...optionsPadraoComHeaders,
        method: 'POST',
        body: JSON.stringify({
            ...body
        })
    }
);
export const optionsReadCliente = {
    ...optionsPadrao,
    method: 'GET'
};
export const optionsUpdateCliente = body => (
    {
        ...optionsPadraoComHeaders,
        method: 'PUT',
        body: JSON.stringify({
            ...body
        })
    }
);
export const optionsDeleteCliente = {
    ...optionsPadrao,
    method: 'DELETE'
};