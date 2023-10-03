import request from '../../utils/request.js';

const [statusOK, statusNotReady, statusOffline, statusFailing] = ["ok", "not_ready", "offline", "failing"];

export default async (c)=>{
    // Fetch lbrynet status
    const resp = await request({
        "jsonrpc": "2.0",
        "method": "status"
    });
    
    // Define status of lbrynet
    let lbrynet_status;
    if (resp.error) lbrynet_status = statusOffline;
    else if (resp.result.error) lbrynet_status = statusFailing;
    else if (!resp.result.is_running) lbrynet_status = statusNotReady;
    else lbrynet_status = statusOK;

    return c.json({
        "timestamp": new Date().toISOString(),
        "services": {
            "lbrynet": [
                {"name": "lbrynet-" + process.env.API_NAME || 'a', "status": lbrynet_status}
            ]
        },
        "status": lbrynet_status
    })
};