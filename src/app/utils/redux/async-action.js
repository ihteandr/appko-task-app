export async function asyncAction(options) {
    options.type && options.dispatch({
        type: options.type,
        payload: options.payload,
    });
    const payload = await options.action().catch((error) => {
        options.errorType && options.dispatch({
            payload: error,
            type: options.errorType,
        });
    });
    options.successType && options.dispatch({
        type: options.successType,
        payload,
    });
    return payload;
}
