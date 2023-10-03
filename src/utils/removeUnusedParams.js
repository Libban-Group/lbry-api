export function removeUnusedParams(method, params) {
    Object.keys(params).forEach(k=>{
        if (!method.params.includes(k)) params[k] = undefined;
    })

    return params;
}