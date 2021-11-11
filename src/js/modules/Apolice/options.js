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
export const optionsListApolices = {
    ...optionsPadrao,
    method: 'GET'
};
export const optionsCreateApolice = body => (
    {
        ...optionsPadraoComHeaders,
        method: 'POST',
        body: JSON.stringify({
            ...body
        })
    }
);
export const optionsReadApolice = {
    ...optionsPadrao,
    method: 'GET'
};
export const optionsUpdateApolice = body => (
    {
        ...optionsPadraoComHeaders,
        method: 'PUT',
        body: JSON.stringify({
            ...body
        })
    }
);
export const optionsDeleteApolice = {
    ...optionsPadrao,
    method: 'DELETE'
};
export const optionsGetPadrao = {
    ...optionsPadrao,
    method: 'GET'
};