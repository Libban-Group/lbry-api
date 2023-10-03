import whitelist from '../whitelist.js';
import {removeUnusedParams} from '../../utils/removeUnusedParams.js'; 
import request from '../../utils/request.js';

export default async (c)=>{
    let body;
    try {
        body = await c.req.json()
    } catch (err) {
        
    }

    if (!body) return c.json({error: "body empty"});

    if (!Object.keys(whitelist).includes(body.method)) return c.json({ message: 'Method Not Allowed', ok: false }, 405);

    if (!whitelist[body.method].params) body.params = undefined;

    // Remove unnecessary params
    if (body.params && whitelist[body.method].params) body.params = removeUnusedParams(whitelist[body.method], body.params);

    const resp = await request(body);

    if (resp.error) return c.json(resp);

    return c.json(whitelist[body.method].callback ? whitelist[body.method].callback(resp) : resp);
}